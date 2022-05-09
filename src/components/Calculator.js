import React,{useState} from 'react'
import swal from 'sweetalert';

import { Link } from 'react-router-dom';

const num=(evt)=> {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode <48  || ASCIICode > 57)){
        evt.preventDefault();
        return false;
    }
    if (evt.target.value.length ===4 || evt.target.value.length ===9  ){
        evt.target.value+='-';
        // console.log(evt.target.value+='-')
         }

}

document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number"){
        document.activeElement.blur();
    }
});
const Validating=(evt)=>{
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
if (ASCIICode > 32 && (ASCIICode <65  || ASCIICode > 90) && (ASCIICode <97  || ASCIICode > 122)){
    evt.preventDefault();
    return false;
}
}



export default function Calculator() {
  
    const [tax, settax] = useState(0);
    const [grossSal, setgrossSal] = useState(0);
    const [headSal, setheadSal] = useState(0);
    const [gti, setgti] = useState(0);
    const [totaltiustate, settotaltiusstate] = useState(0);
    const [taxor, settaxor] = useState(0);
    const [healthandeductaion, sethealthandeductaion] = useState(0)
    const [titp, settitp] = useState(0)
    const [valuesfornextpage, setvaluesfornextpage] = useState(0)
    const [btnDisable, setbtnDisable]=useState("true")
    const [classoflink,setclassoflink]=useState("linkoff")
    const [hrastate,sethrastate]=useState(0)



    const calculator=()=>{

        var incomeFromSalary=Number(document.getElementById("incomeFromSalary").value);
        var npsEmployee=Number(document.getElementById("npsEmployee").value);
        var hra=Number(document.getElementById("ahra").value)+Number(document.getElementById("rp").value)+Number(document.getElementById("cities").value);
       
       sethrastate(hra)
        setgrossSal(incomeFromSalary + npsEmployee - hra);
       let grosssalvar=incomeFromSalary + npsEmployee - hra;
       var lsd=Number(document.getElementById("lsd").value);
       var lps=Number(document.getElementById("lps").value);
       var deduction80c=Number(document.getElementById("deduction80c").value);
       setheadSal(grosssalvar-lsd-lps-deduction80c);
       let headsalvar=grosssalvar-lsd-lps-deduction80c;
       var incomeOS=Number(document.getElementById("incomeOS").value);
       setgti(headsalvar+incomeOS);
      
       let gtivar=headsalvar+incomeOS;
       var DeductionU=Number(document.getElementById("DeductionU").value);
       var DeductionUS80CCD=Number(document.getElementById("DeductionUS80CCD").value);
       var DeductionUS80CCD2=Number(document.getElementById("DeductionUS80CCD2").value);
       settotaltiusstate(gtivar-DeductionU-DeductionUS80CCD-DeductionUS80CCD2);
       let totalti=gtivar-DeductionU-DeductionUS80CCD-DeductionUS80CCD2
       var taxorvar
            if(totalti<=250000)
            {
                settaxor(0)
                taxorvar=0
        
            }
            else if(totalti>250000 && totalti<=500000){
                settaxor(((totalti-250000)*0.05).toFixed(2))
                taxorvar=(totalti-250000)*0.05

            }
            else if(totalti>=500000 && totalti<=1000000){
                // let a=totalti-250000
                let b=250000*0.05
                let c=(totalti-500000)*0.20
                settaxor((b+c).toFixed(2))
                taxorvar=b+c
                    
            }
            else if(totalti>1000000) {
                let bb=250000*0.05
                let cc=500000*0.20
                let dd=(totalti-1000000)*0.30
                settaxor((bb+cc+dd).toFixed(2))
                taxorvar=bb+cc+dd
            }   
            var TaxRebateUS87A=Number(document.getElementById("TaxRebateUS87A").value);
            sethealthandeductaion((taxorvar*0.04).toFixed(2));
        // console.log(TaxRebateUS87A)
        settitp((taxorvar*0.04+taxorvar-TaxRebateUS87A).toFixed(2))
        var tds=Number(document.getElementById("tds").value);
        settax((taxorvar*0.04+taxorvar-TaxRebateUS87A-tds).toFixed(2))
        var namevar=document.getElementById("name").value
        var pan=document.getElementById("pan").value
        var ra=document.getElementById("raddress").value
        var adhaar=document.getElementById("adhar").value
        var designation=document.getElementById("designation").value
        var fy=document.getElementById("fy").value
        var dob=document.getElementById("DOB").value
        var oa=document.getElementById("oaddress").value

        
        setvaluesfornextpage({
            incomeFromSalary:incomeFromSalary,
            npsEmployee:npsEmployee,
            hra:hra,
            grossSal:grosssalvar,
            lsd:lsd,
            lps:lps,
            deduction80c:deduction80c,
            headSal:headsalvar,
            incomeOS:incomeOS,
            gti:gtivar,
            DeductionU:DeductionU,
            DeductionUS80CCD:DeductionUS80CCD,
            DeductionUS80CCD2:DeductionUS80CCD2,
            totalti:totalti,
            taxor:taxorvar,
            TaxRebateUS87A:TaxRebateUS87A,
            healthandeductaion:(taxorvar*0.04).toFixed(2),
            tds:tds,
            titp:(taxorvar*0.04+taxorvar-TaxRebateUS87A).toFixed(2),
            tax:(taxorvar*0.04+taxorvar-TaxRebateUS87A-tds).toFixed(2),
            name:namevar,
            designation:designation,
            pan:pan.toUpperCase(),
            ra:ra,
            adhaar:adhaar,
            fy:fy,
            as:year,
            dob:dob,
            oa:oa
            
        })
        
        setbtnDisable("true")
        if(incomeFromSalary!==0 && namevar!=="" && ra!=="" && pan.length===10 && adhaar.length===14 && designation!=="" && fy.length===7)
        {
            setbtnDisable("false")
            setclassoflink("linkon")
        }
        
      }
  
      const [year,setyear] = useState(0);
      // let a=year.split("-")
      const financialyear = (e) => {
        let a = e.target.value.split("-");
        let b = Number(a[0]) + 1;
        let c = Number(a[1]) + 1;
        let d = [b, c];
    
        // console.log(d);
        setyear(d.join("-"));
      };
      
  return (
    <>
        <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" ></div>
        <div className="contents order-2 order-md-1">
        
            <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-9 py-5">
                <h3>FORM NO.2 <small>(OLD REGIME)</small></h3>
                <p style={{color:"black"}}className="mb-4">NEW PERFORMA FOR CALCULATING INCOME TAX FOR THE TAX DEDUCTION AT SOURCE FOR THE FINANCIAL YEAR 2021-22 i.e. A/Y 2022-23</p>
                <p style={{fontSize:"18px", color:"black"}}><span style={{color:"red"}}>*</span> Fields are mandatory</p>
                <form action="#" method="post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group first">
                                <label htmlFor="fname">Name of the official <span style={{color:"red"}}>*</span></label>
                                <input type="text" className="form-control" placeholder="John Doe" onKeyPress={e=>Validating(e)}  required id="name" onChange={calculator}/>
                            </div>    
                        </div>
                        <div className="col-md-6">
                             
                            <div className="form-group first">
                                <label htmlFor="lname">Designation<span style={{color:"red"}}>*</span></label>
                                <input type="text" className="form-control" placeholder="Designation"required  onChange={calculator} onKeyPress={e=>Validating(e)} id="designation" />
                            </div>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group first">
                                <label htmlFor="fname">F/Y<span style={{color:"red"}}>*</span></label>
                                <input type="text" className="form-control" maxLength={7} required onChange={calculator} placeholder="YYYY-YY" id="fy" onKeyPress={e=>num(e)} onBlur={(e)=>financialyear(e)}/>
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group first">
                                <label htmlFor="a/y">Assessment Year</label>
                                <input  className="form-control" required placeholder="YYYY-YYYY"  value={year} id="a/y" readOnly  />
                            </div>    
                        </div>
                        </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group first">
                                 <label htmlFor="pan">Permanent Account Number<span style={{color:"red"}}>*</span></label>
                                 <input type="text" className="form-control" maxLength={10} required placeholder="ABCTY1234D" onChange={calculator} id="pan" />
                            </div>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group first">
                            <label htmlFor="lname">Residential Address<span style={{color:"red"}}>*</span></label>
                            <input type="text" className="form-control" required placeholder="Residential Address" onChange={calculator} id="raddress" />
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group first">
                            <label htmlFor="lname">Official Address</label>
                            <input type="text" className="form-control" required placeholder="Official Address" id="oaddress" />
                            </div>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        
                            <div className="form-group last mb-3">
                            <label htmlFor="adhar">Adhaar No.<span style={{color:"red"}}>*</span></label>
                            <input type="text" maxLength={14} className="form-control"required placeholder="XXXX-XXXX-XXXX" onChange={calculator} onKeyPress={e=>num(e)} id="adhar" />
                            </div>
                        </div>
                        <div className="col-md-6">
                        
                            <div className="form-group last mb-3">
                            <label htmlFor="DOB">Date of birth</label>
                            <input type="date" className="form-control" required placeholder="DOB" id="DOB" />
                            </div>
                        </div>
                    </div>
                    {/* <input type="submit" value="Register" className="btn px-5 btn-primary" /> */}
                    {/* writing form */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                            <label htmlFor="incomeFromSalary"><b>1.</b>Income from Salary recieved during the financial year including H.R.A & Arrear<span style={{color:"red"}}>*</span></label>
                            <input type="number" className="form-control" min={0}  placeholder="Income from Salary" onChange={calculator} id="incomeFromSalary" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                            <label htmlFor="npsEmployee"><b>2.</b>Add: NPS Emplyoyer's share</label>
                            <input type="number" className="form-control" min={0} placeholder="NPS Emplyoyer's share" onChange={calculator} id="npsEmployee" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                           
                            
                            <div className="accordion-item" style={{border:"none",margin:"15px 0px"}}>
  
      <button className="accordion-button collapsed" style={{background:"#f6f7fc",padding:"0",border:"none !important"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <label htmlFor="hra" ><b>3.</b>Less Exempted H.R.A. (Exempted up to the least of following)</label>            
      </button>
      <input type="number" className="form-control" min={0} value={hrastate} readOnly placeholder="Less Exempted H.R.A."  id="hra" />
                        
    
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <label><b>(i)</b> Actual H.R.A. received</label>
      <input type="number" className="form-control" min={0} placeholder="Actual H.R.A. received" onChange={calculator} id="ahra" /><hr/>
      <label><b>(ii) </b>Rent paid (-) Minus 10% of salary (Basic+DA)</label>
      <input type="number" className="form-control" min={0} placeholder="Rent Paid" onChange={calculator} id="rp" /> <hr/>
      <label><b>(iii) </b>50% of salary (Basic+DA) in Mumbai, Kolkata, Chennai and Delhi or 40% of salary (Basic+DA) in other town&cities</label> 
      <input type="number" className="form-control" min={0} placeholder="Less Exempted H.R.A." onChange={calculator} id="cities" />
    </div>
  </div>

      
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="grossSalary"><b>4.</b>Gross Salary (1+2-3)</label>
                                 <input type="text" className="form-control"   onChange={calculator} id="grossSalary" value= {grossSal} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="lsd"><b>5.</b>Less Standard deduction 50,000 to be allowed to salaried tax payers</label>
                                 <input type="number" className="form-control" onChange={calculator} min={0}  placeholder='Less Standard deduction' id="lsd"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="lps"><b>6.</b>Less Professional Tax</label>
                                 <input type="number" className="form-control"  min={0} onChange={calculator} placeholder='Less Professional Tax' id="lps"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="deduction80c"><b>7.</b>Deductions other than u/s 80-C</label>
                                 <input type="number" className="form-control"  min={0} onChange={calculator} placeholder='yet to setup' id="deduction80c"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="IncomeUH"><b>8.</b>Income under the head salary (4-5-6-7)</label>
                                 <input type="number" className="form-control" value= {headSal} id="IncomeUH" readOnly  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="incomeOS"><b>9.</b>Income from other sources</label>
                                 <input type="number" className="form-control"  min={0}  onChange={calculator}placeholder='Income from other sources' id="incomeOS"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="grossIncome"><b>10.</b>Gross total income (8+9)</label>
                                 <input type="number" className="form-control" value={gti}  readOnly id="grossIncome"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="DeductionU"><b>11.</b>Deduction U/S 80-C for savings(Qualifying amount)</label>
                                 <input type="number" className="form-control" min={0}  onChange={calculator}placeholder='yet to setup' id="DeductionU"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="DeductionUS80CCD"><b>12.</b>Deduction U/S 80CCD (1B) in respect of deposit in national pension scheme upto max.50,000</label>
                                 <input type="number" className="form-control" min={0} onChange={calculator} placeholder='Deduction U/S 80CCD (1B)' id="DeductionUS80CCD"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="DeductionUS80CCD2"><b>13.</b>Deduction U/S 80CCD2 NPS employer's share</label>
                                 <input type="number" className="form-control" min={0} onChange={calculator} placeholder='Deduction U/S 80CCD2 (1B)' id="DeductionUS80CCD2"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="ttl"><b>14.</b>TOTAL TAXABLE INCOME (10-11-12-13)</label>
                                 <input type="number" className="form-control"  readOnly value={totaltiustate} placeholder='TOTAL TAXABLE INCOME' id="ttl"  />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="ttl"><b>15.</b>INCOME TAX (OLD REGIME)</label>
                                 <input type="number" className="form-control" readOnly value={taxor}  placeholder='YET TO SETUP' id="ttl"  />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="TaxRebateU/S87/A"><b>16.</b>Tax rebate u/s 87/A in case Resident Individual having total taxable income upto Rs. 5 lakhs upto max of Rs. 12,500</label>
                                 <input type="number" className="form-control" min={0}  onChange={calculator} placeholder='Tax rebate u/s 87/A' id="TaxRebateUS87A"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="healthandeductaion"><b>17.</b>Add health and eductaion cess 4% after allowing rebate u/s 86 and relief u/s 89/1</label>
                                 <input type="number" className="form-control"  value={healthandeductaion}  readOnly placeholder='Add health and eductaion cess' id="healthandeductaion"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="titp"><b>18.</b>Total Income Tax Payable</label>
                                 <input type="number" className="form-control" min={0} value={titp} readOnly  placeholder='' id="titp"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="titp"><b>19.</b>Less already deducted tax during the year (TDS)</label>
                                 <input type="number" className="form-control" min={0}  onChange={calculator} placeholder='TDS' id="tds"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 <label htmlFor="balancetax"><b>20.</b>Balance income tax to be paid</label>
                                 <input type="number" className="form-control"  readOnly  value={tax} id="balancetax"  />
                            </div>
                        </div>
                    </div>
                    
                </form>
                <Link className={`btn btn-primary ${classoflink}`} to="/generatingpdf"  state={{ values:valuesfornextpage }} onClick={btnDisable==="true"? e=> {swal("Sorry!", "Fill the required fields", "error"); e.preventDefault()}:console.log("vgf")} style={{color:"white",textDecoration:"none",height:"40px"}}>Submit</Link>
                </div>
            </div>
            </div>
        </div>
        
        
        </div>

      

</>
  )
}
