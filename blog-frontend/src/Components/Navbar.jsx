import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    return (
        // <nav className="navbar sticky-top navbar-expand-lg" style={{background:"#FF9209"}}>
        //     <div className="container">
        //         <Link to="/" className="navbar-brand heading">Navbar</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse links" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //                 <NavLink className={({ isActive }) => isActive ? "active_class" : ""+" "+"text-decoration-none"+" "+"nav_link"} to='/'>Home</NavLink>
        //                 <NavLink className={({ isActive }) => isActive ? "active_class" : ""+" "+"text-decoration-none"+" "+"nav_link"} to='/about'>About</NavLink>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar container-fluid sticky-top fw-bold">
            <div className="header">
                <Link to="/" className="navbar-brand heading" style={{color:"#3D0C11"}}>TechVeda</Link>
            </div>
            <div className="navbar-nav links">
                <NavLink className={({ isActive }) => isActive ? "active_class" : "" + " " + "text-decoration-none" + " " + "nav_link"} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active_class" : "" + " " + "text-decoration-none" + " " + "nav_link"} to='/about'>About Us</NavLink>
            </div>
        </nav>
    )
}
export default Navbar