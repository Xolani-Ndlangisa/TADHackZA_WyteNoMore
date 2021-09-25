import React from 'react'

const FormSignUp = () => {
    return (
        <div className="form-sign-up">
            <form className="form">
                <h2>
                    Lets get started signing you up.
                    And never wait again
                </h2>
            <div className="form-inputs">
            <label htmlFor="name"
            className="form-label">
                name  :
            </label>
            <input
            id="name"
            type="text" 
            name="first name"
            className="form-input"
            placeholder="enter the username"/> 
            </div>

            <div className="form-inputs">
            <label htmlFor="surname"
            className="form-label">
                Surname  :
            <input
            id='surname'
            type="text"
            username="username"
            className="form-input"
            placeholder="enter the username"/>
            </label>
            </div>


            <div className="form-inputs">
            <label htmlFor="username"
            className="form-label">
                Username  :
            <input type="text" username="username"
            className="form-input"
            placeholder="enter the username"/>
            </label>
            </div>

            <div className="form-inputs">
            <label htmlFor="ID-number"
            className="form-label">
                ID number  :
            <input 
            type="int" id-number="id-number"
            className="form-input"
            placeholder="enter the id-number"/>
            </label>
            </div>

            <div className="form-inputs">
            <label htmlFor="password"
            className="form-label">
                Password  :
            <input type="text" password="password"
            className="form-input"
            placeholder="enter the password"/>
            </label>
            </div>


            <div className="form-inputs">
            <label htmlFor="password"
            className="form-label">
                Password  :
            <input type="text" password="password"
            className="form-input"
            placeholder="enter the password"/>
            </label>
            </div>

            <button className="submit-button"
            type='submit'>
                sign up
            </button>
                <span className="sign-in-button">
                    I already have an login 
                    <a href='#'>    here</a>
                </span>
        </form>
    </div>            
    )
}

export default FormSignUp
