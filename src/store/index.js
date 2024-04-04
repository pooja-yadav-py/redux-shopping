
// console.log("pppp")
import { combineReducers, createStore } from 'redux';

import cartReducer from './cartReducer';
import wishListReducer from './wishListReducer';
import productReducer from './productReducers';

import {increaseItemQuantity, decreaseItemQuantity, addCartItem, removeCartItem} from './cartReducer'
import {addWishListItem, removeWishListItem} from './wishListReducer';
//======================Manage complex state=========
/* const initialState = {
    products : productList,
    cartItems : [],
    wishList : []
}

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_= "cart/increaseItem";
const CART_ITEM_DECREASE= "cart/decreaseItem";

const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'; */


/* 
function reducer(state= initialState,action){
    console.log(action.payload?.productId)
    switch(action.type){
        case CART_ADD_ITEM:
            return {...state,cartItems:[...state.cartItems,action.payload]}
            break;
        case CART_REMOVE_ITEM:
            return {...state,cartItems:state.cartItems.filter(item=>action.payload.productId!==item.productId)}
            break;
        case CART_ITEM_INCREASE:
            return {...state,
                 cartItems:state.cartItems.map((item)=>{
                 if(item.productId===action.payload.productId){
                    return {...item,quantity:item.quantity+1}
                 }
                 return item
            })}
            break;
        case CART_ITEM_DECREASE:
            return {
                ...state,
                cartItems:state.cartItems.map((item)=>{
                    if(item.productId===action.payload.productId){
                        return {...item,quantity:item.quantity-1}
                    }
                    return item;
                })
            }
            break;
        case WISHLIST_ADD_ITEM:
            return {...state,wishList:[...state.wishList,action.payload]}
            break;
            case WISHLIST_REMOVE_ITEM:
                return {...state,wishList:state.wishList.filter(item=>action.payload.productId!==item.productId)}
                break;
        default:
            return state;
    }
} */

let reducer = combineReducers({
    cartItems:cartReducer,
    wishList:wishListReducer,
    products:productReducer
})

export let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());//store enhancer
console.log(store);

/* //for Cart
store.dispatch(addCartItem(5,12));
store.dispatch(addCartItem(8,1));
store.dispatch(addCartItem(3,14));
store.dispatch(addCartItem(2,7));
store.dispatch(addCartItem(7,11));

store.dispatch(removeCartItem(8));

store.dispatch(increaseItemQuantity(2));
store.dispatch(increaseItemQuantity(3));

store.dispatch(decreaseItemQuantity(3));

//for wishlist
store.dispatch(addWishListItem(18));
store.dispatch(addWishListItem(2));
store.dispatch(addWishListItem(12));

store.dispatch(removeWishListItem(18)); */





console.log(store.getState());































// ========== simple state example===========================
/* const initialState = {
    count:0,
    name:'Anurag Singh',
    age:25
}

const INCREMENT= "count/increment";
const DECREMENT= "count/decrement";
const INCREASE_BY= "count/incrementBy";
const DECREASE_BY = "count/decrementBy";

//reducer
function reducer(state=initialState,action){
    
    switch(action.type){
        case INCREMENT:
            return { ...state,count:state.count + 1 }
            break;
        case DECREMENT:
            return { ...state,count:state.count - 1 }
            break;
        case INCREASE_BY:
            return {...state,count:state.count+action.payload}
            break;
        case DECREASE_BY:
            return {...state,count:state.count-action.payload}
            break;
        default:
            return state
    }
}


let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());//store enhancer


console.log(store);

//jb jb state change hoga automatic ye chl jayega
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch({type:INCREMENT})
store.dispatch({type:INCREASE_BY, payload: 7})
store.dispatch({type:DECREMENT})
store.dispatch({type:DECREASE_BY,payload:3});

 */



/*
let state = {
    count:0,
    name:'Anurag Singh',
    age:25
}

    let previousState = state;
    function increment(){
        // *** Mutating State (directly modify krna)***
        // state.count=state.count+1
        
        //*** Not Mutating State ***
        // state = {count:state.count+1}
        state = {...state, count:state.count+1}
        
        
    }

    increment();
    console.log(state);
    increment();
    console.log(state);
    increment();
    console.log(state);
*/
// =================================================================