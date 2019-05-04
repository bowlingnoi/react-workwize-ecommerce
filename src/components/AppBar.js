import React from 'react'
import { Box, Heading } from 'grommet'
import { connect } from 'react-redux'
import ShoppingCartButton from './ShoppingCartButton';


class AppBar extends React.Component{

    render() {
        return (
            <Box tag="header"
                direction="row"
                align="center"
                justify="between"
                background="brand"
                pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                elevation="medium"
                style={{ zIndex: '1' }} >
                <Heading level="4"
                    margin="xsmall" >
                    Bowlingnoi store
                </Heading>
                <ShoppingCartButton />
            </Box>
        )
    }
}


const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}
export default connect(mapStateToProps)(AppBar);