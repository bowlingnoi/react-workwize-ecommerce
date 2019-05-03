import React from 'react'
import { Box, Image, Heading, Text, Stack } from 'grommet';

class ProductItem extends React.Component{
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
            </Box>
        )
    }
}

export default ProductItem