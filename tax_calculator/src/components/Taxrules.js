import React from 'react'
import JSONDATA from '../searchdata.json'
import { useState } from 'react' 
// 8K (gzipped: 3.3K);

export default function Taxrules() {
  const [searchTerm, setSearchTerm] = useState(" ")
  return (
    <>
    <div>Taxrules</div>
    <input type="text" placeholder='Search...' onChange={(event)=>{setSearchTerm(event.target.value)}}></input>
    {JSONDATA.filter((val)=>{
      if(searchTerm===" "){
        return val
      }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((val,key)=>{
      return (
        // <div className="searchdata" key={key}> 
        //   <p>{val.title}</p>
        //   <p>{val.description}</p>
          // </div>
          <div className="accordion accordion-flush" id="accordionFlushExample" key={key}>
          <div className="accordion-item">
            <h2 className="accordion-header" id={`flush-heading${val.id}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${val.id}`} aria-expanded="false" aria-controls={`flush-collapse${val.id}`}>
              {val.title}
              </button>
            </h2>
            <div id={`flush-collapse${val.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${val.id}`} data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">{val.description}</div>
            </div>
          </div>
          </div>
      
      
      );

    })}
    </>
  )
}
