import React from 'react'
import request from '../utils/request';
import { Box, Stack, TextInput } from 'grommet';
import { FormSearch } from 'grommet-icons';


class SearchBar extends React.Component{
    state = {
        search : ''
    }

    setValue = ( search ) => {
        this.setState({
            search,
        })
    }

    onSearchEnter = ( event ) => {
        if (event.key == 'Enter') {
            this.filterData()
        }
    }
    
    filterData = async () => {
        const res = await request.get('/products')
        const data = res.data.data.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.meta.display_price.with_tax.formatted,
            image: 'https://via.placeholder.com/300x400.png'
        }))
        console.log( data )

        // this.setState({
        //     data,
        // })
    }

    render() {
        const { search } = this.state
        return (
            <Stack anchor="top-right"
                height="xsmall">

                <Box>
                  <TextInput
                        placeholder="Search"
                        value={search}
                        autoComplete="on"
                        onKeyDown={ this.onSearchEnter }
                        onChange={ (event) => this.setValue( event.target.value ) } >
                    
                  </TextInput>
                </Box>
                <Box pad="small">
                  <FormSearch ></FormSearch>
                </Box>
            </Stack>
        )
    }
}

export default SearchBar;