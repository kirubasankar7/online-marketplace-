import React from 'react';
import logo from './logoooo.png';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Fragrance = () => {
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
        name: "HP 15s-fr5007TU Laptop (12th Gen Intel Core i5-1235U/8GB RAM/512GB SSD/Iris Xe Graphics/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 Inch), Natural Silver",
        image: "https://www.jiomart.com/images/product/original/493177048/hp-15s-fr5007tu-laptop-12th-gen-intel-core-i5-1235u-8gb-ram-512gb-ssd-iris-xe-graphics-windows-11-home-mso-fhd-39-6-cm-15-6-inch-natural-silver-digital-o493177048-p593199864-0-202207281636.jpeg?im=Resize=(420,420)",
        price: 53990,
      },
      {
        name: "Apple MLXX3HNA MacBook Air (Apple M2 Chip/8GB/512GB SSD/macOS Monterey/Liquid Retina), 34.46 cm (13.6-inch), Space Grey",
        image: "https://www.jiomart.com/images/product/original/492850651/apple-mlxx3hna-macbook-air-apple-m2-chip-8gb-512gb-ssd-macos-monterey-liquid-retina-34-46-cm-13-6-inch-space-grey-digital-o492850651-p592242756-0-202206282208.jpeg?im=Resize=(360,360)",
        price: 130410,
      },
      {
        name: "Apple MGN63HNA MacBook Air (Apple M1 Chip/8GB/256GB SSD/macOS Big Sur/Retina), 33.78 cm (13.3 inch)",
        image: "https://www.jiomart.com/images/product/original/491946461/apple-mgn63hna-macbook-air-apple-m1-chip-8gb-256gb-ssd-macos-big-sur-retina-33-78-cm-13-3-inch-digital-o491946461-p590441594-0-202108122000.jpeg?im=Resize=(360,360)",
        price: 80999,
      },
      {
        name: "HP 15s-eq2144au Laptop (AMD Ryzen 5 5500U Processor/8GB/512GB SSD/AMD Radeon Graphics/Windows 11/MSO/FHD) 39.6 cm (15.6 inch)",
        image: "https://www.jiomart.com/images/product/original/492575360/hp-15s-eq2144au-laptop-amd-ryzen-5-5500u-processor-8gb-512gb-ssd-amd-radeon-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-digital-o492575360-p591225898-0-202205022206.jpeg?im=Resize=(360,360)",
        price: 41980,
      },

    ];

    const Products2 = [
      // {
      //   name:"Victoria's Secret Lavender Vanilla Mist",
      //   image:"https://images-static.nykaa.com/media/catalog/product/f/3/f36e7a1667553848123.jpg",
      //   price: 2099.99,
      // },
      // {
      //   name:"BVLGARI BLV PH Set",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/4/04e7748bvlga00000046.jpg",
      //   price: 8200.99,
      // },
      // {
      //   name:"BVLGARI Rose Goldea Eau De Parfum",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/8/783320502514_1_.jpg",
      //   price: 11900.99,
      // },
      // {
      //   name:"DIOR Homme Sport Eau De Toilette",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/b/fb0c4433348901580076_1.jpg",
      //   price: 7500.99,
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
            <h1 style={titleStyle}>Laptops</h1>
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
export default Fragrance;