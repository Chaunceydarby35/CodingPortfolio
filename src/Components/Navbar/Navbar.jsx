import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi';
import '../Navbar/Navbar.css';
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState("#home");

    const handleNavigation = (e, target) => {
        e.preventDefault();
        setActive(target);
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav>
            <a href="#home" 
            onClick={(e) => handleNavigation(e, "home")} 
            className={active === "home" ? "active" : ""}>
                <AiOutlineHome />
            </a>
            <a href="#about" 
            onClick={(e) => handleNavigation(e, "about")} 
            className={active === "about" ? "active" : ""}>
                <BiUser />
            </a>
            <a href="#experience"
            onClick={(e) => handleNavigation(e, "experience")} 
            className={active === "experience" ? "active" : ""}>
                <FaLaptopCode />
            </a>
            <a href="#projects"
            onClick={(e) => handleNavigation(e, "projects")} 
            className={active === "projects" ? "active" : ""}>
                <GoChecklist />
            </a>
            <a href="#contact"
            onClick={(e) => handleNavigation(e, "contact")} 
            className={active === "contact" ? "active" : ""}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Navbar;
