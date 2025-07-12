import React, { useState } from 'react';

function Projects() {
    // This is React STATE - data that can change
    const [projects] = useState([{
            id: 1,
            title: "Portfolio Website",
            description: "A responsive personal portfolio built with React, showcasing my journey into full-stack development.",
            technologies: ["React", "CSS3", "JavaScript"],
            image: "🌐",
            github: "https://github.com/meetpancl/my-portfolio.git",
            live: "https://ff0hl324-3000.inc1.devtunnels.ms/"
        },
        {
            id: 2,
            title: "Jewelry E-Commerce Site",
            description: "A fully functional eCommerce website built in WordPress during my internship with APFP Universal Solutions LLP.",
            technologies: ["WordPress", "WooCommerce", "Elementor"],
            image: "💎",
            github: "#",
            live: "https://jewelbyunnati.com/"
        },
        {
            id: 3,
            title: "UI/UX Dashboard",
            description: "Modern dashboard design created in Figma with a focus on user experience and clean interface design.",
            technologies: ["Figma", "UI/UX", "Design"],
            image: "🎨",
            github: "#",
            live: "#"
        },
        {
            id: 4,
            title: "Event Management System",
            description: "A web application to handle college event registrations and announcements using PHP and MySQL.",
            technologies: ["PHP", "MySQL", "Bootstrap"],
            image: "📅",
            github: "https://github.com/meetpanchal/event-management-system",
            live: "#"
        },
        {
            id: 5,
            title: "ToDo App (React + Firebase)",
            description: "Simple and clean ToDo web app with real-time database and authentication using Firebase.",
            technologies: ["React", "Firebase", "TailwindCSS"],
            image: "✅",
            github: "https://github.com/meetpanchal/todo-app",
            live: "https://meet-todo.firebaseapp.com"
        }
    ]);

    const [filter, setFilter] = useState('all');

    // Filter projects based on selected technology
    const filteredProjects = filter === 'all' ?
        projects :
        projects.filter(project =>
            project.technologies.some(tech =>
                tech.toLowerCase().includes(filter.toLowerCase())
            )
        );

    return ( <
        section className = "projects-section" >
        <
        div className = "container" >
        <
        h2 > My Projects < /h2> <
        p > Here are some projects I 've worked on</p>

        { /* Filter Buttons */ } <
        div className = "filter-buttons" >
        <
        button className = { filter === 'all' ? 'active' : '' }
        onClick = {
            () => setFilter('all')
        } >
        All <
        /button> <
        button className = { filter === 'react' ? 'active' : '' }
        onClick = {
            () => setFilter('react')
        } >
        React <
        /button> <
        button className = { filter === 'figma' ? 'active' : '' }
        onClick = {
            () => setFilter('figma')
        } >
        Design <
        /button> <
        button className = { filter === 'wordpress' ? 'active' : '' }
        onClick = {
            () => setFilter('wordpress')
        } >
        WordPress <
        /button> < /
        div >

        { /* Projects Grid */ } <
        div className = "projects-grid" > {
            filteredProjects.map(project => ( <
                ProjectCard key = { project.id }
                project = { project }
                />
            ))
        } <
        /div> < /
        div > <
        /section>
    );
}

// Separate component for each project card
function ProjectCard({ project }) {
    return ( <
        div className = "project-card" >
        <
        div className = "project-icon" > { project.image } < /div> <
        h3 > { project.title } < /h3> <
        p > { project.description } < /p> <
        div className = "tech-stack" > {
            project.technologies.map((tech, index) => ( <
                span key = { index }
                className = "tech-tag" > { tech } < /span>
            ))
        } <
        /div> <
        div className = "project-links" >
        <
        a href = { project.github }
        className = "project-link" > GitHub < /a> <
        a href = { project.live }
        className = "project-link primary" > Live Demo < /a> < /
        div > <
        /div>
    );
}

export default Projects;