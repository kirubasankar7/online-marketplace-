import React from 'react';
import logo from './logoooo.png';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Natural = () => {
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
        name: "Apple 35 Watts 2-Port USB (Type-C) Wall Charging Adapter (MNWP3HN/A, White)",
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681401754/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/256609_0_g6plec.png?tr=w-1000",
        price: 5299,
      },
      {
        name: "Croma 10000 mAh 12W Fast Charging Power Bank (1 Micro USB Type B, 1 Type C & 2 Type A Ports, Short Circuit Protection, Blue)",
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675182275/Croma%20Assets/Communication/PowerBank/Images/250330_0_brf8h5.png?tr=w-1000",
        price: 489.99,
      },
      {
        name: "Apple 20W Type C Fast Charger (Adapter Only, Optimal Performance, White)",
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675859301/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/230033_0_onjjbc.png?tr=w-1000",
        price: 1590,
      },
      {
        name: "Apple EarPods MMTN2ZM/A In-Ear Earphones with Mic (With Lightning Connector, White)",
        image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664411705/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/199716_0_wn8v1o.png?tr=w-1000",
        price: 1599,
      },

    ];

    const Products2 = [
      // {
      //   name:"Kama Ayurveda Mini Kumkumadi Thailam Miraculous Beauty Fluid Ayurvedic Night Serum",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/2/e22716cKAMAA00000001.jpg",
      //   price: 995.99,
      // },
      // {
      //   name:"MCaffeine Vitamin C Green Tea Hydrating Face Serum for Glowing Skin - Reduces Dark Spots",
      //   image:"https://images-static.nykaa.com/media/catalog/product/e/a/ea48ddfNYMCFN0000022ab_a1.jpg",
      //   price: 554.99,
      // },
      // {
      //   name:"Pilgrim Salicylic Acid & Niacinamide Oil Control Serum for Blackheads",
      //   image:"https://images-static.nykaa.com/media/catalog/product/f/d/fdc1a1d8906120582209_1.jpg",
      //   price: 469.99,
      // },
      // {
      //   name:"Just Herbs Amla + Shankhpushpi Moisturising Hair Mask Treatment for Damaged Hair",
      //   image:"https://images-static.nykaa.com/media/catalog/product/e/f/efc745fJUSTH00000001a_01.jpg",
      //   price: 598.99,
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
            <h1 style={titleStyle}>Mobile Accessories</h1>
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
export default Natural;