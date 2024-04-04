//Action Types
const WISHLIST_ADD_ITEM = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';


//Action creator
export function addWishListItem(productId){
    return {type: WISHLIST_ADD_ITEM, payload:{productId}}
}

export function removeWishListItem(productId){
    return {type: WISHLIST_REMOVE_ITEM, payload:{productId}}
}


//Reducers
export default function wishListReducer(state=[],action){
    switch(action.type){
        case WISHLIST_ADD_ITEM:
            return [...state,action.payload]
            break;
        case WISHLIST_REMOVE_ITEM:
                return state.filter(item=>action.payload.productId!==item.productId)
                break;
        default:
            return state;
    }
}