import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carouselhome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d--block w-100"
          src="./Slide_1.jpeg"
          alt="“To forget how to dig the earth and to tend the soil is to forget ourselves.” -Mahatma Gandhi"
        />
        <Carousel.Caption>
          <h3>Farmer</h3>
          <p>“To forget how to dig the earth and to tend the soil is to forget ourselves.” -Mahatma Gandhi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Slide_2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>“Agriculture engenders good sense, and good sense of an excellent kind.” – Joseph Joubert</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Slide_3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
          “The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.” 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselhome;