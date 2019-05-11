import React, { Component } from 'react'
import { Box } from 'grommet'
import ProductList from '../components/ProductList'
import SearchBar from '../components/SearchBar'

class ProductListPage extends Component {
    render() {
        return (

            <Box direction="row"
            pad="medium" fill>

            <Box width="1/3" pad={{top: "small", right: "small"}} >
                <SearchBar />
            </Box>

            <Box flex >
                <ProductList />
            </Box>
            </Box>
        )
    }
};

export default ProductListPage