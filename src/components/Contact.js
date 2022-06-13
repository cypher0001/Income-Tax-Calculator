import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="table-users" style= {{boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",backgroundColor:"white"}}>
   <div className="header" >Tax Helplines</div>
   
   <table cellSpacing="0">
     <tbody>
         {/* <tr>
         <th>Picture</th>
         <th>Name</th>
         <th>Email</th>
         <th>Phone</th>
         
      </tr> */}

      <tr>
         <td><img src="https://e7.pngegg.com/pngimages/564/205/png-clipart-question-mark-questions-photography-presentation.png"width="140px" height="120px" alt="" /></td>
         <td><b>Aaykar Sampark Kendra (ASK)</b></td>
         <td>Income tax/PAN/TAN

General Queries</td>
         <td><i className="fas fa-phone-alt"></i>18001801961/1961</td>
         
      </tr>

      <tr>
         <td><img src="https://5.imimg.com/data5/LJ/DH/MY-54036343/pan-card-agency-500x500.png"width="140px" height="120px" alt="" /></td>
         <td><b>PAN/TAN</b></td>
         <td>  
PAN/TAN updation<br></br>
www.tin-nsdl.com</td>
         <td><i className="fas fa-phone-alt"></i>+912027218080</td>
         
      </tr>

      <tr>
         <td><img src="https://www.taxmanager.in/images/icon1.svg" width="140px" height="120px" alt="" /></td>
         <td><b>e-filing and Centralized Processing Center</b></td>
         <td>e-Filing of Income Tax Return or Forms and other value added services & Intimation, Rectification, Refund and other Income Tax Processing Related Queries
<ul>
   <li>
      Working Hours (Call centre) 08 AM to 08 PM - Monday to Friday</li>
      <li>Working Hours (Call centre) 09 AM to 06 PM - (On Saturdays)</li>
<li><a href= "https://www.incometax.gov.in/" target="_blank">https://www.incometax.gov.in/</a></li></ul></td>
         <td><i className="fas fa-phone-alt"></i>1800 103 0025<br/>
         <i className="fas fa-phone-alt"></i>1800 419 0025<br/>
         <i className="fas fa-phone-alt"></i>+91-80-46122000<br/>
         <i className="fas fa-phone-alt"></i> +91-80-61464700</td>
       
      </tr>
      
      <tr>
         <td><img src="https://www.stocksmantra.in/wp-content/uploads/2021/11/image-1.jpeg" width="140px" height="120px" alt="" /></td>
         <td><b>TDS Centralised Processing Centre (TRACES)</b></td>
         <td><ul><li>Form 26AS</li>

<li>Form 16</li>

<li>AaykarBhawan, Sector-3, Vaishali, Ghaziabad, U.P. - 201010</li>
<li><a href="www.tdscpc.gov.in" target="_blank">www.tdscpc.gov.in</a></li></ul></td>
         <td><i className="fas fa-phone-alt"></i>18001030344<br/>
         <i className="fas fa-phone-alt"></i>+911204814600<br/>
       <a href="contactus@tdscpc.gov.in" target="_blank">contactus@tdscpc.gov.in</a></td>
         
      </tr>
      <tr colSpan="3">
         <td><img src="https://office.incometaxindia.gov.in/kanpur/PublishingImages/uttrakhand-uttar-pradesh.jpg"width="140px" height="120px" alt="" /></td>
         <td><b>Grievance Redressal in Principal CCIT Region</b></td>
         <td style={{fontSize:"16px"}}>Region wise Contact No. of Officers for receiving grievance petition of the taxpayer<br/>
         <a className="btn btn-primary my-3" href="https://incometaxindia.gov.in/Pages/tax-helplines/regional-grievances.aspx" target="_blank">Click here to view the details</a>
         </td>
       
      </tr>
      
      <tr>
         <td><img src="https://taxindiaonline.com/RC2/image/stories/mbuzz/ask.jpg"width="140px" height="120px" alt="" /></td>
         <td><b>Aaykar Seva Kendra</b></td>
         <td><ul><li>Tha Aaykar Seva Kendra represents a single window system for registration of all taxpayer application/return.</li>
<li>Application could be filed in person as well as through a drop box facility.</li>
<li>System generated unique acknowledement number issued on the spot.</li>
<li>Used for monitoring the status of application and returns.</li>
<li>Information regarding resolution of requested services could be obtained from the ASK</li></ul>
<a className="btn btn-primary my-3" href="https://incometaxindia.gov.in/Documents/aayakar-seva-kendra-contact-details-03222010.pdf" target="_blank">Click here to view the list of Aaykar Seva Kendra</a>
</td>
      
         
      </tr>
      <tr>
         <td><img src="https://1.bp.blogspot.com/-GumAzxXgQLY/YHg1jWG1ciI/AAAAAAAAACA/Nhr3vKcysS4nSN_h7f5nyZmFU_6yi3TjwCLcBGAsYHQ/s2048/govt.jpg"width="140px" height="120px" alt="" /></td>
         <td><b>Centralized Public Grievance Redress and Monitoring System</b></td>
         <td>Salient Features of CPGRAMS 5.0
<ul><li>Complainant can upload a relevant document</li>
<li>Monitoring dash board for the senior officers</li>
<li>Grievance Monitor to have holistic view</li>
<li>Enhanced Operability</li>
<li>Provision to forward multiple grievance to a single department in one stroke</li>
<li>Provision to forward grievance to multiple departments</li></ul>
<a className="btn btn-primary my-3" href="https://pgportal.gov.in/" target="_blank">Click here to register Grievance</a>
</td>
       
         
      </tr>
      </tbody>
   </table>
</div>
    </>
  )
}
