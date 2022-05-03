import React from 'react'
import jasnoorbit from "../jasnoorbit.jpg";
import calc from "../calc1.jpeg";
export default function Aboutus() {
  return (
    <>

<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">About us</h1>
        <p className="lead text-muted mb-0">A proposed system to assist end user with esssential parameters for filing Income Tax Return.</p>
   
        
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png " width="100px" height="80px" alt="" className="img-fluid"/></div>
    </div>
  </div>
</div>

<div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h1 className="font-weight-light">Income Tax Return Calculation</h1>
        <p className="font-italic text-muted mb-4"> A proposed system to assist end user with esssential parameters for filing Income Tax Return and letting the user download the form.</p>
        
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={calc} alt="" className="img-fluid mb-4 mb-lg-0" /></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h1 className="font-weight-light">Schemes and acts</h1>
        <p className="font-italic text-muted mb-4">We provide the latest schemes and acts necessary for filing income tax return. Information of these acts is also available along with it.</p>
        
      </div>
    </div>
  </div>
</div>

<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our team</h2>
        <p className="font-italic text-muted">We are third year students of Guru Nanak Dev Engineering College from Information Technology branch. We are working on our minor project "Income Tax Calculator" which aims to assist the end user with essential parameters for filing the income tax return.</p>
      </div>
    </div>

    <div className="row text-center"> 
      <div className="col-xl-4 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={jasnoorbit} alt="" width="100"  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">Jasnoor Kaur Jassal</h5><span className="BIG text-uppercase text-muted">URN:1905347</span>
         
        </div>
      </div> 
      <div className="col-xl-4 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://i.pinimg.com/280x280_RS/a6/59/c6/a659c64005c6cc22e3f6bae3703714e7.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">Gurkirat Singh</h5><span className="BIG text-uppercase text-muted">URN:1905331</span>
          
        </div>
      </div> 
      <div className="col-xl-4 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">Kushagra Joshi</h5><span className="BIG text-uppercase text-muted">URN:1905357</span>
          
        </div>
      </div>
   
     

    </div>
  </div>
</div>
    </>
  )
}
