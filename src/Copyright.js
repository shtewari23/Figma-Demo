import React from "react";
import SpeakerHeader from './SpeakerBackground.png'
import './Copyright.css'
const Copyright=()=>{


    return (
        

         <div className="copyright-header" id="section2">
        
        <img src ={SpeakerHeader} className="section-image"></img>
        <div className='copyright-div'>
<p className="copyright-p1">Don't miss out on  <br/>
<span className="copy-p1">this extraordinary event!</span> <br/>
<span className="copy-p2">Register now to secure your spot at the San Francisco AI Conference. Experience the thrill of being part of<br/> a groundbreaking conference that pushes the boundaries of AI exploration. Together, let's unlock the <br/>limitless possibilities of artificial intelligence.</span>
</p>

</div>
</div>

    )
}
export default Copyright