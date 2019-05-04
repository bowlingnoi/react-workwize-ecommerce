import React from 'react';
import { Grommet, Box } from 'grommet'
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import './App.css';

class App extends React.Component {

  render() { 
    return (
      <Grommet plain full>
        <Box direction="column" fill>
          <AppBar />

          <Box direction="row"
            pad="medium" fill>

            <Box width="1/3" pad={{top: "small", right: "small"}} >
              <SearchBar />
            </Box>

            <Box flex >
              <ProductList />
            </Box>
          </Box>

        </Box>
      </Grommet>
    );
  }
}

export default App;
