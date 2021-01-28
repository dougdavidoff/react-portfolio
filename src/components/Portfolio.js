import React from 'react' 
import Navbar from './Navbar'
import Footer from './Footer'

const Portfolio =()=> {
    return (
        <div>
        <Navbar />

        <main>
          <div class="container" id="dtd-container">
            <div class="card border-0 shadow my-5">
              <div class="card-body p-5">
                <h1 id="headline" class="font-weight-light" color="blue">Doug's Portfolio</h1>
                <hr />
                <section>
               
                  <div class="row">

                 
                    <div class="col-md-5">
                      <div class="card" style="width: 20rem; padding-left: 20px; padding-right: 100px; border: 0px;">
                        <a href="https://dougdavidoff.github.io/bags"><img class="card-img-top" src="/assets/images/201009-bags-badge.png" style="height:200px;width:200px" alt="Remember The Bags App" /></a>
                        <div class="card-body">
                        </div>
                      </div>
                    </div>

                   
                    <div class="col-md-5">
                      <div class="card" style="width: 20rem; padding-left: 20px; padding-right: 100px; border: 0px;">
                      <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap" />
                        <div class="card-body">
                        </div>
                      </div>
                    </div>           
                  </div>
               
       
      
              
                  <div class="row">

                  
                    <div class="col-md-5">
                      <div class="card" style="width: 20rem; padding-left: 20px; padding-right: 100px; border: 0px;">
                      <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap" />
                        <div class="card-body">
                        </div>
                      </div>
                    </div>

                 
                    <div class="col-md-5">
                      <div class="card" style="width: 20rem; padding-left: 20px; padding-right: 100px; border: 0px;">
                      <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap" />
                        <div class="card-body">
                        </div>
                      </div>
                    </div>           
                  </div>
                
  
                
                <div class="row">

                
                  <div class="col-md-5">
                    <div class="card" style="width: 20rem; padding-left: 20px; padding-right: 100px; border: 0px;">
                    <img class="card-img-top" src="https://via.placeholder.com/350" alt="Card image cap" />
                      <div class="card-body">
                      </div>
                    </div>
                  </div>
                </div>


              </section>
            </div>
          </div>
        </div>
      </main> 


        <Footer />
        </div>
    )
}

export default Portfolio