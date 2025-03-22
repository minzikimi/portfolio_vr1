import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div>
        <h1>
          {'MINJI KIM 민지 킴'.split('').map((letter, index) => (
            <span key={index} className="wave-letter" style={{ '--i': index }}>{letter}</span>
          ))}
        </h1>
      </div>
      <div>
        <h3>© Minji Kim 2025</h3>
      </div>
    </footer>
  );
}

export default Footer;
