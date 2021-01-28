import React from 'react'
import {Link } from 'react-router-dom'

const Navbar =()=> {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 mt-5 shadow">

        <div class="container">

          <Link id="reverse-type" class="navbar-brand" to='/'>Douglass T. Davidoff</Link>

          <button class="navbar-toggler" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarResponsive" 
                    aria-controls="navbarResponsive" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to='/'>About
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/portfolio'>Portfolio</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
    )
}

export default Navbar 