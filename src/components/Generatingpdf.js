// import Calculator from "./Calculator";
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { useReactToPrint } from "react-to-print";


export default function Generatingpdf() {
  const location = useLocation()
  const { values } = location.state
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <>
    <div ref={componentRef} className="container my-5" style={{padding:"30px",backgroundColor:"#d9f0c2", boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}} >
    <div className="row align-items-center justify-content-center">
        <div className="col-md-10 py-5">
                <h3 style={{textAlign:"center"}}>FORM NO.2 <small>(OLD REGIME)</small></h3>
                <h2 style={{textAlign:"center"}} className="mb-4"><b> PERFORMA FOR CALCULATING INCOME TAX FOR THE TAX DEDUCTION AT SOURCE FOR THE FINANCIAL YEAR 2021-22 i.e. A/Y 2022-23</b></h2>
            <div className="row " ><p  ><b>Name & Designation of official:</b> {values.name}, {values.designation}</p>  
              <p ><b>F/Y:</b>{values.fy}, <b>Assessment Year:</b>{values.fy}</p>
              {/* <p > <b>Assessment Year:</b>{values.fy}</p> */}
            </div>
            <div className="row">
                <p className="col-md-12"><b>Permanent Account Number:</b>{values.pan}</p>
                <p > <b>DOB:</b>{values.dob}</p>
                <p > <b>Residential Address:</b>{values.ra}</p>
             </div>
            <div className="row">
              <p ><b>Official Address:</b>{values.oa}</p>
              <p ><b>Adhaar number:</b>{values.adhaar}</p>
           </div>
    <hr/>
    <div className='row' >
      <table className='css-serial' >
        <thead>

        </thead>

        <tbody >
        <tr >
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Income from Salary recieved during the financial year including H.R.A & Arrear</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.incomeFromSalary}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Add: NPS Emplyoyer's share</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.npsEmployee}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Less Exempted H.R.A. (Exempted up to the least of following)</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.hra}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Gross Salary (1+2-3)</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.grossSal}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Less Standard deduction 50,000 to be allowed to salaried tax payers</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.lsd}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Less Professional Tax</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.lps}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}} colSpan={2}>Deductions other than u/s 80-C<br/>
          
         {/* <ul> <li>U/S 80-D:Medical insurance premium (UP to Rs. 25,000, Sr.citizen Rs. 50,000)</li>
         <li>U/S 80-DD:Medicalhandicaped assesses (upto Rs. 75000, in case of svere disability Rs. 1,25,000</li>
         </ul> */}
</td>
          {/* <td style={{padding:"5px 5px"}}>Rs.{values.deduction80c}</td> */}
        </tr>
         <tr>
           <td colSpan={3}>
           <table>
            <tbody>
              <tr>
                <td>(i) </td>
                <td>U/S 80-D:Medical insurance premium (UP to Rs. 25,000, Sr.citizen Rs. 50,000) </td>
                <td>Rs.{values.deduction80csub[0].value}</td>
                </tr>
              <tr>
                    <td>(ii) </td>
                    <td>U/S 80-DD:Medicalhandicaped assesses (upto Rs. 75000, in case of svere disability Rs. 1,25,000 </td>
                    <td>Rs.</td>
                </tr>
                <tr>
                    <td>(iii) </td>
                    <td>U/S 80-DDB: Medical treatment of notified disease of assesses (Upto Rs.40000 Sr. citizen Rs. 1,00,000, 80,000 Super Sr. citizen ) </td>
                    <td>Rs.</td>
                </tr>
                <tr>
                    <td>(vi) </td>
                    <td>U/S80-U: Physically handicaped (Upto Rs. 75,000 Rs. 1,25,000 (in case of svere disability))</td>
                    <td>Rs.</td>
                </tr>
                <tr>
                    <td>(v) </td>
                    <td>U/S 80-G: Donations given to  approved institution and funds</td>
                    <td>Rs.</td>
                </tr>
                <tr>
                    <td>(vi) </td>
                    <td>U/S 24: House loan interest (upto Rs. 2,00,000)</td>
                    <td>Rs.</td>
                </tr>
                <tr>
                    <td>(vii) </td>
                    <td>U/S 80-E: Education loan interest</td>
                    <td>Rs.</td>
                </tr>
                <tr>
                    <td>(viii) </td>
                    <td>U/S 80-GG: Rent paid</td>
                    <td>Rs.</td>
                </tr>
                <tr>
                  <td>(xi) </td>
                  <td>U/S 80-GGA: Donation for certain notified purposes</td>
                  <td>Rs.</td>
                 </tr>
                <tr>
                    <td>(x) </td>
                    <td>Deduction in respect of interest of loan sanctioned financial year 2013-14 for acqi. House property</td>
                    <td>Rs.</td>
                </tr>
                <tr>
                    <td>(xi) </td>
                    <td>TOTAL</td>
                    <td>Rs.{values.deduction80c}</td>
                </tr>





            </tbody>
          </table>
           </td>
         </tr>

        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Income under the head salary (4-5-6-7)</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.headSal}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Income from other sources</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.incomeOS}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Gross total income (8+9)</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.gti}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Deduction U/S 80-C for savings(Qualifying amount)</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.DeductionU}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Deduction U/S 80CCD (1B) in respect of deposit in national pension scheme upto max.50,000</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.DeductionUS80CCD}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Deduction U/S 80CCD2 NPS employer's share</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.DeductionUS80CCD2}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>TOTAL TAXABLE INCOME (10-11-12-13)</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.totalti}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>INCOME TAX (OLD REGIME)</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.taxor}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Tax rebate u/s 87/A in case Resident Individual having total taxable income upto Rs. 5 lakhs upto max of Rs. 12,500</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.TaxRebateUS87A}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Add health and eductaion cess 4% after allowing rebate u/s 86 and relief u/s 89/1</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.healthandeductaion}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Total Income Tax Payable</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.titp}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Less already deducted tax during the year (TDS)</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.tds}</td>
        </tr>
        <tr>
          <td style={{padding:"5px 5px"}}></td>
          <td style={{padding:"5px 5px"}}>Balance income tax to be paid</td>
          <td style={{padding:"5px 5px"}}>Rs.{values.tax}</td>
        </tr>



        </tbody>
      
      </table>

      </div>
      
        </div>
      </div>
    </div>
    <button onClick={handlePrint} className="btn btn-primary">Print your form</button>
   </>
  )
}
