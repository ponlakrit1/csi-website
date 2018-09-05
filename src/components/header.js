import React, { Component } from 'react';
import './app.css';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./../img/logo.png')} className="img-fluid img-responsive" alt="logo" />
        </header>

        <div className="border-color"></div>
        
        <Navbar inverse collapseOnSelect>
          <Navbar.Header >
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">
              หน้าหลัก
            </NavItem>
            <NavItem eventKey={2} href="/about">
              เกี่ยวกับสาขาวิชา
            </NavItem>
            <NavItem eventKey={3} href="/activity">
              ภาพกิจกรรม
            </NavItem>
            <NavItem eventKey={4} href="/quota">
              โควต้าพิเศษ
            </NavItem>
            <NavItem eventKey={5} href="/it-talent">
              โควต้า IT Talent
            </NavItem>
            <NavItem eventKey={6} href="/contact">
              ติดต่อ
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={7} href="#">
              English <img src={require('./../img/us.png')} alt="language" />
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

export default header;
