import React from "react";
import { Link } from 'react-router-dom';
import './styles.css'



export default function Menu() {


  return (
    <div className="menu-container">
      <Link to="/"> Home </Link>
      <Link to="/About"> About </Link>
      <Link to="/Dashboard"> Dashboard </Link>
      <Link to="/peopleList"> People </Link>
      <Link to="/ClassList"> Class List </Link>
      <Link to="/GitHubProfile"> Git Hub </Link>
    </div>
  )
}


// com sintaxe de classes seria assim: 
// export default class Menu extends React.Component {
//   render() {
//     return (
//       <div>
//         <Link to="/"> Home </Link>
//         <Link to="/about">About</Link>
//       </div>
//     );
//   }
// }