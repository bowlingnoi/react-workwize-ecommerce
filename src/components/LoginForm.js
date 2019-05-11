import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, Button } from 'grommet';

class LoginForm extends Component {
    
    state = {
        username: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // handleUsernameChange = (e) => {
    //     this.setState({
    //         username: e.target.value
    //     })
    // }
    // handlePasswordChange = (e) => {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }
    handleLogin = async () => {
        const {
            login
        } = this.props;
        try {
            await login(this.state)
            alert('login success')
        }
        catch (e) {
            alert( 'login fail' )
        }
    }

    render() {
        return (
            <div>
                <TextInput placeholder="Username" name="username" onChange={ this.handleChange } />
                <TextInput placeholder="Password" name="password" type="password" onChange={ this.handleChange } />
                <Button primary
                        pad="medium"
                        margin="small"
                        label="Sign in"
                        alignSelf="center"
                        onClick={() => { this.handleLogin() }}  
                    ></Button>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = (dispatch) => ({
    login: dispatch.user.login
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);