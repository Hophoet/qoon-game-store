import React, { Component } from 'react';


class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className='row_container'>
                <h3>What is QOON ?</h3>
                <p><strong>QOON</strong>  is a new <strong>game</strong> that allowed you to take a very reflexive time playing to memorize numbers to <strong>grow</strong> your <strong>brain</strong> capacity to  memorize</p>
                {/* <h3>How to play QOON game works?</h3>
                <ul>
                    <li>you must <strong>memorize</strong> some <strong>random numbers</strong></li>
                    <li>you must now set numbers that you memorize previously in order</li>
                    <li>you will now click on the <strong>check button</strong> for checking the <strong>result</strong></li>
                    <li>you will finaly get you <strong>score</strong> (ex: 2/4 that mind that you remenber correctly 2 on 4) </li>
                </ul> */}

                <h3>Developer_</h3>

                <p>
                    <a className="developer" rel="noopener noreferrer" href='https://www.instagram.com/hophoet/' target='_blank'>@HOPHOET</a>
                    , is a sofware developer very pationate about building helpful web and mobile software</p>
               

            </div>
            
        );
    }
}
 
export default Row;