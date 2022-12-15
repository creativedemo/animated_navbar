import React from 'react'
import { Link } from 'react-router-dom'
import "../../Components/Common/Header.css"


const Header = () => {

  
        const menutoggle = () =>{
            toggleBodyClass("menu-active");
        }
      
        function toggleBodyClass(className) {
          document.body.classList.toggle(className);
        }
  
    return (
        <>
            <nav className="navbar">
                <div className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/2/23/AS_sample_logo.png" alt="LOGO" /></div>
                <div className="push-left">
                    <button id="menu-toggler" data-className="menu-active" className="hamburger" onClick={menutoggle}>
                        <span className="hamburger-line hamburger-line-top"></span>
                        <span className="hamburger-line hamburger-line-middle"></span>
                        <span className="hamburger-line hamburger-line-bottom"></span>
                    </button>


                    <ul id="primary-menu" className="menu nav-menu">
                        <li className="menu-item current-menu-item"><Link className="nav__link" to="#">Home</Link></li>
                        <li className="menu-item dropdown"><Link className="nav__link" to="#">About</Link>
                            

                        </li>
                        <li className="menu-item dropdown"><Link className="nav__link" to="#">Contact</Link>
                            
                        </li>
                        <li className="menu-item "><a className="nav__link" to="#">Blog</a>

                        </li>
                    </ul>


                </div>
            </nav>

        </>
    )
}

export default Header