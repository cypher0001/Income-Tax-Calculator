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
    const [deduction80cstate, setdeduction80cstate] = useState(0)
    const [deduction80cUstate, setdeduction80cUstate] = useState(0)

    const calculator=()=>{

        var incomeFromSalary=Number(document.getElementById("incomeFromSalary").value);
        var npsEmployee=Number(document.getElementById("npsEmployee").value);
        var hra=Number(document.getElementById("ahra").value)+Number(document.getElementById("rp").value)+Number(document.getElementById("cities").value);
       sethrastate(hra)
        setgrossSal(incomeFromSalary + npsEmployee - hra);
       let grosssalvar=incomeFromSalary + npsEmployee - hra;
       var lsd=Number(document.getElementById("lsd").value);
       var lps=Number(document.getElementById("lps").value);
       
       var deduction80csub = document.querySelectorAll(`[id^="sub"]`);
        let k = 0;
        for (var i = 0; i < deduction80csub.length; i++) {
          var sum = deduction80csub[i];
          k = k + Number(sum.value) ;
          }

          setdeduction80cstate(k)
       var deduction80c=k;
          

       setheadSal(grosssalvar-lsd-lps-deduction80c);
       let headsalvar=grosssalvar-lsd-lps-deduction80c;
       var incomeOS=Number(document.getElementById("incomeOS").value);
       setgti(headsalvar+incomeOS);
      
       let gtivar=headsalvar+incomeOS;
        
       var deduction80cUsub = document.querySelectorAll(`[id^="2sub"]`);
       let m = 0;
        for (var j = 0; j < deduction80cUsub.length; j++) {
          var sum0 = deduction80cUsub[j];
          m = m + Number(sum0.value) ;
          }

          setdeduction80cUstate(m)
       var DeductionU=m



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
        // var fy=document.getElementById("fy").value
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
            fy:"2021-22",
            as:"2022-23",
            dob:dob,
            oa:oa,
            sub1of7:deduction80csub[0].value,
            sub2of7:deduction80csub[1].value,
            sub3of7:deduction80csub[2].value,
            sub4of7:deduction80csub[3].value,
            sub5of7:deduction80csub[4].value,
            sub6of7:deduction80csub[5].value,
            sub7of7:deduction80csub[6].value,
            sub8of7:deduction80csub[7].value,
            sub9of7:deduction80csub[8].value,
            sub10of7:deduction80csub[9].value,

            sub1of11:deduction80cUsub[0].value,
            sub2of11:deduction80cUsub[1].value,
            sub3of11:deduction80cUsub[2].value,
            sub4of11:deduction80cUsub[3].value,
            sub5of11:deduction80cUsub[4].value,
            sub6of11:deduction80cUsub[5].value,
            sub7of11:deduction80cUsub[6].value,
            sub8of11:deduction80cUsub[7].value,
            sub9of11:deduction80cUsub[8].value,
            sub10of11:deduction80cUsub[9].value,
            sub11of11:deduction80cUsub[10].value,
            sub12of11:deduction80cUsub[11].value,
            sub13of11:deduction80cUsub[12].value,
            sub14of11:deduction80cUsub[13].value,
            sub15of11:deduction80cUsub[14].value,
            sub16of11:deduction80cUsub[15].value,
            sub17of11:deduction80cUsub[16].value,
            sub18of11:deduction80cUsub[17].value,
            sub19of11:deduction80cUsub[18].value,

            ahra:document.getElementById("ahra").value,
            rp:document.getElementById("rp").value,
            cities:document.getElementById("cities").value,
            
        })
        // console.log(deduction80csub.value)
        setclassoflink("linkoff")
        setbtnDisable("true")
        if(incomeFromSalary!==0 && namevar!=="" && ra!=="" && pan.length===10 && adhaar.length===14 && designation!=="" )
        {
            setbtnDisable("false")
            setclassoflink("linkon")
        }
        
      }
  
    //   const [year,setyear] = useState(0);
    //   // let a=year.split("-")
    //   const financialyear = (e) => {
    //     let a = e.target.value.split("-");
    //     let b = Number(a[0]) + 1;
    //     let c = Number(a[1]) + 1;
    //     let d = [b, c];
    //     // console.log(d);
    //     setyear(d.join("-"));
    //   };
      
  return (
    <>
        <div className="d-lg-flex half">
        {/* <div className="bg order-1 order-md-2" ></div> */}
        <div className="contents order-2 order-md-1">
        
            <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-9 py-5">
                <center><h3>FORM NO.2 <small>(OLD REGIME)</small></h3>
                <p style={{color:"black"}}className="mb-4">NEW PROFORMA FOR CALCULATING INCOME TAX FOR THE TAX DEDUCTION AT SOURCE FOR THE FINANCIAL YEAR 2021-22 i.e. ASSESSMENT YEAR 2022-23</p>
                </center>
                <p style={{fontSize:"18px", color:"black"}}><span style={{color:"red"}}>*</span> Fields are mandatory</p>
                <form action="#" method="post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group first">
                                <label htmlFor="fname">Name of the applicant <span style={{color:"red"}}>*</span></label>
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
                                <label htmlFor="fname">Financial Year</label>
                                <input type="text" className="form-control" value="2021-22" readOnly/>
                                
                                {/* <input type="text" className="form-control" maxLength={7} required onChange={calculator} placeholder="YYYY-YY" id="fy" onKeyPress={e=>num(e)} onBlur={(e)=>financialyear(e)}/> */}
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group first">
                                <label htmlFor="a/y">Assessment Year</label>
                                {/* <input  className="form-control" required placeholder="YYYY-YYYY"  value={year} id="a/y" readOnly  /> */}
                                <input  className="form-control" value="2022-23" readOnly  />

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
                            <p><i className="fa fa-info-circle" aria-hidden="true"></i>
                     Fill all the details in INR </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                            <label htmlFor="incomeFromSalary"><b>1.</b>Income from Salary recieved during the financial year including House Rental Allowance & Arrear<span style={{color:"red"}}>*</span></label>
                            
                            <input type="number" className="form-control" min={0}  placeholder="Income from Salary" onChange={calculator} id="incomeFromSalary" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                            
                            <div class="tooltip1"><label htmlFor="npsEmployee"><b>2.</b>Add: NPS Emplyoyer's share</label>


                                    <span class="tooltiptext1">
National Pension System (NPS) is a savings scheme designed to enable the subscribers to make systematic savings during their working life. </span>
                                   
                            </div>
                            <input type="number" className="form-control" min={0} placeholder="NPS Emplyoyer's share" onChange={calculator} id="npsEmployee" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                           
                            
                            <div className="accordion-item" style={{border:"none",margin:"15px 0px"}}>
                           
      <button className="accordion-button collapsed" style={{background:"#f6f7fc",padding:"0",border:"none !important"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                 
      </button>
      <div className="tooltip1">
      <label htmlFor="hra" ><b>3.</b>Less Exempted House Rental Allowance (H.R.A) (Click here to view more details)</label>
                                
                                    <span className="tooltiptext1">House Rent Allowance is a part of your salary provided by the employer for the expenses incurred towards rented accommodation. You can claim HRA exemption only if you are residing in a rented house.</span>
                                   
                            </div>
      <input type="number" className="form-control" min={0} value={hrastate} readOnly placeholder="Less Exempted H.R.A."  id="hra" />
                        
    
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <label><b>(i)</b> Actual House Rental Allowance (H.R.A) received</label>
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
                                 
                                 <div className="tooltip1">
                                 <label htmlFor="lsd"><b>5.</b>Less Standard deduction 50,000 to be allowed to salaried tax payers</label>
                                
                                    <span className="tooltiptext1">The term standard deduction refers to the portion of income not subject to tax that can be used to reduce your tax bill.The amount of your standard deduction is based on your filing status, age, and other criteria.</span>
                                   
                            </div>
                                 <input type="number" className="form-control" onChange={calculator} min={0}  placeholder='Less Standard deduction' id="lsd"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                            
                                 <div className="tooltip1">

                                 <label htmlFor="lps"><b>6.</b>Less Professional Tax</label>
                                    <span className="tooltiptext1">Professional tax is a tax that is levied by a state government on all individuals who earn a living through any medium.</span>
                                   
                            </div>
                                 <input type="number" className="form-control"  min={0} onChange={calculator} placeholder='Less Professional Tax' id="lps"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                                 {/* <label htmlFor="deduction80c"><b>7.</b>Deductions other than u/s 80-C</label>
                                 <input type="number" className="form-control"  min={0} onChange={calculator} placeholder='yet to setup' id="deduction80c"  />
                            */}
                             <div className="accordion-item" style={{border:"none",margin:"15px 0px"}}>
                           
                           <button className="accordion-button collapsed" style={{background:"#f6f7fc",padding:"0",border:"none !important"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <label htmlFor="hra" ><b>7.</b>Deductions other than u/s 80-C (Click here for more details) <Link target={"_blank"} to ="/taxrules"><i className="fa fa-info-circle" aria-hidden="true"></i></Link></label>            
                           </button>
                           <input type="number" className="form-control" min={0} value={deduction80cstate} readOnly placeholder="Deductions other than u/s 80-C"  id="deduction80c" />
                                             
                         
                         <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                           <label><b>(i)</b> U/S80-D: Medical insurance premium (Upto Rs. 25,000 Sr. citizen Rs. 50,000)</label>
                           <input type="number" className="form-control" min={0} placeholder=" Medical insurance premium" onChange={calculator} id="submip" /><hr/>
                           <label><b>(ii) </b>U/S 80-DD: Medically handicaped assesses (uptom Rs. 75000, in case of svere disability Rs. 125000)</label>
                           <input type="number" className="form-control" min={0} placeholder="U/S 80-DD: Medically handicaped assesses" onChange={calculator} id="submha" /> <hr/>
                           <label><b>(iii) </b>U/S 80-DDB: Medical treatment of notified disease of assesses (Upto Rs.40000 Sr. citizen Rs. 1,00,000, 80,000 Super Sr. citizen )</label> 
                           <input type="number" className="form-control" min={0} placeholder="U/S 80-DDB: Medical treatment of notified disease" onChange={calculator} id="submtn" /><hr/>
                        
                           <label><b>(iv)</b>U/S80-U: Physically handicaped (Upto Rs. 75,000 Rs. 1,25,000 (in case of svere disability))</label>,
                           <input type="number" className="form-control" min={0} placeholder="U/S80-U: Physically handicaped" onChange={calculator} id="subph" /><hr/>
                           <label><b>(v) </b>U/S 80-G: Donations given to  approved institution and funds</label>
                           <input type="number" className="form-control" min={0} placeholder="U/S 80-G: Donations given to  approved institution and funds" onChange={calculator} id="subda" /> <hr/>
                           <label><b>(vi) </b>U/S 24: House loan interest (upto Rs. 2,00,000)</label> 
                           <input type="number" className="form-control" min={0} placeholder="U/S 80-DDB: Medical treatment of notified disease" onChange={calculator} id="subhli" /><hr/>
                        
                           <label><b>(vii)</b>U/S 80-E: Education loan interest</label>,
                           <input type="number" className="form-control" min={0} placeholder="U/S 80-E: Education loan interest" onChange={calculator} id="subeli" /><hr/>
                           <label><b>(viii) </b>U/S 80-GG: Rent paid</label>
                           <input type="number" className="form-control" min={0} placeholder="U/S 80-GG: Rent paid" onChange={calculator} id="subda" /> <hr/>
                           <label><b>(ix)</b>U/S 80-GGA: Donation for certain notified purposes</label> 
                           <input type="number" className="form-control" min={0} placeholder="U/S 80-GGA: Donation for certain notified purposes" onChange={calculator} id="subrp" /><hr/>
                           <label><b>(x)</b>Deduction in respect of interest of loan sanctioned financial year 2013-14 for acqi. House property</label> 
                           <input type="number" className="form-control" min={0} placeholder="Deduction in respect of interest of loan" onChange={calculator} id="subari" /><hr/>
                        
                        
                         </div>
                       </div>
                     
                           
                                                 </div>
                           
                           
                           
                           
                           
                           
                           
                           
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
                              
                                 <div className="tooltip1">

                                 <label htmlFor="incomeOS"><b>9.</b>Income from other sources</label>
                                    <span className="tooltiptext1">Any income which is not specifically taxed under any other head of income will be taxed under this head.
</span>
                                   
                            </div>
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
                                 {/* <label htmlFor="DeductionU"><b>11.</b>Deduction U/S 80-C for savings(Qualifying amount)</label>
                                 <input type="number" className="form-control" min={0}  onChange={calculator}placeholder='yet to setup' id="DeductionU"  /> */}
                             <div className="accordion-item" style={{border:"none",margin:"15px 0px"}}>
                           
                           <button className="accordion-button collapsed" style={{background:"#f6f7fc",padding:"0",border:"none !important"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <label htmlFor="hra" ><b>11.</b>Deduction U/S 80-C for savings(Click here to view more details)</label>            
                           </button>
                           <input type="number" className="form-control" min={0} value={deduction80cUstate} readOnly placeholder="Deduction U/S 80-C for savings(Qualifying amount)"  id="deduction80c" />
                                             
                         
                         <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
                           <label><b>(i) </b>General Provident Fund</label>
                           <input type="number" className="form-control" min={0} placeholder="G.P.F" onChange={calculator} id="2subgpf" /><hr/>
                           <label><b>(ii) </b>National Pension Scheme (Employee's share)</label>
                           <input type="number" className="form-control" min={0} placeholder="NPS" onChange={calculator} id="2subnps" /> <hr/>
                           <label><b>(iii) </b>Public Provident Fund</label> 
                           <input type="number" className="form-control" min={0} placeholder="P.P.F" onChange={calculator} id="2subppf" /><hr/>
                        
                           <label><b>(iv) </b>Group Insurance Scheme</label>
                           <input type="number" className="form-control" min={0} placeholder="G.I.S" onChange={calculator} id="2subgis" /><hr/>
                           <label><b>(v) </b>National Savings Certificate  VIII issue</label>
                           <input type="number" className="form-control" min={0} placeholder="NSC VIII issue" onChange={calculator} id="2subnsc" /> <hr/>
                           <label><b>(vi) </b>Interest on National Savings Certificate  VIII issue purchased previously</label> 
                           <input type="number" className="form-control" min={0} placeholder="Interest on NSC VIII issue purchased previously" onChange={calculator} id="2subncsvii" /><hr/>
                        
                           <label><b>(vii)</b>Life Insurance Premium (upto 20% of sum assured)</label>,
                           <input type="number" className="form-control" min={0} placeholder="Life Insurance Premium" onChange={calculator} id="2sublip" /><hr/>
                           <label><b>(viii) </b>Unit Linked Insurance Plan</label>
                           <input type="number" className="form-control" min={0} placeholder="Unit Linked Insurance Plan" onChange={calculator} id="2subulip" /> <hr/>
                           <label><b>(ix) </b>Amount paid for contact for a defferred annuity(Upto 20% of sum assured)</label> 
                           <input type="number" className="form-control" min={0} placeholder="Amount paid for contact for a defferred annuity" onChange={calculator} id="2subapc" /><hr/>
                           <label><b>(x) </b>Principal amount paid against a loan taken for purchase or construction or amount paid as installment of price of house</label> 
                           <input type="number" className="form-control" min={0} placeholder="Principal amount paid against a loan taken" onChange={calculator} id="2subpapa" /><hr/>
                        
                           <label><b>(xi) </b>Sukanya Samridi Yojna</label> 
                           <input type="number" className="form-control" min={0} placeholder="Sukanya Samridi Yojna" onChange={calculator} id="2subssy" /><hr/>
                           <label><b>(xii) </b>Postal Life Insurance</label> 
                           <input type="number" className="form-control" min={0} placeholder="Postal Life Insurance" onChange={calculator} id="2subpil" /><hr/>
                           <label><b>(xiii) </b>Amount Invested in equity linked notified units of UTI etc.</label> 
                           <input type="number" className="form-control" min={0} placeholder="Amount Invested in equity linked notified units of UTI etc" onChange={calculator} id="2subaie" /><hr/>
                           <label><b>(xiv) </b>Amount paid as tution fee to any educational institue for any two children</label> 
                           <input type="number" className="form-control" min={0} placeholder="Amount paid as tution fee to any educational institue for any two children" onChange={calculator} id="2subaptf" /><hr/>
                           <label><b>(xv) </b>Investment in notified share, bonds, units of U.T.I or mutual fund</label> 
                           <input type="number" className="form-control" min={0} placeholder="Investment in notified share, bonds, units of U.T.I or mutual fund" onChange={calculator} id="2subins" /><hr/>
                           <label><b>(xvi) </b>Subscription to bonds of NABARD</label> 
                           <input type="number" className="form-control" min={0} placeholder="Subscription to bonds of NABARD" onChange={calculator} id="2subsbn" /><hr/>
                           <label><b>(xvii) </b>Terms deposit with banks of atleast five year period</label> 
                           <input type="number" className="form-control" min={0} placeholder="Terms deposit with banks of atleast five year period" onChange={calculator} id="2subtdwb" /><hr/>
                           <label><b>(xviii) </b>Five year terms deposit with post office time deposit rules 1981 & deposit in an account under the senior citizen having scheme rules 2004</label> 
                           <input type="number" className="form-control" min={0} placeholder="Five year terms deposit with post office time deposit rules 1981" onChange={calculator} id="2subfyt" /><hr/>
                           <label><b>(xix) </b>Any other saving covered under U/S 80-C</label> 
                           <input type="number" className="form-control" min={0} placeholder="Any other saving covered under U/S 80-C" onChange={calculator} id="2subaos" /><hr/>
                          
                        
                         </div>
                       </div>
                     
                           
                                                 </div>
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
  
                                 <div className="tooltip1">

                                 <label htmlFor="DeductionUS80CCD"><b>12.</b>Deduction U/S 80CCD (1B) in respect of deposit in national pension scheme upto max.50,000</label>
                                    <span className="tooltiptext1">As per Section 80CCD(1B), individuals who are employees or self-employed can claim an additional deduction of ₹ 50,000 when they contribute to NPS or Atal Pension Yojana.</span>
                                   
                            </div>
                                 <input type="number" className="form-control" min={0} onChange={calculator} placeholder='Deduction U/S 80CCD (1B)' id="DeductionUS80CCD"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                               
                                 <div className="tooltip1">

                                 <label htmlFor="DeductionUS80CCD2"><b>13.</b>Deduction U/S 80CCD2 NPS employer's share</label>
                                    <span className="tooltiptext1">Section 80CCD (2) allows salaried individuals to claim deductions up to 10% of their salary which includes the basic pay and dearness allowance or is equal to the contributions made by the employer towards the NPS.</span>
                                   
                            </div>
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
                              
                                 <div className="tooltip1">
                                 <label htmlFor="TaxRebateU/S87/A"><b>16.</b>Tax rebate u/s 87/A in case Resident Individual having total taxable income upto Rs. 5 lakhs upto max of Rs. 12,500</label>
                                
                                    <span className="tooltiptext1">Section 87A provides a tax rebate to individual taxpayers if their total income is less than Rs 5 lakh after claiming deductions. </span>
                                   
                            </div>
                                 <input type="number" className="form-control" min={0}  onChange={calculator} placeholder='Tax rebate u/s 87/A' id="TaxRebateUS87A"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group last mb-3">
                   
                                 <div className="tooltip1">
                                 <label htmlFor="healthandeductaion"><b>17.</b>Add health and education cess 4% after allowing rebate u/s 86 and relief u/s 89/1</label>
                                
                                    <span className="tooltiptext1">The cess, levied at 4 percent of the tax payable, is imposed as an additional surcharge on taxpayers for funding select government welfare programmes, specifically primary and secondary education, and health infrastructure.</span>
                                   
                            </div>
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
                           
                                 <div className="tooltip1">
                                 <label htmlFor="titp"><b>19.</b>Less already deducted tax during the year (TDS)</label>
                                
                                    <span className="tooltiptext1">TDS or Tax Deducted at Source is a specific amount that is reduced when a certain payment like salary, commission, rent, interest, professional fees, etc. is made. </span>
                                   
                            </div>
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
