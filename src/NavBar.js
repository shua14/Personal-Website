import { Link } from 'react-router-dom'
import logo from './images/Tranparent_JL_logo.png'
import "./NavBar.css"

export default function NavBar() {
    return(
        <>
            <div className="navbar">
                <div className="logo-and-name">
                    <img className='logo' src={logo} alt="Logo"></img>
                    <div className="name">Jay Luxenberg</div>
                </div>
            </div>
        </>
    );
}