import React from 'react';
import ProfilePhoto from './myself.jpg'

function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return ( <
        section className = "hero-section" >
        <
        img src = { ProfilePhoto }
        alt = "Meet"
        className = 'profile-photo' / >
        <
        h1 > Meet Panchal < /h1> <
        p > Turning Ideas into Interactive Reality < /p> <
        button className = "cta-button"
        onClick = { scrollToProjects } >
        View My Work <
        /button> <
        /section>
    );
}

export default Hero;