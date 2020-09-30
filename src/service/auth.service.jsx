import axios from "axios";


const API_URL = "https://saptasoch.herokuapp.com/customer/";
const config = {
  headers: { "Content-Type": "multipart/form-data" }
};


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

  
  verifyOtpCode(phoneNumber,otpCode){
    return axios.post("https://saptasoch.herokuapp.com/twilio/verify",{
      phoneNumber,otpCode
    }).then(response => {
      return response.data;
    })
  }
  checkCredentials(customerName,contactNo,email,password){
    return axios(API_URL + "signUp", {
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
 

  register(otp) {
    let formData=new FormData();
    formData.append("otp",otp);
    return axios.post(
      API_URL + "verifyOtp",
      formData
    );
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
