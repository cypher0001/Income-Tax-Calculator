// import Calculator from "./Calculator";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

export default function Generatingpdf() {
  const location = useLocation();
  const { values } = location.state;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div
        ref={componentRef}
        className="container my-3"
        style={{
          padding: "0px 55px",
          fontSize: "11px",
          backgroundColor: "#d9f0c2",
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10 py-5">
            <h6 style={{ textAlign: "center" }}>
              FORM NO.2 <small>(OLD REGIME)</small>
            </h6>
            <h6 style={{ textAlign: "center" }} className="mb-4">
              <b>
                {" "}
                PROFORMA FOR CALCULATING INCOME TAX FOR THE TAX DEDUCTION AT
                SOURCE FOR THE FINANCIAL YEAR 2021-22 i.e. ASSESSMENT YEAR 2022-23
              </b>
            </h6>

            <div className="row ">
              <p>
                <b>Name & Designation of applicant:</b> {values.name},{" "}
                {values.designation}, <b>Financial Year:</b>
                {values.fy}, <b>Assessment Year:</b>
                {values.fy}
              </p>
              {/* <p ><b>F/Y:</b>{values.fy}, <b>Assessment Year:</b>{values.fy}</p> */}
              {/* <p > <b>Assessment Year:</b>{values.fy}</p> */}
            </div>
            <div className="row">
              <p className="col-md-12">
                <b>Permanent Account Number:</b>
                {values.pan}, <b>DOB:</b>
                {values.dob}, <b>Residential Address:</b>
                {values.ra}
              </p>
              {/* <p > <b>DOB:</b>{values.dob}</p>
                <p > <b>Residential Address:</b>{values.ra}</p> */}
            </div>
            <div className="row">
              <p>
                <b>Official Address:</b>
                {values.oa}, <b>Adhaar number:</b>
                {values.adhaar}
              </p>
              {/* <p ><b>Adhaar number:</b>{values.adhaar}</p> */}
            </div>
            <hr />
            <div className="row">
              <table className="css-serial">
                <thead></thead>

                <tbody>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Income from Salary recieved during the financial year
                      including H.R.A & Arrear
                    </td>
                    <td style={{ padding: "2px 2px" }}>
                      Rs.{values.incomeFromSalary}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Add: NPS Emplyoyer's share
                    </td>
                    <td style={{ padding: "2px 2px" }}>
                      Rs.{values.npsEmployee}
                    </td>
                  </tr>
                  <tr colSpan={2}>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Less Exempted House Rental Allowance (H.R.A) (Exempted up to the least of
                      following)
                    </td>
                    {/* <td style={{padding:"2px 2px"}}>Rs.{values.hra}</td> */}
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <table
                        style={{ borderCollapse: "collapse", cellSpacing: "0" }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ padding: "2px 2px" }}>(i) </td>
                            <td style={{ padding: "2px 2px" }}>
                              Actual House Rental Allowance (H.R.A) received
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              Rs.{values.ahra}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}>(ii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              Rent paid (-) minus 10% of salary(Basic+DA)
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              Rs.{values.rp}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}>(iii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              50% of salary (Basic+DA) in Mumbai, Kolkata,
                              Chennai and Delhi or 40% of salary (Basic+DA) in
                              other towns & cities
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              Rs.{values.cities}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}>(iv)</td>
                            <td style={{ padding: "2px 2px" }}>TOTAL</td>
                            <td style={{ padding: "2px 2px" }}>
                              Rs.{values.hra}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>Gross Salary (1+2-3)</td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.grossSal}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Less Standard deduction 50,000 to be allowed to salaried
                      tax payers
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.lsd}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Less Professional Tax
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.lps}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }} colSpan={2}>
                      Deductions other than u/s 80-C
                      <br />
                      {/* <ul> <li>U/S 80-D:Medical insurance premium (UP to Rs. 25,000, Sr.citizen Rs. 50,000)</li>
         <li>U/S 80-DD:Medicalhandicaped assesses (upto Rs. 75000, in case of svere disability Rs. 1,25,000</li>
         </ul> */}
                    </td>
                    {/* <td style={{padding:"2px 2px"}}>Rs.{values.deduction80c}</td> */}
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ padding: "2px 2px" }}>(i) </td>
                            <td style={{ padding: "2px 2px" }}>
                              U/S 80-D:Medical insurance premium (UP to Rs.
                              25,000, Sr.citizen Rs. 50,000){" "}
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              Rs.{values.sub1of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (ii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              U/S 80-DD:Medicalhandicaped assesses (upto Rs.
                              75000, in case of svere disability Rs. 1,25,000{" "}
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub2of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (iii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              U/S 80-DDB: Medical treatment of notified disease
                              of assesses (Upto Rs.40000 Sr. citizen Rs.
                              1,00,000, 80,000 Super Sr. citizen ){" "}
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub3of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (vi) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              U/S80-U: Physically handicaped (Upto Rs. 75,000
                              Rs. 1,25,000 (in case of svere disability))
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub4of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (v) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              U/S 80-G: Donations given to approved institution
                              and funds
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub5of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (vi) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              U/S 24: House loan interest (upto Rs. 2,00,000)
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub6of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (vii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              U/S 80-E: Education loan interest
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub7of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (viii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              U/S 80-GG: Rent paid
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub8of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xi) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              U/S 80-GGA: Donation for certain notified purposes
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub9of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (x) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Deduction in respect of interest of loan
                              sanctioned financial year 2013-14 for acqi. House
                              property
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub10of7}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xi) </td>
                            <td style={{ padding: "2px 2px" }}> TOTAL</td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.deduction80c}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Income under the head salary (4-5-6-7)
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.headSal}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Income from other sources
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.incomeOS}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Gross total income (8+9)
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.gti}</td>
                  </tr>
                  <tr colSpan={2}>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Deduction U/S 80-C for savings(Qualifying amount)
                    </td>
                    {/* <td style={{padding:"2px 2px"}}>Rs.{values.DeductionU}</td> */}
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (i) </td>
                            <td style={{ padding: "2px 2px" }}> G.P.F.</td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub1of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (ii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              NPS (Employee's Share)
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub2of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (iii) </td>
                            <td style={{ padding: "2px 2px" }}> P.P.F.</td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub3of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (iv) </td>
                            <td style={{ padding: "2px 2px" }}> G.I.S.</td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub4of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (v) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              NSC VIII issue
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub5of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (vi) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Interest on NSC VIII issue (purchased previously)
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub5of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (vii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Life Insurance Premium(upto 20% of sum assured)
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub7of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (viii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Unit Linked Insurance Plan
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub8of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (ix) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Amount paid for contact for a defferred
                              annuity(upto 20% of sum assured){" "}
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub9of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (x) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Principal amount paid against a loan taken for
                              purchase or construction or amount paid as
                              installment of price of house.
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub10of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xi) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Sukanya Samridi Yojna
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub11of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Postal Life Insurance
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub12of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xiii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Amount Invested in equity linked notified units of
                              UTI etc.
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub13of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xiv) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Amount paid as tution fee to any educational
                              institue for any two children
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub14of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xv) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Investment in notified share, bonds, units of
                              U.T.I or mutual fund
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub15of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xvi) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Subscription to bonds of NABARD
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub16of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xvii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Terms deposit with banks of atleast five year
                              period
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub17of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xviii) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Five year terms deposit with post office time
                              deposit rules 1981 & deposit in an account under
                              the senior citizen having scheme rules 2004
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub18of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xix) </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Any other saving covered under U/S 80-C
                            </td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.sub19of11}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: "2px 2px" }}> (xx)</td>
                            <td style={{ padding: "2px 2px" }}> TOTAL</td>
                            <td style={{ padding: "2px 2px" }}>
                              {" "}
                              Rs.{values.DeductionU}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Income under the head salary (4-5-6-7)
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.headSal}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Income from other sources
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.incomeOS}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Gross total income (8+9)
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.gti}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Deduction U/S 80-C for savings(Qualifying amount)
                    </td>
                    <td style={{ padding: "2px 2px" }}>
                      Rs.{values.DeductionU}
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Deduction U/S 80CCD (1B) in respect of deposit in national
                      pension scheme upto max.50,000
                    </td>
                    <td style={{ padding: "2px 2px" }}>
                      Rs.{values.DeductionUS80CCD}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Deduction U/S 80CCD2 NPS employer's share
                    </td>
                    <td style={{ padding: "2px 2px" }}>
                      Rs.{values.DeductionUS80CCD2}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      TOTAL TAXABLE INCOME (10-11-12-13)
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.totalti}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      INCOME TAX (OLD REGIME)
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.taxor}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Tax rebate u/s 87/A in case Resident Individual having
                      total taxable income upto Rs. 5 lakhs upto max of Rs.
                      12,500
                    </td>
                    <td style={{ padding: "2px 2px" }}>
                      Rs.{values.TaxRebateUS87A}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Add health and eductaion cess 4% after allowing rebate u/s
                      86 and relief u/s 89/1
                    </td>
                    <td style={{ padding: "2px 2px" }}>
                      Rs.{values.healthandeductaion}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Total Income Tax Payable
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.titp}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Less already deducted tax during the year (TDS)
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.tds}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "2px 2px" }}></td>
                    <td style={{ padding: "2px 2px" }}>
                      Balance income tax to be paid
                    </td>
                    <td style={{ padding: "2px 2px" }}>Rs.{values.tax}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handlePrint} className="btn btn-primary">
        Print your form
      </button>
    </>
  );
}
