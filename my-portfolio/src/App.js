import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    return ( <
        div className = "App" >
        <
        Navigation / >
        <
        div id = "hero" >
        <
        Hero / >
        <
        /div> <
        div id = "about" >
        <
        About / >
        <
        /div> <
        div id = "projects" >
        <
        Projects / >
        <
        /div> <
        div id = "skills" >
        <
        Skills / >
        <
        /div> <
        Contact / >
        <
        /div>
    );
}

export default App;