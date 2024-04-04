
//Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY= "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY= "cart/decreaseItemQuantity";


//Action Creator
export function addCartItem(productData){
    return {type: CART_ADD_ITEM, payload:productData}
}

export function removeCartItem(productId){
    return {type: CART_REMOVE_ITEM, payload:{productId}}
}

export function increaseItemQuantity(productId){
    return {type: CART_ITEM_INCREASE_QUANTITY, payload:{productId}}
}
export function decreaseItemQuantity(productId){
    return {type: CART_ITEM_DECREASE_QUANTITY, payload:{productId}}
}

//Reducers
export default function cartReducer(state=[],action){
    switch(action.type){
        case CART_ADD_ITEM:
            const existingItem = state.find((item)=>item.productId===action.payload.productId);
            if(existingItem){
                return state.map((item)=>{
                    if(item.productId ===existingItem.productId){
                    return {...item,quantity:item.quantity+1}
                }
                return item;
            })
            }else{
                return [...state,{  ...action.payload, quantity: 1 }]
            }
            
            break;
        case CART_REMOVE_ITEM:
            return state.filter(item=>action.payload.productId!==item.productId)
            break;
        case CART_ITEM_INCREASE_QUANTITY:
            return state.map((cartItem) => {
                if (cartItem.productId === action.payload.productId) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            })
            break;
        case CART_ITEM_DECREASE_QUANTITY:
            return state
                .map((item)=>{                
                    if(item.productId===action.payload.productId){
                        return {...item,quantity:item.quantity-1}
                    }
                    return item;
                }).filter((item)=>item.quantity>0)
            break;
        default:
            return state;
    }
}