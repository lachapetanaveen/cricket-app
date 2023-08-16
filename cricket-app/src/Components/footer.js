import React, {  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlay, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    return ( 


<footer  class="footer-distributed footer items-center justify-content-center">
<div className='row'>
    <div className='col-md-4'>
        <img style={{width:'20%', height:'80px', float:'left',borderRadius:'50%',marginRight:'1500px',}} src={require('../Bcci.jpeg')} />
    </div>
    <div style={{marginTop:'24px',}} className='col-md-4 d-flex justify-content-center'>
    <p style={{fontSize:'14px',color:'white',fontWeight:'bold'}}>©Copyright 2023. BCCI.COM. All Rights Reserved</p>
    </div>
    <div style={{marginTop:'24px',}} className='col-md-4 d-flex justify-content-end'>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:'20px',}}>
            <FontAwesomeIcon color='white'  className='iconsize'  icon={faFacebook} />
            </div>
            <div style={{marginLeft:'20px'}}>
            <FontAwesomeIcon color='white' className='iconsize'  icon={faInstagram} />
            </div>
            <div style={{marginLeft:'20px'}}>
            <FontAwesomeIcon color='white' className='iconsize'  icon={faGooglePlay} />
            </div>
            <div style={{marginLeft:'20px'}}>
            <FontAwesomeIcon color='white' className='iconsize'  icon={faTwitter} />
            </div>
        </div>
    </div>
</div>


</footer>
        
      
     );
}
 
export default Footer;