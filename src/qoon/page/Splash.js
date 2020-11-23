import React, { Component } from 'react';
import icon from '../assets/images/qoon.png'
import mockup from '../assets/images/mockup.png'
import m1 from '../assets/images/m1.png'
import m2 from '../assets/images/m2.png'
import m3 from '../assets/images/m3.png'
import m4 from '../assets/images/m4.png'
import m5 from '../assets/images/m5.png'
import m6 from '../assets/images/m6.png'
import m7 from '../assets/images/m7.png'
import m8 from '../assets/images/m8.png'
import m9 from '../assets/images/m9.png'

import Row from '../components/Row'
import Carousel from '../components/Carousel'



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            mockups:[m1, m2, m3, m4, m5, m6, m7, m8, m9]
        }
    }
    _pickOneMockup = () => {
        // setInterval(() => {
        //     console.log(mockup)
        // }, 5000)
    }
    componentDidMount(){
        this._pickOneMockup()
    }
    render() { 
        return (  
            <div className='splash_container'>
                <div className='splash_container__header'>
                    <img src={icon}/>
                    <h1 className=''> <strong>QO<span>ON</span> </strong>Game</h1>
                    <h3>train your <span>brain</span>  by playing</h3>
                  
                    {/* <div className='mockup_container'>
                        <img className='mockup' src={mockup}/>
                        <img className='mockup' src={m7}/>
                    </div> */}
                     <div className="home__container">
                        <Carousel/>
                    </div>
                    
                    {/* <div className='playbutton_container'>
                        <a  alt='download this great game' href='#' className='playbutton'>Download</a>
                    </div> */}
                </div>


                <div className='splash_container__footer'>
                    <Row/>
                </div>

            </div>
        );
    }
}
 
export default Home;