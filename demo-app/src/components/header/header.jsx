import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
<div>
    Welcome guys
    <hr></hr>
    <ul>
            <li> <Link to = '/weather' >Weather</Link></li>
            <li><Link to="/content">ReactProfiles</Link></li>
    </ul>
</div>

        );
    }
}
 
export default Header;