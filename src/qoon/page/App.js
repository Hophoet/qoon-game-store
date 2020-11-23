import React, { Component } from 'react';
import '../assets/css/splash.css';
import '../assets/css/row.css'
import '../assets/css/carousel.css'
import 'bootstrap/dist/css/bootstrap.css'

import Splash from './Splash'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Splash/>
        );
    }
}
 
export default App;