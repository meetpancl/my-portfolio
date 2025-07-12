import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with real API later)
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Clear success message after 3 seconds
            setTimeout(() => setSubmitStatus(''), 3000);
        }, 2000);
    };

    const contactInfo = [{
            icon: '📧',
            title: 'Email',
            value: 'panchal@example.com',
            link: 'mailto:panchal@example.com'
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            value: 'Connect with me',
            link: 'https://linkedin.com/in/yourprofile'
        },
        {
            icon: '🐙',
            title: 'GitHub',
            value: 'View my code',
            link: 'https://github.com/yourprofile'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+91 XXXXX XXXXX',
            link: 'tel:+91XXXXXXXXX'
        }
    ];

    return ( <
        section className = "contact-section"
        id = "contact" >
        <
        div className = "container" >
        <
        h2 > Let 's Work Together</h2> <
        p > Have a project in mind ? Let 's discuss how we can bring your ideas to life.</p>

        <
        div className = "contact-content" > { /* Contact Info */ } <
        div className = "contact-info" >
        <
        h3 > Get in Touch < /h3> <
        p > I 'm always open to discussing new opportunities, creative projects, or potential collaborations.</p>

        <
        div className = "contact-methods" > {
            contactInfo.map((item, index) => ( <
                ContactItem key = { index }
                item = { item }
                />
            ))
        } <
        /div>

        <
        div className = "social-links" >
        <
        h4 > Follow My Journey < /h4> <
        div className = "social-icons" >
        <
        a href = "#"
        className = "social-icon" > 🐦 < /a> <
        a href = "#"
        className = "social-icon" > 📷 < /a> <
        a href = "#"
        className = "social-icon" > 💼 < /a> <
        a href = "#"
        className = "social-icon" > 🐙 < /a> <
        /div> <
        /div> <
        /div>

        { /* Contact Form */ } <
        div className = "contact-form-container" >
        <
        form className = "contact-form"
        onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        input type = "text"
        name = "name"
        placeholder = "Your Name"
        value = { formData.name }
        onChange = { handleChange }
        required className = "form-input" /
        >
        <
        /div>

        <
        div className = "form-group" >
        <
        input type = "email"
        name = "email"
        placeholder = "Your Email"
        value = { formData.email }
        onChange = { handleChange }
        required className = "form-input" /
        >
        <
        /div>

        <
        div className = "form-group" >
        <
        input type = "text"
        name = "subject"
        placeholder = "Subject"
        value = { formData.subject }
        onChange = { handleChange }
        required className = "form-input" /
        >
        <
        /div>

        <
        div className = "form-group" >
        <
        textarea name = "message"
        placeholder = "Your Message"
        value = { formData.message }
        onChange = { handleChange }
        required className = "form-textarea"
        rows = "5" >
        < /textarea> <
        /div>

        <
        button type = "submit"
        className = { `submit-btn ${isSubmitting ? 'submitting' : ''}` }
        disabled = { isSubmitting } >
        {
            isSubmitting ? ( <
                >
                <
                span className = "spinner" > < /span>
                Sending... <
                />
            ) : (
                'Send Message'
            )
        } <
        /button>

        {
            submitStatus === 'success' && ( <
                div className = "success-message" > ✅Thank you!Your message has been sent successfully. <
                /div>
            )
        } <
        /form> <
        /div> <
        /div> <
        /div> <
        /section>
    );
}

// Contact Item Component
function ContactItem({ item }) {
    return ( <
        a href = { item.link }
        className = "contact-item" >
        <
        div className = "contact-icon" > { item.icon } < /div> <
        div className = "contact-details" >
        <
        h4 > { item.title } < /h4> <
        p > { item.value } < /p> <
        /div> <
        /a>
    );
}

export default Contact;