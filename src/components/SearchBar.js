import React from 'react'
import { Box, Stack, TextInput } from 'grommet';
import { FormSearch } from 'grommet-icons';
import { connect } from 'react-redux';
// import _ from 'lodash'

class SearchBar extends React.Component{
    // state = {
    //     search : ''
    // }
    // componentDidMount = () => {
    //     this.state.search = this.props.search
    // }

    setValue = (search) => {
        const { queryItem } = this.props
        queryItem( search )

    }

    onSearchEnter = (event) => {
        if (event.key === 'Enter') {
            // updateItem()
        }
    }

    render() {
        const { search } = this.props
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
                  <FormSearch />
                </Box>
            </Stack>
        )
    }
}

const mapStateToProps = state => {
    return {
        search: state.cart.q
    }
}
const mapDispatchToProps = ({ cart: { queryItem, updateItem } }) => {
    return {
        queryItem: (q) => queryItem(q),
        updateItem: () => updateItem()
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);