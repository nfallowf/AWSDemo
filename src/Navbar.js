import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import './Navbar.css'
import Footer from './Footer'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/resume', name: 'Resume', Component: Resume },
  { path: '/projects', name: 'Projects', Component: Projects },
]

function Header() {
  return (
    <Router>
      <>
        <Navbar bg="light">
          <Nav className="mx-auto">
            {routes.map(route => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
        <div>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                    {path !=="/" && <Footer/>}
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </>
    </Router>
  )
}
export default Header
