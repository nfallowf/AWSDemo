import React from 'react'
import Login from './Login'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import About from './About'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <Router>
            <div className='nav-container'>
                <nav className='nav'>
                    <ul className='nav-item-container'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link-home'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-link'>Resume</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-link'>Projects</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/resume'>
                        <Resume/>
                    </Route>
                    <Route path='/projects'>
                        <Projects/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar
