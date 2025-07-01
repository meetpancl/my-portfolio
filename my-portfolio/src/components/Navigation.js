import React, { useState, useEffect } from 'react';
import Logo from './Logo_4.png';

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Contact', id: 'contact' }
    ];

    return ( <
        nav className = { `navbar ${isScrolled ? 'scrolled' : ''}` } >
        <
        div className = "nav-container" > { /* Logo */ } <
        div className = "nav-logo"
        onClick = {
            () => scrollToSection('hero') } >
        <
        img src = { Logo }
        alt = "Meet"
        className = "logo-icon" / >
        <
        /div>  

        { /* Desktop Menu */ } <
        ul className = "nav-menu" > {
            navItems.map((item) => ( <
                li key = { item.id }
                className = "nav-item" >
                <
                button className = "nav-link"
                onClick = {
                    () => scrollToSection(item.id) } >
                { item.label } <
                /button> <
                /li>
            ))
        } <
        /ul>

        { /* Mobile Menu Button */ } <
        div className = { `hamburger ${isMobileMenuOpen ? 'active' : ''}` }
        onClick = {
            () => setIsMobileMenuOpen(!isMobileMenuOpen) } >
        <
        span > < /span> <
        span > < /span> <
        span > < /span> <
        /div>

        { /* Mobile Menu */ } <
        div className = { `mobile-menu ${isMobileMenuOpen ? 'active' : ''}` } > {
            navItems.map((item) => ( <
                button key = { item.id }
                className = "mobile-nav-link"
                onClick = {
                    () => scrollToSection(item.id) } >
                { item.label } <
                /button>
            ))
        } <
        /div> <
        /div> <
        /nav>
    );
}

export default Navigation;