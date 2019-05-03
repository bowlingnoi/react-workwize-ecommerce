import React from 'react'
import request from '../utils/request';
import { Box } from 'grommet';
import ProductItem from '../components/ProductItem'


class ProductList extends React.Component{
    state = {
        data: []
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const res = await request.get('/products')
        const data = res.data.data.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.meta.display_price.with_tax.formatted,
            image: 'https://via.placeholder.com/300x400.png'
        }))

        this.setState({
            data,
        })
    }

    render() {
        const { data } = this.state
        return (
            <Box direction="column"
                pad="small"
                fill >
                <Box pad="small" background="light-3">
                    ProductList
                </Box>
                <Box pad="small"
                    direction="row"
                    fill wrap overflow="auto"
                >
                    {
                        data.map((product) => (
                            // <ProductItem id={product.id} name={product.name} description={product.description} price={product.price}></ProductItem>       
                            <ProductItem {...product} ></ProductItem>
                    ))
                }
                </Box>
            </Box>
        )
    }
}

export default ProductList;