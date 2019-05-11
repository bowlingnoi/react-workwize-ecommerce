import React from 'react';
import { Grommet, Box } from 'grommet'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import AppBar from './components/AppBar'
import ProductListPage from './pages/ProductListPage'
import CheckoutPage from './pages/CheckoutPage'

import './App.css';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';


const Notfound = () => ( <div id="page-not-found"><h1>Page Not Found</h1></div> )

class App extends React.Component {

  render() { 
    const { isLoading } = this.props
    if (isLoading) {
      return (
        <h1>Loading...</h1>
      )
    }
    return (
      <Router>

        <Grommet plain full>
          <Box direction="column" fill>
            <AppBar />
            {/* <ProductListPage /> */}

            {
              /* switch เพื่อให้เลือกแค่ 1 route
              exact : path ตามนั้นเท่านั้น
              */
            }
            <Switch>
              <Route exact path="/" component={ProductListPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route exact path="/login" component={LoginPage} />
              <PrivateRoute path="/profile" exact component={ProfilePage} />
              <Route patch="**" component={Notfound} />
            </Switch>

          </Box>
        </Grommet>

      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log( 'App: ', state )
  return {
    isLoading: !state._persist.rehydrated
  }
}
export default connect(mapStateToProps)(App);
