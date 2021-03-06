import React from 'react'
import { withRouter } from 'react-router-dom'
import { Box, DropButton, Stack, Text, Button } from 'grommet';
import { Shop } from 'grommet-icons';
import CartItemList from './CartItemList';
import { connect } from 'react-redux'

class ShoppingCartButton extends React.Component{

    render() {
        const { cartLength, cartAmount } = this.props

        return (
            <DropButton dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                    <Box>
                        <CartItemList />
                        <Box pad="small"><Button primary
                            alignSelf="center"
                            pad="medium"
                            onClick={() => this.props.history.push('/checkout')} >Checkout</Button></Box>
                    </Box>
                } >

                <Stack anchor="top-right">
                    <Shop size="32px" />
                    <Box
                        background="accent-4"
                        pad={{ horizontal: 'xsmall' }}
                        round >
                        <Text size="xsmall">{cartAmount}</Text>
                    </Box>

                </Stack>

            </DropButton>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartLength: state.cart.cartItems.length,
        cartAmount: state.cart.cartItems.reduce((amount, item) => { return amount + item.amount }, 0 )
    }
}
export default connect(mapStateToProps)( withRouter(ShoppingCartButton) );