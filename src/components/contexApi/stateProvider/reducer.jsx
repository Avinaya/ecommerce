import axios from "axios";
const API_URL="https://saptasoch.herokuapp.com/order";

export const initialState={
    
    basket:JSON.parse(localStorage.getItem("cart")) || [],user:null,deliveryAddress:JSON.parse(localStorage.getItem("delivery")),order:[JSON.parse(localStorage.getItem("cart")),JSON.parse(localStorage.getItem("delivery"))]
};

//Anything on data layer is state
const reducer = (state,action) => {
   

    switch(action.type){
        case 'ADD_TO_ORDER':
            console.log("order",state.order[0]);
            return axios.post(API_URL , {
                
        customerId: 1,
     
 orderDeliveryAddressDto: {
    city: state.order[1].city,
    contactNo: state.order[1].contactNo,
    contactPerson: state.order[1].contactPerson,
    district: state.order[1].district,
    state: state.order[1].state,
    street: state.order[1].street
  },
  orderDetailsDtos: [
    {
      
      productId: state.order[0].id,
     
      totalQuantity: state.order[0].productQuantity
    }
  ],
  orderHistoryDto: {
    remark: "active"
  },
  orderStatusId: 0,
  paymentTypeId: 0,
  taxType: "percentage",
  taxValue: 0
            });
        break;
        case 'ADD_TO_DELIVERY':
        
        localStorage.setItem("delivery",JSON.stringify(action.item));
        return{
            ...state, deliveryAddress:action.item
        }

        break;

        case 'ADD_TO_BASKET':
            let addBasket=[...state.basket];
            const val=state.basket.findIndex((basketItem) => basketItem.id === action.item.id);
            if(val>=0){
                //item exists,update it 

                console.log("new basket",addBasket[val].productQuantity);
                console.log(action.item.productQuantity);
                addBasket[val].productQuantity=addBasket[val].productQuantity+action.item.productQuantity;
                console.log("updated basket",addBasket[val].productQuantity);
                localStorage.setItem("cart",JSON.stringify(addBasket));
            }else{
                addBasket.push(action.item);
                localStorage.setItem("cart",JSON.stringify(addBasket));
            }
       
      
        
            return{...state,
            basket: addBasket
        };
        
            break;

        case 'REMOVE_FROM_BASKET':
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index>=0){
                //item exists,remove it 
                newBasket.splice(index,1);
                localStorage.setItem("cart",JSON.stringify(newBasket));
            }else{
                console.warn('cant remove product');
            }
            
            return{...state,basket:newBasket};
            break;
            case 'UPDATE_FROM_BASKET':
                let updateBasket=[...state.basket];
                const key=state.basket.findIndex((basketItem) => basketItem.id === action.item.id);
    
                if(key>=0){
                    //item exists,update it 

                    console.log("new basket",updateBasket[key].productQuantity);
                    console.log(action.item.productQuantity);
                    updateBasket[key].productQuantity=action.item.productQuantity;
                    console.log("updated basket",updateBasket[key].productQuantity);
                    localStorage.setItem("cart",JSON.stringify(updateBasket));
                }else{
                    console.warn('cant update product');
                }
                
                return{...state,basket:updateBasket};
                break;
            default:
                return state;
    }
   
}
export default reducer;