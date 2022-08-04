import React from 'react';
import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
  return (
    <section className='login'>
      <div className='form-container'>
        <img src='./logos/logo_yard_sale.svg' className='logo' alt='logo' />
        <h1 className='tittle'>Email has been sent!</h1>
        <p className='subtittle'>
          Please check your inbox for instructions on how to reset your
          password.
        </p>
        <figure className='email-image'>
          <img src='./icons/email.svg' alt='email' />
        </figure>
        <button className='primary-button login-button'>Login</button>
        <p className='resend'>
          <span>Didn't receive the email?</span>
          <a href='/'>Resend</a>
        </p>
      </div>
    </section>
  );
};

export default RecoveryPassword;
