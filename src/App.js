import React from 'react';
import logo from './logo.svg'
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-aside">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="App-form">
                <div className="Page-switcher">
                    <a href="" className="Page-switcher-link active">sign up</a>
                    <a href="" className="Page-switcher-link">sign in</a>
                </div>
                <div className="Form-title">
                    <a href="" className="Form-title-link">sign up</a> or
                    <a href="" className="Form-title-link"> sign in</a>
                </div>
                <div className="Form-content">
                    <form action="" className="Form-fields">
                        <div className="Form-field">
                            <label htmlFor="fullName">full name</label>
                            <input type="text" className="Form-full-name" id="fullName"
                                   placeholder="enter your full name"/>
                        </div>
                        <div className="Form-field">
                            <label htmlFor="password">password</label>
                            <input type="password" className="Form-full-name" id="password" placeholder="password"/>
                        </div>
                        <div className="Form-field">
                            <label htmlFor="email">e-mail</label>
                            <input type="email" className="Form-full-name" id="email" placeholder="enter your email"/>
                        </div>
                        <div className="Form-field">
                            <label htmlFor="termsAndConditions">
                                <input type="checkbox" id="termsAndConditions"/> i agree with all statements in <a
                                href="" className="termsLink">terms and conditions of service</a>
                            </label>
                        </div>
                        <div className="Form-field">
                            <button className="Signup-btn">sign up</button>
                            <a href="" className="alreadyAMemberLink">already a member?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
