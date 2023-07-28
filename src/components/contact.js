import React from 'react';
import logo from './logoooo.png';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './profile.css';

const Contact = () => {
    const navStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '1px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      };
      const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 10px',
        padding: '4px 20px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      };
    
      const containerStyle = {
        display: 'flex',
        alignItems: 'center',
      };
    
      const logoStyle = {
        width: '250px',
        height: '70px',
      };
    
      const personLogoStyle = {
        width: '60px',
        height: '60px',
        marginRight: '30px',
        marginLeft:'20px',
      };
    
    
      const sidebarStyle = {
        backgroundColor: 'rgb(220,87,87)',
        padding: '23px',
        width: '200px',
        position: 'fixed',
        top: '50px',
        left: 0,
        bottom: 0,
      };
    
      const sidebarLinkStyle = {  
        display: 'block',
      margin: '25px 0',
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      };
      const bodyStyle = {
        backgroundColor:'lavenderblush',
        fontFamily: 'Segoe UI',
      };
    
      const hoverStyle = {
        backgroundColor: 'blue',
        color: 'black',
      };

    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '750px',
        marginTop: ' 85px',
      };
    return(

        <>
            <div style={bodyStyle}>
            <nav style={navStyle}>
                <Link to="/home" style={linkStyle}>
                <img src={logo} alt="Logo" style={logoStyle} />
                </Link>
                <div style={containerStyle}>
                    <Link to="/home" style={linkStyle} activeStyle={hoverStyle}>
                        Home
                    </Link>
                    <Link to="/cart" style={linkStyle} activeStyle={hoverStyle}>
                        Cart
                    </Link>
                    <Link to="/about" style={linkStyle} activeStyle={hoverStyle}>
                        About
                    </Link>
                    <Link to="/contact" style={linkStyle} activeStyle={hoverStyle}>
                        Contact
                    </Link>
                    <Link to="/" style={linkStyle} activeStyle={hoverStyle}>
                        Logout
                    </Link>
                    <Link to="/profile" style={linkStyle}>
                        <img src={personLogo} alt="Person" style={personLogoStyle} />
                    </Link>
                </div>
            </nav>
                <div style={sidebarStyle}>
                    <br />
                    <h2><b>CATEGORIES</b></h2>
                    <Link to="/skin" className="xyz" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Cameras
                    </Link>
                    <Link to="/hair" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Mobiles and Tablets
                    </Link>
                    <Link to="/body" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Audio
                    </Link>
                    <Link to="/fragrance" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Laptops
                    </Link>
                    <Link to="/makeup" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Televisions
                    </Link>
                    <Link to="/natural" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Mobile Accessories
                    </Link>
                    <Link to="/eye" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Kitchen Appliances
                    </Link>
                    <Link to="/baby" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Personal Care
                    </Link>
                    <Link to="/gadgets" style={sidebarLinkStyle} activeStyle={hoverStyle}>
                        Accessories
                    </Link>
                </div>

                <h1 style={titleStyle}>Contact Us </h1>
                <br/>
                <div className="account-container">    
                    <div className="account-info">
                        <h3 className="section-heading">Contact Us  </h3>
                        <div className="info-row">
                            <span className="info-label">Instagram:</span>
                            <span className="info-value">@E_Cartig.</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Address:</span>
                            <span className="info-value">CBE,Tamil Nadu.</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Mail:</span>
                            <span className="info-value">Ecart@cart.com</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact