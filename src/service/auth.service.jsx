import axios from "axios";


const API_URL = "http://localhost:8080/customer/";

class AuthService {
 
  
  
  login(userName, password) {
    return axios
      .post(API_URL + "signin", {
        userName,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  sendOtpCode(phoneNumber) {
    return axios
      .post("https://saptasoch.herokuapp.com/twilio", {
        phoneNumber
        
      })
      
  }

  // sendOtpCode(phoneNumber){
  //   console.log("phone number", phoneNumber);
  //   return axios.post("http://localhost:8080/twilio",{
  //     method: 'POST',
   
  //     data:{phoneNumber},
  //     headers: {
        
  //       'Content-Type': 'application/json'
  //     }
 
    
  //   }
   
  //   );
    

  // }
  verifyOtpCode(phoneNumber,otpCode){
    return axios.post("http://localhost:8080/twilio/verify",{
      phoneNumber,otpCode
    }).then(response => {
      return response.data;
    })
  }
  checkCredentials(customerName,contactNo,email,password){
    return axios(API_URL + "check", {
      method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
      data:{customerName,
      contactNo,
           email,
            password,
      }
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(customerName,contactNo,email,password) {
    return axios(API_URL + "signup", {
      method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
      data:{customerName,
      contactNo,
      email,
     password,
      }
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
