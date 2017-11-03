import React from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import * as cartActions from '../../actions/cartActions'; 
import * as shoppingActions from '../../actions/shoppingActions'; 
import toastr from 'toastr';

class CustomerOrder  extends React.Component{

    constructor(props){
        super(props);
        this.state={
            allorders:Object.assign([],props.allOrders)
        }
    }

    render(){
        
        return(
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Customer's Nmae</th>
                            <th>Date of Order</th>
                            <th>Phone No</th>
                            <th>Order Status</th>
                            <th>______</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.allorders.map((order,index) =>
                        <tr>
                            <td>{order.name}</td>
                            <td>{order.date}</td>
                            <td>{order.phone}</td>
                            <td>{order.status}</td>
                            <td>View full details</td>
                        </tr>
                            )}
                    </tbody>
                </table>

            </div>

        )
        
    }
}
function mapStateToProps(state, ownProps) {
        
        return {
            allOrders: state.allOrders
        };
    }
    function mapDispatchToProps(dispatch) {  
   return {
              actions:  {
                shoppingActions: bindActionCreators(shoppingActions, dispatch),
                cartActions: bindActionCreators(cartActions, dispatch)
              }
          }
    }
export default connect(mapStateToProps,mapDispatchToProps) (CustomerOrder);
