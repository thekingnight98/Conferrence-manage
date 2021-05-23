import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import ConferrenceList from './components/ConferrenceList';
import RoomManagement from './components/RoomManagement';


import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function App() {

  const user = useSelector(selectUser)
  return (
    <div>
      {
        user ? <ConferrenceList /> : <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>
                  <Link to={"/conferrence-list"} className="nav-link">
                    Conferrence Management
              </Link>
                </Navbar.Brand>

                {user ? <Nav className="justify-content=end">
                  <Nav>
                    <Link to={'/conferrence-list'} className="nav-link">
                      Conferrence List
                </Link>
                  </Nav>
                  <Nav>
                    <Link to={'/room-management'} className="nav-link">
                      Room-management
                </Link>
                  </Nav>
                </Nav> : null
                }
              </Container>
            </Navbar>

            <Container>
              <Row>
                <Col md={12}>
                  <div className="wrapper">
                    <Switch>
                      <Route exact path="/" component={Login} />
                      <Route path="/conferrence-list" component={ConferrenceList} />
                      <Route path="/room-management" component={RoomManagement} />
                    </Switch>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Router>
      }
    </div>

  )
}
export default App