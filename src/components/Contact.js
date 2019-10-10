import React from 'react';

import Split from './Split';

const Contact = () => {
  return (
    <form
      name='input'
      action='https://formspree.io/xggkkywx'
      method='POST'
      className='contact'
    >
      <h1 className='heading1 contact__heading'>
        <Split>Contact me</Split>
      </h1>

      <label htmlFor='name' className='contact__label'>
        Name
      </label>
      <input
        id='name'
        type='text'
        className='contact__item'
        placeholder='Your name'
        name='Name'
        required
      />

      <label htmlFor='email' className='contact__label'>
        Email
      </label>
      <input
        id='email'
        type='email'
        className='contact__item'
        placeholder='Your email'
        name='_replyto'
        required
      />

      <label htmlFor='message' className='contact__label'>
        Message
      </label>
      <textarea
        type='message'
        className='contact__item'
        placeholder='Your message'
        name='message'
        required
        id='message'
        rows='5'
        cols='33'
      ></textarea>

      <input type='submit' value='Send' className='contact__submit' />
      <input type='hidden' name='_subject' value='Portfolio contact' />
      <input type='hidden' name='_next' value='/' />
    </form>
  );
};

export default Contact;
