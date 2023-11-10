import React from "react";
import './Speaker.css'
import SpeakerHeader from './SpeakerBackground.png'
import person1 from './person1.png'
import person2 from './person2.png'
import person3 from './person3.png'
import person4 from './person4.png'
import person5 from './person5.png'
import person6 from './person6.png'

const Speaker=()=>{


    return(
        <div>
<div className="speaker-header" id="section2">
<img src ={SpeakerHeader} className="rounded-image"></img>
<div className="speaker-par">
<p className="para">Leaders and Experts <br/>
<span className="span1">Featured Speakers</span> <br/>
<span className="span2">Anticipate a dynamic assembly of visionary thinkers and seasoned specialists, who will generously impart their wisdom, perspectives, and prognostications in the field.</span>
</p>

</div>

</div>
<div className="speaker-icon">
    <div className="icon1">
    <img src ={person1} className="person" ></img>
    <br/>
   <span className="name"> Lorus Ipsum </span>    <br/>

       <span className="designation"> Creative Designer </span>

    </div>
    <div className="icon1">
    <img src ={person2} className="person" ></img>
    <br/>
    <span className="name"> Lorus Ipsum </span>    <br/>

    <span className="designation"> Creative Designer </span>

    </div>
    <div className="icon1">
    <img src ={person3} className="person" ></img>
    <br/>
    <span className="name"> Lorus Ipsum </span>    <br/>

    <span className="designation"> Creative Designer </span>

    </div>
    <div className="icon1">
    <img src ={person4} className="person" ></img>
    <br/>
    <span className="name"> Lorus Ipsum </span>    <br/>

    <span className="designation"> Creative Designer </span>

    </div>
    <div className="icon1">
    <img src ={person5} className="person" ></img>
    <br/>
    <span className="name"> Lorus Ipsum </span>    <br/>

    <span className="designation"> Creative Designer </span>

    </div>
    <div className="icon1">
    <img src ={person6} className="person" ></img>
    <br/>
    <span className="name"> Lorus Ipsum </span>    <br/>

    <span className="designation"> Creative Designer </span>

    </div>


</div>
</div>
    )
}
export default Speaker;