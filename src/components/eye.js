import React from 'react';
import logo from './logoooo.png';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Eye = () => {
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
        name: "Greenchef Swift 1.5L 1500W Stainless Steel Electric Kettle, 360-Degree Rotational Base, Silver",
        image: "https://www.reliancedigital.in/medias/Greenchef-Arrow-ElectricKettle-493620564-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTg1MzF8aW1hZ2UvanBlZ3xpbWFnZXMvaGEwL2g1YS85ODk0Nzc3NjE4NDYyLmpwZ3w5OTI1Y2RhYWI4NGIwYjc2N2YzNjcxM2ZiNDc1YTU0MjA5YzczM2MzYjc1ZjFjNDRmMDI1ZWEwZmY5MTY5NTdj",
        price: 499.99,
      },
      {
        name: "Samsung 21 litres Convection Microwave Oven, CE77JD-S, Silver",
        image: "https://www.reliancedigital.in/medias/Samsung-CE77JD-S-Microwave-492911126-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3Nzk2ODN8aW1hZ2UvcG5nfGltYWdlcy9oMDMvaGFhLzk5MTAzMzg0NTM1MzQucG5nfGE0ZTkzNjhiNzEyNThhNjMyZWYzNGFhZDg5OTBlMWQ4MjM0ZGYzZThiYWE3ODE0Y2IyMjJmYTQ5OWM2MzNmNzE",
        price: 11999,
      },
      {
        name:"Kelvinator 272 litres 3 Star Double Door Refrigerator, Purple Red KRF-B290PRV",
        image:"https://www.reliancedigital.in/medias/KELVINATOR-KRF-B290PRV-Refrigerator-491959188-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzQ4Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2hmZS85NzgwOTMzNTkxMDcwLmpwZ3xhYjY4YTY2YWRiYjNkNTQxNzgyZTM0ZmQ1ZDgyNTI3MWUyYTAxNGU2ZjVjMWRlMzZjN2U4ZDM1NzA5ODQyOGNl",
        price: 23490,
      },
      {
        name: "BPL 720ml 750W 6-Cup Coffee Maker with Digital Display with Timer, Removable Filter, Glass Carafe Jar, Water level Indicator, 2 Years Warranty, Black & Cherry Maroon",
        image: "https://www.reliancedigital.in/medias/BPL-BDCMD0016C-Coffee-Maker-491903182-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyOTI0MjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIwL2gyZC85NjIzNzg2MzIzOTk4LmpwZ3w5MGU0OTJjMTFkNmZlZWUxY2M4MmUzZmM0OTYwYTA2NTcxM2M1MzVmNTg2Y2ZlMTcxNmI2ZjM1MTM4MGI2MDVh",
        price: 2599,
      },
      

    ];

    const Products2 = [
      // {
      //   name:"MCaffeine Coffee Hydrogel Under Eye Patches for Dark Circles with Hyaluronic Acid - 30 Pairs",
      //   image:"https://images-static.nykaa.com/media/catalog/product/4/8/4870ebdMCAFF00000257ab_1.jpg",
      //   price: 759.99,
      // },
      // {
      //   name:"Minimalist SPF 30 Lip Balm",
      //   image:"https://images-static.nykaa.com/media/catalog/product/a/f/afa0685MINIM00000086.jpg",
      //   price: 299.99,
      // },
      // {
      //   name: "Be Bodywise 2% Bio Retinol Under Eye Cream - Helps Reduce Dark Circles, Fine Lines ,Wrinkles",
      //   image: "https://images-static.nykaa.com/media/catalog/product/0/d/0da3b24BEBOD00000079_1.jpg",
      //   price: 349.99,
      // },
      // {
      //   name:"MCaffeine Choco Kissed Lip Gift Kit - Gift Sets & Combos for Women & Men",
      //   image:"https://images-static.nykaa.com/media/catalog/product/d/f/df047dfMCAFF00000165_nws1.jpg",
      //   price: 809.99,
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
            <h1 style={titleStyle}>Kitchen Appliances</h1>
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
export default Eye;