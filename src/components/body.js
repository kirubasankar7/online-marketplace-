import React from 'react';
import logo from './logoooo.png';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Body = () => {
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
        marginLeft: '800px',
      };
    const Products1 = [
      {
        name: "WH-1000XM5 Wireless Noise Cancelling Headphones",
        image: "https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        price: 34900,
      },
      {
        name: "WF-1000XM4 Wireless Noise Cancelling Headphones",
        image: "https://sony.scene7.com/is/image/sonyglobalsolutions/Product%20primary%20image-1?$categorypdpnav$&fmt=png-alpha",
        price: 26900,
      },
      {
        name: "WI-C100 Wireless In-ear Headphones",
        image: "https://www.sony.co.in/image/4e59487a5c5175284a49830878185789?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        price: 2790,
      },
      {
        name: "INZONE H9 Wireless Noise Cancelling Gaming Headset",
        image: "https://www.sony.co.in/image/a900b53164683e1fc98b8eefb9b6c406?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        price: 27990,
      },

    ];

    const Products2 = [
      // {
      //   name:"Nivea 50X Vitamin C Body Lotion With Spf 15 For Cell Repair And Natural Glow",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/0/005bd8b4005900196156_1.jpg",
      //   price: 440.99,
      // },
      // {
      //   name:"Nykaa Love Struck Body Lotion - First Date",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/e/ae01cf48904245714567_1.jpg",
      //   price: 250.99,
      // },
      // {
      //   name:"Be Bodywise 4% AHA BHA Underarm Roll On- Prevents Odour, Fades Pigmentation- For Radiant Underarm",
      //   image:"https://images-static.nykaa.com/media/catalog/product/c/6/c631a86BEBOD00000196_1.jpg",
      //   price: 224.99,
      // },
      // {
      //   name:"Love Beauty & Planet Natural Murumuru Butter & Rose Glow Body Lotion",
      //   image:"https://images-static.nykaa.com/media/catalog/product/a/0/a0b46228901030753404_1.jpg",
      //   price: 412.99,  
      // }

    ]
  
    const formatIndianPrice = (price) => {
      const formattedPrice = price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
      return formattedPrice;
    };
     
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
          <br/><br/><br/><br/>
          <div>
            <h1 style={titleStyle}>Audio</h1>
            <div className='product-container'>
            {Products1.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
          <br/>
          <div className='product-container'>
            {Products2.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
    
} ;
export default Body;