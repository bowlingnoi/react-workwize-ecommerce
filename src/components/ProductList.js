import React from 'react'
import request from '../utils/request';
import { Box } from 'grommet';
import ProductItem from '../components/ProductItem'
import { connect } from 'react-redux';
import _ from 'lodash'

class ProductList extends React.Component{
    state = {
        data: []
    }
    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevState, nextState) {
        const { search } = this.props

        console.log(prevState, nextState, search, (search !== prevState.search) )
        if (search !== prevState.search) {
            this.fetchData()
        }
    }

    fetchData = async () => {
        const {
            search
        } = this.props
        const res = await request.get('/products?include=main_image&filter=like(name,*'+ search +'*)')
        
        if (res.data.data.length === 0) return;
        const temp_data = res.data.data.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.meta.display_price.with_tax.formatted,
            image_id: item.relationships.main_image.data.id,
        }))
        const image = res.data.included.main_images.map( item => ({
            image_id: item.id,
            image: item.link.href,
        }))
        const data = _.merge(temp_data, image)

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

const mapStateToProps = state => {
    return {
        search: state.cart.q
    }
}
export default connect(mapStateToProps)(ProductList);