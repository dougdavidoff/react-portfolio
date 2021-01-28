import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const Contact =()=> {
    return (


 
    <div id="page-content">
   
      <Navbar />

    
      <main>
        <div class="container">
          <div class="card border-0 shadow my-5">
            <div class="card-body p-5">
              <h1 id="headline" class="font-weight-light" color="blue">Contact Doug Davidoff</h1>
              <hr />

             
              <div class="row">
                <div class="col-md-6 col-md-offset-3" id="form_container">
                  <h3>Phone | Text</h3>
                  <p>+1 (203) 522-8533</p>
                  <h3>LinkedIn | Twitter | GitHub</h3>
                  <p><a class="link" href="https://www.linkedin.com/in/dougdavidoff">LinkedIn</a> | <a class="link" href="https://www.twitter.com/davidoffkilter">Twitter</a> | <a class="link" href="https://github.com/dougdavidoff">GitHub</a></p>
                </div>
                <div class="col-md-6">
                  <h3 class="left-margin">Email</h3>
                  <p class="left-margin"><a class="link" href="mailto:douglass.davidoff@gmail.com">douglass.davidoff@gmail.com</a>. Or use our handy email form.</p>
                  <h3 class="left-margin">Snail Mail</h3>
                  <p class="left-margin">114 State Street, Apt. 202 | Bridgeport, Connecticut  06604</p>
                </div>
              </div>
              <br />
              <hr />      
              
              <h3>Our Handy Email Form</h3>
              <form role="form" method="post" id="reused_form">
      
                <div class="row">
                  <div class="col-sm-6 form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" class="form-control" id="name" name="name" required />
                  </div>
                  <div class="col-sm-6 form-group">
                    <label for="email">Email Address:</label>
                    <input type="email" class="form-control" id="email" name="email" required />
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-12 form-group">
                    <label for="message">Message:</label>
                    <textarea class="form-control" type="textarea" name="message" id="message" maxlength="6000" rows="7"></textarea>
                  </div>
                </div>
              
                <div class="row">
                  <div class="col-sm-12 form-group">
                    <button type="submit" class="btn btn-lg btn-default pull-right" id="reverse-type">Submit →</button>
                  </div>
                </div>
              </form>

              <div id="success_message" style="width:100%; height:100%; display:none; ">
                <h3>Posted your message successfully!</h3>
              </div>
              <div id="error_message" style="width:100%; height:100%; display:none; ">
                <h3>Error</h3>
                <p>Sorry there was an error sending your form.</p>      
              </div>
            </div>
        </div>
        </div>
      </main> 

     
        <Footer />
  







</div>





    )
}

export default Contact;