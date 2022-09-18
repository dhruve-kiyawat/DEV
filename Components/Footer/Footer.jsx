import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footerhome() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About us</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Community
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  What we offer?
                </a>
              </li>
               
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Contact us</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='https://www.facebook.com/dhruve.kiyawat' className='text-dark'>
                  Facebook
              
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/dhruv_kiyawat/' className='text-dark'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/dhruve-kiyawat-548947222' className='text-dark'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='https://twitter.com/DhruveKiyawat?t=3N-8gx5U-0QjNgXBjadNkg&s=09' className='text-dark'>
                  Twitter
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Quick links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Blogs
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Videos
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Our Story
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Contribute</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                 Write a Blog
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Internship  
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Job offers
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Experience
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}