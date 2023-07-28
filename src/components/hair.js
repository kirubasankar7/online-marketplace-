import React from 'react';
import logo from './logoooo.png';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Hair = () => {
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
        name: "Apple iPhone 14 128 GB, Purple",
        image: "https://www.jiomart.com/images/product/original/493177753/apple-iphone-14-128-gb-purple-digital-o493177753-p593687929-0-202306301807.jpeg?im=Resize=(420,420)",
        price: 69900.00,
      },
      {
        name: "Apple iPad 9th Gen 2021 25.91 cm (10.2 inch) Wi-Fi Tablet , 64 GB, Space Grey, MK2K3HN/A",
        image: "https://www.jiomart.com/images/product/original/491997817/apple-ipad-9th-gen-2021-25-91-cm-10-2-inch-wi-fi-tablet-64-gb-space-grey-mk2k3hn-a-digital-o491997817-p590798663-0-202109210546.jpeg?im=Resize=(420,420)",
        price: 29990.00,
      },
      {
        name: "Apple iPad 10th Gen (2022) 27.69 cm (10.9 inch) Wi-Fi Tablet, 64 GB, Blue, MPQ13HN/A",
        image: "https://www.jiomart.com/images/product/original/493178824/apple-ipad-10th-gen-2022-27-69-cm-10-9-inch-wi-fi-tablet-64-gb-blue-mpq13hn-a-digital-o493178824-p594779597-0-202306272055.jpeg?im=Resize=(420,420)",
        price: 41900.00,
      },
      {
        name: "Apple iPhone 14 Pro Max 1 TB, Deep Purple",
        image: "https://www.jiomart.com/images/product/original/493177810/apple-iphone-14-pro-max-1-tb-deep-purple-digital-o493177810-p593695452-0-202306302253.jpeg?im=Resize=(420,420)",
        price: 174400.00,
      },

    ];

    const Products2 = [
      // {
      //   name:"MCaffeine Anti Hairfall Scalp Tonic with Redensyl & Plant Protein - Serum for Hair Growth & Scalp Nourishment",
      //   image:"https://images-static.nykaa.com/media/catalog/product/7/f/7fe4e44MCAFF00000084_1.jpg",
      //   price: 528.99,
      // },
      // {
      //   name:"Be Bodywise 5000 Mcg Biotin Gummies For Healthy Hair With Added Zinc & Multivitamins - 120 Day Pack",
      //   image:"https://images-static.nykaa.com/media/catalog/product/e/3/e36ec66BEBOD00000039_1.jpg",
      //   price: 1529.99,
      // },
      // {
      //   name:"Nykaa Naturals Onion & Fenugreek Hair Growth Paraben and Sulphate Free Hair Mask",
      //   image:"https://images-static.nykaa.com/media/catalog/product/a/3/a32a14dNYKAB00000067_1.jpg",
      //   price: 524.99,
      // },
      // {
      //   name:"Mamaearth Aloe Vera Gel With Pure Aloe Vera & Vitamin E For Skin and Hair",
      //   image:"https://images-static.nykaa.com/media/catalog/product/7/f/7fcce608906087772439_1.jpg",
      //   price: 293.99,
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
            <h1 style={titleStyle}>Mobiles and Tablets</h1>
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
export default Hair;