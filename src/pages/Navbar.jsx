import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineClose } from 'react-icons/md'
import Logo from '../Image/logo.png'
import { GoThreeBars } from 'react-icons/go'
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";

const Navbar = () => {
    

    
    const items = document.querySelectorAll("ul li");
    items.forEach((item) => {
        item.addEventListener("click", () => {
            document.querySelector("li.active").classList.remove("active");
            item.classList.add("active");
        });
    });

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)


    const [isNavShowing, setIsNavShowing] = useState(false);
    return (
            // <nav>
            //     <div class="nav__container">
            //         <div class="logo">
            //             <img src="https://www.clipartmax.com/png/full/220-2205004_gallery-of-free-logo-maker-design-with-jeta-software-free-3d-logo.png"
            //                 alt="" />
                                
                           
            //         </div>
            //         <div class="nav__link">
            //             <ul>
            //                 <li><a href="#home">Home</a></li>
            //                 <li><a href="#about">About</a></li>
            //                 <li><a href="#contact">Contact</a></li>
            //                 <li className='register'><a  href="#register">Register</a></li>
            //             </ul>
            //         </div>
            //         <div class="burger">
            //             <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            //                 <path
            //                     d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            //             </svg>

            //         </div>
                    
            //     </div>
            // </nav>
            <nav className={color ? 'nav nav-bg' : 'nav'}>
            <div className="container nav__container">
                <div to='/' className='logo'>
                    <img src={Logo} alt="Nav logo" />
                </div>
                <ul className={` nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}   >

                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/plans">Plans</a></li>
                    <li><a href="/TrainersDetails">Trainer</a></li>

               
                  </ul>


                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>

    )
}

export default Navbar