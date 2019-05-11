// import request from '../utils/request';
import request from '../../utils/request'

export const cart = {
    state: {
        cartItems: [
            // {
            //     productId: [1],
            //     amount: 2
            // }
        ],
        q: '',
        totalPrice: 0
    }, // initial state
    reducers: {
        // - sequencial function / item
        // handle state changes with pure functions
        addItem(state, payload) {
            console.log( 'reducers: ' , state, payload )
            const isDuplicateItem = state.cartItems.some((item, idx) => item.productId === payload.productId)
            
            if ( isDuplicateItem ) {
                const cartItems = state.cartItems.map(o => {
                    if (o.productId === payload.productId) {
                        return {
                            ...o,
                            amount: o.amount + 1
                        }
                    }
                    return o
                })
                return {
                    ...state,
                    cartItems
                }
            }

            // add new item
            return {
                ...state,
                cartItems: [{
                    productId: payload.productId,
                    name: payload.name,
                    amount: 1
                }, ...state.cartItems]
            }
        },
        deleteItem(state, payload) {
            return state
        },
        queryItem(state, payload) {
            console.log(state, payload)
            return {
                ...state,
                q: payload
            }
        },
        updateItem(state, payload) {
            return state
        },
        setCartItems( state, payload ) {
            return {
                ...state,
                cartItems: payload,
            }
        },
        setTotalPrice(state, payload) {
            return {
                ...state,
                totalPrice: payload
            }
        }
    },
    effects: (dispatch) => ({ 
        // - asyncronous function
        // handle state changes with impure functions.
        // use async/await for async actions
        // async addProductItem(payload, rootState) {
        //     await new Promise(resolve => setTimeout(resolve, 1000))
        //     dispatch.count.increment(payload)
        // }

        async getCartItemsAsync() {
            const res = await request.get('/carts/123456/items?include=product')
            console.log(res.data)
            const cleanData = res.data.data.map((item) => {
                return {
                    id: item.id,
                    productId: item.product_id,
                    amount: item.quantity,
                    name: item.name,
                    image:'https://via.placeholder.com/300x400.png',
                    totalPrice: item.meta.display_price.with_tax.value.formatted,
                    pricePerUnit: item.meta.display_price.with_tax.unit.formatted,
                }
            })
            const totalPrice = res.data.meta.display_price.with_tax.amount / 100

            dispatch.cart.setCartItems(cleanData)
            dispatch.cart.setTotalPrice(totalPrice)
        },
        async addItem(payload, rootState) {
            await request.post('/carts/123456/item', {
                data: payload
            })
            await dispatch.cart.getCartItemsAsync()
        },
        async deleteItem(payload, rootState) {
            await request.delete(`/carts/123456/item/${payload.id}`)
            await dispatch.cart.getCartItemsAsync()
        }

    })
}