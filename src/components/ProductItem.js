import React from 'react'
import { Box, Image, Heading, Text, Stack, Button } from 'grommet';
import { connect } from 'react-redux'
import { Shop } from 'grommet-icons';

class ProductItem extends React.Component{

    handleAddToCart = () => {
        const { addItem , id, name } = this.props;
        addItem({ productId: id , name: name })
    }

    render() {
        const { id, name, description, image, price } = this.props
        return (
            
            <Box id={id}
                direction="column"
                pad="small"
                basis="medium"
            >   
                <Stack fill anchor="top-right" height="small">
                    <Box height="small">
                        <Image src={image} fit="cover"></Image>
                    </Box>
                    <Box background="brand" pad="small">
                        <Text size="medium">{price}</Text>
                    </Box>
                </Stack>
                <Box>
                    <Heading textAlign="center" level={4} margin={{ vertical: 'xsmall' }}>
                        {name}</Heading>
                    <Text textAlign="center">
                        {description}</Text>
                </Box>
                <Box pad="medium">
                    <Button primary
                        pad="medium"
                        margin="small"
                        icon={<Shop size="26px" />}
                        label="Add to cart"
                        alignSelf="center"
                        onClick={() => { this.handleAddToCart() }}  
                    >
                    </Button>
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}
const mapDispatchToProps = ({ cart : { addItem }}) => {
    return {
        addItem: ( x ) => addItem( x )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)