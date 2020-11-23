import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import m1 from '../assets/images/m1.png'
import m2 from '../assets/images/m2.png'
import m3 from '../assets/images/m3.png'
import m4 from '../assets/images/m4.png'
import m5 from '../assets/images/m5.png'
import m6 from '../assets/images/m6.png'
import m7 from '../assets/images/m7.png'
import m8 from '../assets/images/m8.png'
import m9 from '../assets/images/m9.png'

class CustomCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
      
    render() { 
        console.log(this.state)
        return ( 
                <Carousel>
                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m1}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m2}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m3}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m4}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m5}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m6}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m7}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m8}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>
                    <img
                        // className="d-block"
                        src={m9}
                        alt="First slide"
                        style={{width:300,}}
                    />
                    <Carousel.Caption>
                        <p></p>
                        <a className="btn btn-outline-danger" href='https://play.google.com/store/apps/details?id=com.qoongame' target='_blank' >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>
     
                
                </Carousel>
        
         );
    }
}
 
export default CustomCarousel;


// <Carousel>
// <Carousel.Item interval={1000}>
//     <img
//     className="d-block w-100"
//     src="holder.js/800x400?text=First slide&bg=373940"
//     alt="First slide"
//     />
//     <Carousel.Caption>
//     <h3>First slide label</h3>
//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
// </Carousel.Item>

// </Carousel>