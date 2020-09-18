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
        <Navbar bg="dark">
          <Nav className="mx-auto nav-container">
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
        <Container className="container">
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
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      </>
    </Router>
  )
}
export default Header
