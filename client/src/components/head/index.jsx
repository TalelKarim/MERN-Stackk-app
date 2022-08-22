import React from 'react'
import {Carousel} from 'react-bootstrap';

export default function Head() {
  return (
    <div>
  <Carousel>
      <Carousel.Item>
        <img 
        style={{
          height:500
        }}  
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          style={{
            height:500
          }}  
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1519041371278-c072196d967c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height:500
          }}      
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1496282061992-d6a3994128a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1225&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height:500
          }}      
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1579364046732-c21c2177730d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>    </div>
  )
}
