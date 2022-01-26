import React from "react";
import LinkedIn from '../LinkedIn_logo_initials.png';
import Instagram from '../Instagram_logo.png';
import Twitter from '../Twitter_logo.png';

function Footer() {
  return (
    <div className="footer">
      <div container>
      <footer class="py-1 bg-dark fixed-bottom">
        <p>
          <div class="m-0 text-center text-white">
            Contact Me: <a href="https://www.linkedin.com/in/igor-bich"><img
              src={LinkedIn}
              width="30"
              height="30"
              alt="LinkedIn"
            />
            </a>
            &nbsp;&nbsp;
            <a href="https://www.instagram.com/igorbich/"><img
              src={Instagram}
              width="30"
              height="30"
              alt="Instagram"
            />
            </a>
            &nbsp;&nbsp;
            <a href="https://twitter.com/Escartian"><img
              src={Twitter}
              width="30"
              height="30"
              alt="Twitter"
            />
            </a>
            &emsp;
            Copyright &copy; IgorBich.com 2022
          </div>
        </p>

      </footer>
      </div>
    </div>
  );
}

export default Footer;