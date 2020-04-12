import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import axios from 'axios';


class Login extends Component {
    state = {
        user: {
            email: '',
            password: '',
        }
    }

    render (){
        return (
           <div class='ui placeholder segment'>
               <div class="column">
                   <div class="ui form">
                       <div class="field">
                           <label>Email</label>
                           <div class="ui left icon input">
                               <input type="email" name="email" value={this.email} placeholder="user@example.com"/>
                               <i class="user icon"></i>
                           </div>
                       </div>
                       <div class="field">
                           <label>Password</label>
                           <div class="ui left icon input">
                               <input type="password" name="password" value={this.password} placeholder="password"/>
                               <i class="lock icon"></i>
                           </div>
                       </div>
                       <div class="ui blue submit button">Login</div>
                   </div>
               </div>
           </div>
        );
    } 
}
export default Login;