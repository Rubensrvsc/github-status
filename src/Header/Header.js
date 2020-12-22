import React from 'react';
import './Header.css'



class Header extends React.Component {

  constructor(props){
    super(props);
    

  }

  
render() {
  
  return (
    <div>
    
    <nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li class="active"><a href="#">About</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
      </div>
  );
}
}

export default Header;