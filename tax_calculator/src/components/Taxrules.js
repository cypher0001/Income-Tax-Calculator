import React from 'react'
import JSONDATA from '../searchdata.json'
import { useState } from 'react' 
// 8K (gzipped: 3.3K);

export default function Taxrules() {
  const [searchTerm, setSearchTerm] = useState(" ")
  return (
    <>
    {/* <div>Taxrules</div> */}
    {/* <input type="text" placeholder='Search...' onChange={(event)=>{setSearchTerm(event.target.value)}}></input> */}
    <div className="container" >
    <div className="row height d-flex justify-content-center align-items-center" >
        <div className="col-md-8">
            <div className="search"> <i className="fa fa-search"></i> <input type="text" className="form-control" onChange={(event)=>{setSearchTerm(event.target.value)}} placeholder="Have a question? Ask Now" /> <button className="btn btn-primary">Search</button> </div>
        </div>
    </div>

    
    <div className="accordion accordion-flush" id="accordionFlushExample" style= {{boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}>
    {JSONDATA.filter((val)=>{
      if(searchTerm===" "){
        return val
      }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
      else if(!val.title.toLowerCase().includes(searchTerm.toLowerCase()))
     {
       return (0)
     }
    }).map((val,key)=>{
      return (
        // <div className="searchdata" key={key}> 
        //   <p>{val.title}</p>
        //   <p>{val.description}</p>
          // </div>
          <div className="accordion-item" key={key}>
            <h2 className="accordion-header" id={`flush-heading${val.id}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${val.id}`} aria-expanded="false" aria-controls={`flush-collapse${val.id}`}>
              {val.title}
              </button>
            </h2>
            <div id={`flush-collapse${val.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${val.id}`} data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">{val.description}</div>
            </div>
          </div>
         
      
      
      );

    })}
     </div>
     </div>
    </>
  )
}
