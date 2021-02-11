import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By: 
            <span className="text-warning font-weight-normal ml-1">
               Abhigyan
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; external movies data API:  
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;