import React, { Component } from 'react';
import './comment.css';

export default class Comment extends Component {
	render() {
        return(
            <div>                           
                <div className ='box'>
                    <div className='message'>
                        <span className='talker'>Corgi </span>
                        <span className='text'>'s comment to </span>
                        <span className='talker'>IM camp website: </span>
                        <span className='text'> Good</span>
                    </div>
                </div>
            </div>
        )
    }
}
// {/* 
//                 <form class = "send_msg" action="" method="post">
//                 <tabel>
//                     <td>
//                         {% if not request.GET %}
//                             <span>評論作品：</span>
//                             <span><select name="choose_work">
                            
//                             {% for w in works %}
//                                 <option value={{w.id}} name = "work">{{w.name}}</option>

//                             {% endfor %}
//                             </select></span><br>
//                         {% endif %}
                        
//                     </td>
//                     <!-- <td>
//                         <tr><label for="author">留言者：</label>
//                         <input id="talker" type="text" name="author"><br></tr>
//                     </td> -->

//                     <td>
//                         <tr><label for="comment">評論：&nbsp &nbsp</label>                    
//                         <input id = "message" type="text" name="comment"> </input></tr>
//                     <input class="leave" type="submit" value="留言">
//                     </td>
//                 </table>
//                 </form> */}


//                 {/* <Footer /> */}
//                 {/* <Switch>
//                     <Redirect from="/home" to="/" />
//                 </Switch> */}
            


