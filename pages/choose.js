import Head from 'next/head'
import Image from 'next/image'
import Navbarhome from '../Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselhome from '../Components/Carousel/Carousel';
import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Loginhome from '../Components/Login/Login';
import { GetInTouch } from '../Components/Contact/Contact';
import { ButtonMenu } from '../Components/Buttons/Button';
import Footerhome from '../Components/Footer/Footer';

export default function Choose() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbarhome />
      <ButtonMenu />
      <Footerhome />
      {/* <GetInTouch /> */}
    </>
  )
}