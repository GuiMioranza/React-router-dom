import React from "react";
import './styles.css'
import { useSettings } from '../../Hooks/settings';
import { Link } from 'react-router-dom';


export default function Menu() {
  const { settings } = useSettings();
  const showDashboardMenuItem = settings.find(
    (x) => x.name === 'enableDashboard'
  )?.value;

  return (
    <div className="menu-container">
      <Link to="/"> Home </Link>
      <Link to="/About"> About </Link>
      {showDashboardMenuItem === 'true' && (
        <Link to="/Dashboard"> Dashboard </Link>
      )}
      <Link to="/PeopleList"> People </Link>
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