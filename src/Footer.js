import React from "react";
import './Footer.css'
import FooterImage from './footer.png'
import Countdown from 'react-countdown-now';
import Logo from './logo.png'
const Footer=()=>{
    const initialTime = {
        days: 32,
        hours: 22,
        minutes: 32,
        seconds: 0,
    };

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const targetDate = now + initialTime.days * 24 * 60 * 60 * 1000 +
            initialTime.hours * 60 * 60 * 1000 + initialTime.minutes * 60 * 1000;

        return targetDate - now;
    };
    const Completionist = () => <span>Timer Completed!</span>;

    return (
        

         <div className="footer" id="section3">
        
        <img src ={FooterImage} className="footer-image"></img>
        <div className="main-div">
        <div className='footer-div'>
<p className="footer-p1">Count Every  <br/>
<span className="footer-span">Second Until Event</span>
</p>
</div>
<div className='timer-footer-div'>
                <Countdown
                    date={Date.now() + calculateTimeLeft()}
                    renderer={({ days,hours, minutes, seconds, completed }) => {
                        if (completed) {
                            return <Completionist />;
                        } else {
                            return (
                                <div>
                                       <div className='timer-footer-div2'>
                                        <p className='timer-footer-paragraph'>{days}<br/><span style={{fontSize:'10px'}}>DAYS</span></p> 
                                    </div>
                                     <div className='timer-footer-div2'>  <p className='timer-footer-paragraph'>{hours}<br/><span style={{fontSize:'10px'}}>HOURS</span></p> 
                                    </div>
                                    <div className='timer-footer-div2'>  <p className='timer-footer-paragraph'>{minutes}<br/><span style={{fontSize:'10px'}}>MINUTES</span></p> 
                                    </div>
                                    <div className='timer-footer-div2'>  <p className='timer-footer-paragraph'>{seconds}<br/><span style={{fontSize:'10px'}}>SECONDS</span></p> 
                                    </div>
                                    </div>
                            );
                        }
                    }}
                />
                </div>

</div>
<div className="bottom-div">
<img src ={Logo}></img>
<p style ={{color: '#FFF',
fontFamily: 'Mazzard',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: '400',
lineHeight: '24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div className="bottom-div-1">
    <p style= {{color: '#8D36DF',
fontFamily: 'Mazzard',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '30px',
textTransform: 'uppercase' }}>Quick Links</p><br/>
<p style ={{color: '#FFF',
fontFamily: 'Mazzard',
fontSize: '18px',
fontStyle: 'normal',
fontWeight: '400',
lineHeight: '20px',
 marginTop: '-11px'}} >Home <br/><br/>
Speakers<br/><br/>
Sponsorship <br/><br/>
Travel 
</p>
    
</div>

<div className="bottom-div-2">
    <p style={{color: '#8D36DF' , fontWeight: '600',fontSize: '24px',
    textTransform:'uppercase',

lineHeight: '30px',}} >Contact Us
    </p>
    <p>27 Division St, San Francisco,
SF 94016, USA <br/><br/>+1 800 123 456 789</p>
</div>
</div>

    )
}
export default Footer