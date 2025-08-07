import './Navbar.css';

const Navbar = () => { 
     
    return (
     <header>
          <nav className="navbar">
               <div className="logo">MyApp</div>
                    <ul className="nav-links">
                         <li><a href="#">Home</a></li>
                         <li><a href="#">About</a></li>
                         <li><a href="#">Projects</a></li>
                         <li><a href="#">Contact</a></li>
                    </ul>
          </nav>
     </header>
    );
}

export default NavBar;