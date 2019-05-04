export const cart = {
    state: {
        cartItems: [
            // {
            //     productId: [1],
            //     amount: 2
            // }
        ],
        q: '',
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
            return {
                ...state,
                q: payload
            }
        },
        updateItem(state, payload) {
            return state
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
    })
}