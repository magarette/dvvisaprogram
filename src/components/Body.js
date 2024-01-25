import React from "react";

import Form from "./Form";

function Body() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Welcome to Bowsman Travel Consult</h1>
          <p>
            We help Nationals from African countries with expertise in the
            fileds of Electrical engineering, Construction,Auto mechanic, Art,
            Technology and many other fields, get the opportunity to work in
            various western and Arab countries with free visa grants and access
            to working visa
          </p>
          <h3>Terms of operations</h3>
          <p>
            Applicants will be allowed access to the visa with no charges but on
            the conditions they will be responsible for their flight ticket and
            other expenses that will come along side the entire
            process.Applicant is expected to have the following requirements to
            qualify for this program.
          </p>
          <ul>
            <li>Skill in of the stated fields mentioned</li>
            <li>No criminal record</li>
            <li>Valid National Passport</li>
            <li>NAtional Identification Card</li>
            <li>Valid medical report issues within 30days or less</li>
            <li>be aable to speak and understand atleast English</li>
          </ul>
        </div>
        <div className="detail">
          <Form />
        </div>
      </div>
    </>
  );
}

export default Body;
