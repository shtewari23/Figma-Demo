import React from 'react';
import header from './header.png'
import './home.css'
import logo from './logo.png'
import { Link, animateScroll as scroll } from 'react-scroll';
import Profile1 from './profile1.png'
import Profile2 from './profile2.png'
import Profile3 from './profile3.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import icon5 from './icon5.png'
import icon6 from './icon6.png'
import icon7 from './icon7.png'
import About from './about.png'

import Countdown from 'react-countdown-now';
const Home = () =>{
    
    const styles = {
        backgroundImage: `url(${header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '115vh', // Adjust as needed
        width:'auto',
        display: 'flex',
    };
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

    
    <div style={styles}>
        <img src ={logo} className='logo'></img>
        <div className="div-links">
        <Link to="section1" smooth={true} duration={500} className="link">
            Home
        </Link>
        <Link to="section2" smooth={true} duration={500} className='link'>
            Speakers
        </Link>
        <Link to="section3" smooth={true} duration={500} className='link'>
            Contact Us
        </Link>
        <Link to="section2" smooth={true} duration={500} className='link'>
Sponsorship        </Link>
        <Link to="section2" smooth={true} duration={500} className='link'>
            Travel
        </Link>
        <Link to="section2" smooth={true} duration={500} className='link'>
FAQ        </Link>
     <button onCLick='click' className='buy-ticket'>Buy Tickets</button>
     </div>
     <div className='text' id="section1">
        <p className='paragraph'>
        San Francisco

        </p>
        <p className='paragraph'>
        AI Conference!

        </p>
        <p className='paragraph1'>
        Join us for an extraordinary event at the forefront of <br/>
        artificial intelligence innovation.
        </p>
        <div className='profile-div'>
            <img src={Profile1} className='profile-pic'></img>
            <img src={Profile2} className='profile-pic'></img>
            <img src={Profile3} className='profile-pic'></img>
            <div className='skilled-div'>
<p style={ {color:'white',padding:'20px',display:'inline'}}>Skilled Speakers</p>
</div>
        </div>
        <div className='timer-div'>
                <Countdown
                    date={Date.now() + calculateTimeLeft()}
                    renderer={({ days,hours, minutes, seconds, completed }) => {
                        if (completed) {
                            return <Completionist />;
                        } else {
                            return (
                                <div>
                                       <div className='timer-div2'>
                                        <p className='timer-paragraph'>{days}<br/><span style={{fontSize:'10px'}}>DAYS</span></p> 
                                    </div>
                                     <div className='timer-div2'>  <p className='timer-paragraph'>{hours}<br/><span style={{fontSize:'10px'}}>HOURS</span></p> 
                                    </div>
                                    <div className='timer-div2'>  <p className='timer-paragraph'>{minutes}<br/><span style={{fontSize:'10px'}}>MINUTES</span></p> 
                                    </div>
                                    <div className='timer-div2'>  <p className='timer-paragraph'>{seconds}<br/><span style={{fontSize:'10px'}}>SECONDS</span></p> 
                                    </div>
                                    </div>
                            );
                        }
                    }}
                />
                            <button onCLick='click' className='button1'><span style={{color: '#000014',
fontFamily: 'Mazzard',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: '34px', /* 242.857% */
textTransform: 'uppercase' }}>Buy Tickets</span></button>
                            <button onCLick='click' className='button2'><span style={{color: '#FFF',
fontFamily: 'Mazzard',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: '34px', /* 242.857% */
textTransform: 'uppercase' }}>Read More</span></button>



            </div>
            <div className='register-button'>
                <p className='register-paragraph'>Join us at 7th San Francisco AI Conference! July 5-9 2018. </p>
         </div>

     </div>

     <div className='icons-div'>
        <img src={icon1} className='icon'></img>
        <img src={icon2} className='icon'></img>
        <img src={icon3} className='icon'></img>
        <img src={icon4} className='icon'></img>
        <img src={icon5} className='icon'></img>
        <img src={icon6} className='icon'></img>
        <img src={icon7} className='icon'></img>






     </div>
     <div className='about'>
        <div className='about1'>
<p className='about-paragraph'>
    Welcome to<br/>
    <span className='about-1'>
  San Francisco
</span><br/>

    <span className='about-2'><br/>
    AI Conference!
    </span>
    </p>
    <img src ={About} style={{height:'460px',width:'524px'}}></img>
        </div>
        <div className='about2'>

            <p className='about-2-paragraph'>

            Join us for an extraordinary event at the forefront of artificial intelligence innovation. Founded by a passionate group of technologists and engineers, the San Francisco AI Conference is the ultimate gathering for those eager to explore the limitless potential of AI. Prepare to be captivated by thought-provoking discussions, enlightening presentations, and unrivaled networking opportunities.<br/>
 <br/>
At the San Francisco AI Conference, we go beyond the ordinary. Our mission is to delve into AI topics that have yet to be thoroughly explored. Join us as we uncover the groundbreaking impacts of AI across various industries and sectors. From technical innovation to the realms of art, music, criminal justice, immigration, and countless others, we'll shed light on the limitless possibilities that AI holds for the future.<br/>
<br/>
 <b>
What sets us apart are the prestigious and world-renowned speakers who will grace our stage. These luminaries, experts in their respective fields, will share their insights, experiences, and visions for the future of AI. Be prepared to be inspired, challenged, and enlightened as they take you on an extraordinary journey.
        </b>    </p>
        </div>
     </div>
            
     </div>
);
}
export default Home