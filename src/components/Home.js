import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <><div>
      <Carousel>
        <Carousel.Item style={{maxHeight: "500px"}}>
          <img
           className="d-block img-fluid"
            src="https://images7.alphacoders.com/592/592678.jpg"
            alt="First slide"
            />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{maxHeight: "500px"}}>
          <img
            className="d-block img-fluid"
            src="https://fondosmil.com/fondo/14712.jpg"
            alt="Second slide" 
            
            />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{maxHeight: "500px"}}>
          <img
            className="d-block img-fluid"
            src="https://c4.wallpaperflare.com/wallpaper/108/704/1021/pokemon-charizard-anime-wallpaper-preview.jpg"
            alt="Third slide"
            style={{width:"100%"}}
              />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div><div>
        <h1>Hola</h1>
      </div></>
  );
}

export default UncontrolledExample;