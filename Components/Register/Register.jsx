import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h1 class="text-success">Welcome ! Farmer </h1>
      <br></br>
      <MDBInput wrapperClass='mb-4' label='First Name' id='form2' type='test'/>
      <MDBInput wrapperClass='mb-4' label='Middle Name' id='form2' type='test'/>
      <MDBInput wrapperClass='mb-4' label='Last Name' id='form2' type='test'/>
      <MDBInput wrapperClass='mb-4' label='Adharcard No' id='form1' type='test'/>
      <MDBInput wrapperClass='mb-4' label='Phone no.' id='form1' type='test'/>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Passward' id='form1' type='password'/>
      <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'/>
      <MDBInput wrapperClass='mb-4' label=' Address' id='form1' type='test'/>
      <MDBInput wrapperClass='mb-4' label=' Country' id='form1' type='test'/>
      <MDBInput wrapperClass='mb-4' label='City' id='form1' type='test'/>
      <MDBInput wrapperClass='mb-4' label='State' id='form1' type='test'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Accepting Our Terms And Condition' />
        <a href="!#">Need Help?</a>
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>
    </MDBContainer>
  );
}

export default Register;