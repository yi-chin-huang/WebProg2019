import React, { Component } from 'react';

class Footer extends Component {
    render() 
    {
      return (
		<footer>
			<div id="footer">
                <div class="contact">
                    <p>Contact me:</p>
                    {/* <i class="fab fa-facebook-square"></i>  <a href="https://www.facebook.com/yichin0226">黃意芹</a><br/> */}
                    <i class="fab fa-instagram"></i>  <a href="https://www.instagram.com/celery_26/">celery_26</a><br/>
                    <i class="far fa-envelope"></i>  <a href="b05705001@ntu.edu.tw">b05705001@ntu.edu.tw</a> 

                </div>
			</div>
        	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>

		</footer>

      
      )
    }

}

export default Footer;