import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'


const Main =()=> {


    return (

        <div>
            <Navbar />

    <main>
         <div id="dtd-container" class="container">
          <div class="card border-0 shadow my-5">
            <div class="card-body p-5">
              <h1 class="font-weight-light" id="headline">About Doug Davidoff</h1>
              <h4 id="sub-hed">Full-Stack Web Developer | Certification Expected In January 2021</h4>
              <hr />
              <section>     
                <img id="dtd-hedshot" src="dtd.jpg" alt="DTD photo" />
                <p class="lead">Doug Davidoff has been a newspaper reporter and a public relations consultant for private business, state government, and statewide political campaigns. He delights in blogging, social media, history, and writing. He also delights in software coding.</p>
                <p class="lead">But before all that (and of "all that," there was a great amount over the years), Doug was interested in computers and coding.</p>
                <p class="lead">During junior high school in the 1970s, Doug worked on a teletypewriter terminal connected by an acoustic telephone coupler to the school district's mainframe computer. He learned to play in BASIC and FORTRAN. During college, he worked with 80-column computer punch cards in the days when students submitted decks of cards in a refridgerator-sized reader machine and then waited hours for the output to arrive on big printout forms.</p>
                <p class="lead">Doug was recruited to become a computer science major. Instead he became a history major. Thus, a career direction was formed.</p>
                <p class="lead">Coding bootcamp is an opportunity to redirect that trajectory. <strong>Doug is a wordsmith who is training to become a codesmith</strong>.</p>
                <p><strong><a href="/assets/images/200929-DTD-Resume.pdf" target="_blank">Download my resume (PDF)</a></strong></p>
              </section>
            </div>
          </div>
        </div>
      </main>  
      <Footer />
    </div>
    )
}

export default Main;