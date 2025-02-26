import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav >
            <ul>
                <li><NavLink to="/"><i class="fa-solid fa-house"></i>Home</NavLink></li>
                <li><NavLink to="/chisiamo"><i class="fa-solid fa-users-between-lines"></i>Chi siamo</NavLink></li>
                <li><NavLink to="/contacts"><i class="fa-solid fa-address-card"></i>contatti</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;