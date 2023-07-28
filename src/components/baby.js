import React from 'react';
import logo from './logoooo.png';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Baby = () => {
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
        name: "Beardo Ninja-X Pro Vacuum Trimmer - Black",
        image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1115190/nqOGubpho-8906084796797_1.jpg?dpr=2",
        price: 1649,
      },
      {
        name: "Oral-B Vitality 100 Cross Action Electric Rechargeable Toothbrush (White)",
        image: "data:image/jpeg;base64,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",
        price: 1299,
      },
      {
        name: "Beardo Styling Gun Ultra Compact Hair Dryer",
        image: "https://beardo.in/cdn/shop/files/Beardo_Hair_Dryer_A__Banner_2160x2160_10.jpg?v=1689326779&width=1946",
        price: 1399,
      },
      {
        name: "Nova Temperature Control Professional NHS 860 Hair Straightener",
        image: "data:image/jpeg;base64,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",
        price: 568.99,
      },

    ];

    const Products2 = [
      // {
      //   name:"Pampers New Diapers Pants XL - 56 Pack",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/6/2641daa4987176135285(1).jpg",
      //   price: 1198.99,
      // },
      // {
      //   name:"Aveeno Baby Daily Moisturising Lotion",
      //   image:"https://images-static.nykaa.com/media/catalog/product/d/3/d35add7381370036647_1.jpg",
      //   price: 806.99,
      // },
      // {
      //   name:"Himalaya Baby Powder",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/a/2ad6cbbn_8901138824037.jpg",
      //   price: 224.99,
      // },
      // {
      //   name:"Mamaearth Nourishing Baby Hair Oil With Almond & Avocado Oil",
      //   image:"https://images-static.nykaa.com/media/catalog/product/8/9/8906087772545_1_.jpg",
      //   price: 362.99,
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
            <h1 style={titleStyle}>Personal Care</h1>
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
export default Baby;