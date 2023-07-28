import React,{useRef} from 'react';
import logo from './logoooo.png';
import 'react-slideshow-image/dist/styles.css';
import {Link} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';
import personLogo from './person.png';
//import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Home =() => {
    const navStyle = {
      backgroundColor: 'black',
      color: 'lavenderblush',
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
      padding: '23px ',
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
  
    const hoverStyle = {
      backgroundColor: 'blue',
      color: 'black',
    };
  
    const slideshowContainerStyle = {
      marginTop: '70px',
      marginLeft: '220px',
      marginRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    };
  
    const slideImages = [
      'https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg',
      'https://people.com/thmb/0nv6ToHrJmP4C4qJJJOo-B5y7qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-noise-canceling-headphones-and-earbuds-tested-tout-08749a14ffd04567bfb4ccfaab262aaa.jpg',
      'https://image.shutterstock.com/image-photo/flat-lay-shot-gadgets-mobile-260nw-1839621517.jpg',
      'https://www.rentnconnect.com/ckfinder/userfiles/files/Best%20Tech%20Gadgets%202020.jpg',
      'https://images.unsplash.com/photo-1620783770629-122b7f187703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhZGdldHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      'https://img.freepik.com/premium-photo/fashion-gadgets-mobile-phone-smart-watch-wireless-headphones-dark-concrete-background-top-view_685716-16.jpg',
    ];
  
    const slideProperties = {
      duration: 1200,
      transitionDuration: 900,
      infinite: true,
      indicators: true,
      arrows: true,
      autoplay: true,
      pauseOnHover: true,
      canSwipe: true,
    };
  
    const slideContainerStyle = {
      height: '10px',
      width: '400px',
      margin: '20px 45px',
      borderRadius:'17px',
    };
  
    const slideImageStyle = {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      borderRadius:'17px',
    };
    const titleStyle = {
      fontSize: '40px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    };

    const textStyle = {
      fontSize: '20px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    };
  
    const bodyStyle = {
      backgroundColor:'white',
      fontFamily: 'Segoe UI',
    }

    const footerStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 0 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      marginLeft:'240px',
      marginTop:'10px',
    };
  
    // const socialIconStyle = {
    //   fontSize: '24px',
    //   marginRight: '10px',
    //   color: 'lavenderblush',
    // };
   
    const slideshowRef = useRef(null);
  
    return (
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
          <h2>
            <b>CATEGORIES</b>
          </h2>
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
  
        <div style={slideshowContainerStyle}>
          <br />
          <br />
  
          <div style={slideContainerStyle}>
            <Slide {...slideProperties} ref={slideshowRef}>
              {slideImages.map((image, index) => (
                <div key={index} className="each-slide">
                  <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <div>
          <h1 style={titleStyle} >Welcome to E-Cart</h1>
            <br></br>
            <h3 style={textStyle}>
                <br></br>
                Welcome to our Electronics shopping website, where your journey to radiant and <br/>
                confident technology begins! Discover a world of luxurious mobiles, Tablets<br/>
                Laptops, and electronics that will enhance your technology<br/>
                and keep you updated.<br/><br/>

                <br/>
                <br/> 
                <br/>
                 <br></br>
            <br />
            <br />
          </h3> 
        </div>
       
        <br/><br/>
        <br/>
        
        
        
        <footer style={footerStyle}>
        <div>
          <span>&copy; 2023 E-Cart. All rights reserved.</span>
        </div>
        {/* <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={socialIconStyle} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={socialIconStyle} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={socialIconStyle} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={socialIconStyle} />
          </a>
        </div> */}
      </footer>
      </div>
      </>
    );
  };
  

export default Home;