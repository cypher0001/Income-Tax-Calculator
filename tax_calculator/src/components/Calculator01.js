import React,{useState} from 'react'

export default function Calculator() {

  const [tax, settax] = useState();
  //  var annual= document.getElementById("annual").value;

  const calculator=()=>{
    var annual=document.getElementById("annual").value;
    var donations= document.getElementById("donations").value;
    var other=document.getElementById("secondaryincome").value;
    var total=Number(annual)+Number(other);
    settax(total-donations);
    // console.log(annual)
  }
  return (
    <>
      <div>Calculator</div>
      <form>
        <div className="form-group">
          <label htmlFor="annual">Annual Income</label>
          <input type="number" className="form-control" id="annual" onChange={calculator}  aria-describedby="emailHelp" placeholder="Annual income"/>
          
          <label htmlFor="donations">Donations</label>
          <input type="number" className="form-control" id="donations" onChange={calculator} aria-describedby="emailHelp" placeholder="Donations"/>
          
          <label htmlFor='secondaryincome'>Income from other sources</label>
          <input type="number" className='form-control' id="secondaryincome" onChange={calculator} placeholder="Income from other sources"/>
        </div>
      </form>
      <p>Your taxable income:Rs {tax}</p>
    </>
  )
}
