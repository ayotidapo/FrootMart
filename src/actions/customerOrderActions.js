import * as types from './type';


export function updateOrders(user_order) {
    return { type: types.UPDATE_CUSTOMERS_ORDERLIST, user_order};
}
