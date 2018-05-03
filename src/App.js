import React, { Component } from 'react'
import axios from 'axios'
import './bootstrap.css'
import './App.css'

const formAPI = '/.netlify/functions/signup'

export default class App extends Component {
    state = {
        loading: false,
        success: false,
        error: false
    }
    handleSubmit = (event, data) => {
        event.preventDefault()
        const email = this.email.value

        if (!email) {
            alert('Please email your email')
        }

        this.setState({
            loading: true
        })

        formHandler(email).then(() => {
            this.setState({
                success: true,
                loading: false
            })
        }).catch((e) => {
            this.setState({
                error: true,
                loading: false
            })
        })
    }
    renderForm() {
        const { success, loading } = this.state
        const buttonText = (loading) ? '...' : 'Notify Me'
        const handler = (loading) ? noOp : this.handleSubmit

        /* if they submitted the form, show thanks */
        if (success) {
            return (
                <div>
                <h2>Thanks for signing up!</h2>
            </div>
        )
        }

        return (
            <form onSubmit={handler}>
            <input
        type="email"
        name="email"
        className="sign-up"
        ref={input => this.email = input}
        placeholder="Enter your email address..."
        required
        />
        <button className="btn btn-lg btn-green sign-up-button" type="submit">
            {buttonText}
            </button>
            </form>
    )
    }
    render() {
        return (
            <div className="App">
            <div className="landing-page">
            <div className='backdrop'></div>
            <div className='container'>
            <div className="row centered">
            <h3 className="logo aligncenter">
            Netlify functions landing page example
        </h3>

        <h1>
        Sign up to get notified<br/>when we launch!
        </h1>

        <div className="col-md-6 col-md-offset-3 mt">
            {this.renderForm()}
    </div>
        </div>

        <div className="row">
            <div className="continue">
            <i className="ion-chevron-down"></i>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
    }
}

function formHandler(email) {
    const data = {
        email: email
    }
    return axios({
        method: 'post',
        url: formAPI,
        data: data,
    })
}

function noOp() {
    console.log('submission in progress')
}