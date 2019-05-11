import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet';

class CheckoutPage extends Component {
    componentDidMount()
    {
        this.props.getCartItems()
    }

    render() {
        return (
            <Box direction="row"
            pad="medium" fill>
                <Box width="medium" pad={{top: "small", right: "small"}} >
                    Cart Checkout
                </Box>

                <Box flex>
                    {/* Form Checkout Shipping Address & Billing Address input */}
                    <Box pad="small" >
                        <h2>Customer Data</h2>
                    </Box>
                    
                    <Box pad="small">
                        <h2>Shipping Address</h2>
                    </Box>

                    <Box pad="small">
                        <h2>Billing Address</h2>
                    </Box>
                </Box>
            </Box>
        )
    }
}


const mapStateToProps = state => {
    console.log( 'checkoutpage: ', state )
    return {
        cartItems: state.cart.cartItems
    }
}
const mapDispatchToProps = (dispatch) => ({
    getCartItems: dispatch.cart.getCartItemsAsync
})
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage)