import * as types from '../actions/type';

let Initialstate = [];
export default function customerOrderReducer(state=Initialstate, action) {
    switch (action.type) {
            case types.UPDATE_CUSTOMERS_ORDERLIST:                         // when adding Qty
                state = [ 
                    ...state,Object.assign({},action.user_order)
            
                ];
                return state;
       
            default:
                return state;
    }
}