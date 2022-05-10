import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
   <>
   <div  className="h-150px h-lg-225px bgi-no-repeat bgi-position-x-center bgi-position-y-top bgi-size-cover dark-top-curved-bg"></div>

   <footer className="footer block-dark mt-n15 mt-lg-n30">


<div className="container mt-n15" >
    <div className="row" >
        <div className="col-5 col-lg">
            <div className="pb-10">
                <h3 className="text-muted mb-5 mb-lg-7 font-size-4"><Link to="/">Calculator</Link></h3>

            </div>
        </div>

        <div className="col-5 col-lg">
            <div className="pb-10">
                <h3 className="text-muted mb-5 mb-lg-7 font-size-4"><Link to="/formsdownload"> Downloads</Link></h3>

                
            </div>
        </div>

        <div className="col-5 col-lg">
            <div className="pb-10">
                <h3 className="text-muted mb-5 mb-lg-7 font-size-4"><Link to="/taxrules">Tax laws and rules</Link></h3>

            </div>
        </div>

        <div className="col-5 col-lg">
            <div className="pb-10">
                <h3 className="text-muted mb-5 mb-lg-7 font-size-4"><Link to="/contact">Contact Us</Link></h3>

            </div>
        </div>
        
 
    </div>
</div>

<div className="page_speed_247610277" ></div>

<div className="container py-5 py-lg-10" >
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
        <div className="d-flex align-items-center mr-md-2 order-2 order-md-1">

            

            <span className="font-size-2 font-weight-bold text-dark-60 pt-1" style={{textAlign:"center"}}href="https://developer6669.com">
             Developed by: Gurkirat Singh, Jasnoor Kaur Jassal, Kushagra Joshi<br/>  <center> © Copyrights 2022.All rights reserved</center> 
            </span>

        </div>

        
    </div>
</div>
</footer>
   </>
  )
}
