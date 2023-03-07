import React, { useRef } from 'react'
import { contacts } from '../data/data'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4qevmsr',
      'template_m86szmh',
      form.current,
      '-6mp9uTKXbD9nctI_'
    )
      .then((result) => {
        console.log(result.text);
        console.log("maessage sent")
        alert("메세지가 전송 되었습니다.")
      },
      (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='Contact' id='5'>
      <div className="container center">
        <h2>Contact me</h2>
        <div className="shadow">
          <div className='clists'>
            {
              contacts.map((contact) => { 
                const { id, icon, text } = contact;
                return (
                  <div className='clist flex' key={id}>
                    <div className='cicon'>{ icon }</div>
                    <div className='ctext'>{ text }</div>
                  </div>
                )
              })
            }
          </div>
          <div className='formout'>
            <form ref={form} onSubmit={sendEmail}>
              <h3>저에게 메세지를 남겨주세요!</h3>
              <input type="text" name="user_name" placeholder='name'/>
              <input type="email" name="user_email" placeholder='Email'/>
              <textarea name="message" placeholder='message'/>
              <input type="submit" value="Send" className='send'/>
            </form>
          </div>
          <div className='last'>
            <p>
              Thank you for<br/>              
              Viewing my portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact