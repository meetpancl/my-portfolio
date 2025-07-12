import React, { useState, useEffect } from 'react';

function Skills() {
    const [skills] = useState([
        // Frontend
        { name: 'React', level: 80, category: 'frontend' },
        { name: 'JavaScript', level: 85, category: 'frontend' },
        { name: 'CSS3', level: 90, category: 'frontend' },
        { name: 'HTML5', level: 95, category: 'frontend' },

        // CMS
        { name: 'WordPress', level: 75, category: 'cms' },

        // Design
        { name: 'Figma', level: 85, category: 'design' },
        { name: 'UI/UX Design', level: 80, category: 'design' },

        // Backend
        { name: 'Firebase', level: 70, category: 'backend' },
        { name: 'PHP', level: 60, category: 'backend' },
        { name: 'Node.js', level: 55, category: 'backend' },

        // AI Tools (New)
        { name: 'Prompt Engineering', level: 60, category: 'ai' },

        // Language
        { name: 'Japanese', level: 40, category: 'language' }
    ]);



    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);

    // Animate progress bars when component becomes visible
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Filter skills by category
    const filteredSkills = selectedCategory === 'all' ?
        skills :
        skills.filter(skill => skill.category === selectedCategory);

    const categories = [
        { key: 'all', label: 'All Skills', icon: '🚀' },
        { key: 'frontend', label: 'Frontend', icon: '💻' },
        { key: 'design', label: 'Design', icon: '🎨' },
        { key: 'backend', label: 'Backend', icon: '⚙️' },
        { key: 'cms', label: 'CMS', icon: '📝' },
        { key: 'ai', label: 'AI Tools', icon: '💡' }, // NEW
        { key: 'language', label: 'Languages', icon: '🗣️' }
    ];


    return ( <
        section className = "skills-section" >
        <
        div className = "container" >
        <
        h2 > My Skills < /h2> <
        p > Technologies and tools I work with < /p>

        { /* Category Filter */ } <
        div className = "skills-categories" > {
            categories.map(category => ( <
                button key = { category.key }
                className = { `category-btn ${selectedCategory === category.key ? 'active' : ''}` }
                onClick = {
                    () => setSelectedCategory(category.key) } >
                <
                span className = "category-icon" > { category.icon } < /span> { category.label } <
                /button>
            ))
        } <
        /div>

        { /* Skills Grid */ } <
        div className = "skills-grid" > {
            filteredSkills.map((skill, index) => ( <
                SkillCard key = { skill.name }
                skill = { skill }
                isVisible = { isVisible }
                delay = { index * 100 }
                />
            ))
        } <
        /div>

        { /* Skills Summary */ } <
        div className = "skills-summary" >
        <
        div className = "summary-item" >
        <
        h3 > 12 + < /h3> <
        p > Technologies < /p> <
        /div> <
        div className = "summary-item" >
        <
        h3 > 3 + < /h3> <
        p > Years Learning < /p> <
        /div> <
        div className = "summary-item" >
        <
        h3 > ∞ < /h3> <
        p > Curiosity Level < /p> <
        /div> <
        /div> <
        /div> <
        /section>
    );
}

// Individual Skill Card Component
function SkillCard({ skill, isVisible, delay }) {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setAnimatedLevel(skill.level);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [isVisible, skill.level, delay]);

    const getSkillColor = (category) => {
        const colors = {
            frontend: '#61dafb',
            design: '#f67280',
            backend: '#43cea2',
            cms: '#f9ca24',
            ai: '#8e44ad', // NEW: Purple for AI
            language: '#2ecc71'
        };
        return colors[category] || '#7f8c8d';
    };


    return ( <
        div className = "skill-card" >
        <
        div className = "skill-header" >
        <
        h4 > { skill.name } < /h4> <
        span className = "skill-percentage" > { skill.level } % < /span> <
        /div> <
        div className = "skill-bar" >
        <
        div className = "skill-progress"
        style = {
            {
                width: `${animatedLevel}%`,
                backgroundColor: getSkillColor(skill.category),
                transition: 'width 2s ease-in-out'
            }
        } >
        < /div> <
        /div> <
        div className = "skill-category" > { skill.category } < /div> <
        /div>
    );
}

export default Skills;