import React from 'react';
import Forms from './Forms/Forms.js'


const Contact = ({props}) => (
    <div className="Contact container">
      <h1 className="title">Contact Me</h1>

      <hr />

      <Forms />

      <hr />

      <div className="social-links">
        <h2 className="title">Find me on the web!</h2>

        <div className="links">
          <a rel="noopener noreferrer" className='s-link' target='_blank' href='https://github.com/x-zen'><i class="fab fa-github-square"></i></a>
          <a rel="noopener noreferrer" className='s-link' target='_blank' href='https://twitter.com/zen_stuff'><i class="fab fa-twitter-square"></i></a>
          <a rel="noopener noreferrer" className='s-link' target='_blank' href='https://www.facebook.com/profile.php?id=100009471423841'><i class="fab fa-facebook-square"></i></a>
          <a rel="noopener noreferrer" className='s-link' target='_blank' href='https://www.linkedin.com/in/zen-harris-979772180/'><i class="fab fa-linkedin"></i></a>
          <a rel="noopener noreferrer" className='s-link' target='_blank' href='mailto:jdharris.x@gmail.com'><i class="fas fa-envelope-square"></i></a>
        </div>
      </div>
    </div>
);
export default Contact;
