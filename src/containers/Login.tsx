import React from 'react'
import '../styles/Login.scss'

const Login = () => {
  return (
    <section className='login'>
      <div className='form-container'>
        <img src='./logos/logo_yard_sale.svg' className='logo' alt='logo' />
        <form action='/' className='form'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            type='text'
            id='email'
            className='input input-email'
            placeholder='name@mail.com'
          />
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='input input-password'
            placeholder='********'
          />
          <input
            type='submit'
            value='Log in'
            className='primary-button login-button'
          />
          <a href='/'>Forgot my password</a>
        </form>
        <button className='secondary-button signup-button'>Sign up</button>
      </div>
    </section>
  )
}

export default Login
