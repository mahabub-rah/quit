import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import img from '../../src/Assest/IMG_20210829_154357-removebg-preview (1).png'
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import logo from '../Assest/logo.png'
import './Shared.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const Header = () => {


  const {user} = useContext(AuthContext)
    return (
      <Navbar collapseOnSelect expand="lg" variant="light" bg="transparent" className='mt-2'>
        <Container>
          <NavLink to='/'>
            <img
              src={logo}
              width="120"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto header-menu-item">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <a href="home#fqa">FAQ</a>
            </Nav>
            <Nav>
              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-dark" className="px-3">
                  <BsSun className="fs-6"></BsSun>
                </Button>
                <Button variant="outline-dark" className="px-3">
                  <MdDarkMode className="fs-6"></MdDarkMode>
                </Button>
              </ButtonGroup>

              <div>
                <img src={img} alt="" className="user-image-profile ms-3"></img>
                <Link to='/login'>
                  <Button className="ms-3">Log In</Button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;