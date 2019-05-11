
// import request from '../../utils/request'

export const user = {
    state: {
        token: null
        // isAuthenticated: false
    }, // initial state
    reducers: {
        // - sequencial function / item
        // handle state changes with pure functions
        // setAuthenticated(state, payload) {
        setToken(state, payload) {
            return {
                ...state,
                // isAuthenticated: payload
                token: payload
            }
        }
    },
    effects: (dispatch) => ({ 
        // - asyncronous function
        // handle state changes with impure functions.
        // use async/await for async actions

        async login(payload, rootState) {
            // call api here , get token 
            const token = '234dfaSWFWEFs32nknvk27hfkdksfpkdFSDERIOWJ<SD'
            if (payload.username === 'demo' && payload.password === 'password') {
                return dispatch.user.setToken(token)
                // return dispatch.user.setAuthenticated(true)
            }
            return Promise.reject( 'Username or password not found' )
        },
        async Logout(payload, rootState) {
            dispatch.user.setToken(null)
        }
    }),
    // selectors is function that return function
    selectors: {
        // if use arrow function "this" in function = selector but use as a function "this" will be who call
        isAuthenticated(){
            return (rootState, props) => rootState.user.token !== null
        }   
    }

}