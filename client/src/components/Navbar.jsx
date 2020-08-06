import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
             {/* <!-- Navigation Bar --> */}

{/* <!-- Changed nav bar color in css using className="bg-light" --> */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">

{/* <!-- Clicking name will take user to About Me page --> */}
<Link className="navbar-brand heading" to="/">Christina C. Starr</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto">

{/* <!-- Named and linked About Me Page --> */}
    <li className="nav-item active heading">
      <Link className="nav-link" to="/">About Me<span className="sr-only">(current)</span></Link>
    </li>
    
{/* <!-- Named and linked Portfolio Page --> */}
    <li className="nav-item active heading">
    <Link className="nav-link" to="portfolio.html">Portfolio<span className="sr-only">(current)</span></Link>
    </li>

{/* <!-- Named and linked Contact Page --> */}
   <li className="nav-item active heading">
   <Link className="nav-link" to="/contact">Contact<span className="sr-only">(current)</span></Link>
  </li>
  
     {/* <!-- Named and linked Resume Page --> */}
     <li className="nav-item active heading">
      <Link className="nav-link" to="resume.html">Resume<span className="sr-only">(current)</span></Link>
     </li>
 </ul>
</div>
</nav>
        </div>
    );
};

export default Navbar;