import React from 'react';
import logo from './logoooo.png';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const MakeUp = () => {
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
        name: "Samsung Wondertainment 80 cm (32 Inch) Smart HD Ready TV, UA32T4340BKXXL",
        image: "https://www.jiomart.com/images/product/original/492403650/samsung-wondertainment-80-cm-32-inch-smart-hd-ready-tv-ua32t4340bkxxl-digital-o492403650-p591604009-0-202206102115.jpeg?im=Resize=(420,420)",
        price: 13990,
      },
      {
        name: "LG 81.28 cm (32 inch) HD LED Smart TV, 32LM562BPTA",
        image: "https://www.jiomart.com/images/product/original/492338698/lg-81-28-cm-32-inch-hd-led-smart-tv-32lm562bpta-2021-model-digital-o492338698-p590440933-0-202109210134.jpeg?im=Resize=(420,420)",
        price: 16999,
      },
      {
        name: "Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X64L (Black)",
        image: "https://www.jiomart.com/images/product/original/493841864/sony-bravia-108-cm-43-inches-4k-ultra-hd-smart-led-google-tv-kd-43x64l-black-digital-o493841864-p601150189-0-202305040248.jpeg?im=Resize=(420,420)",
        price: 42990,
      },
      {
        name: "OnePlus 81.28 cm (32 inch) HD Ready Android Smart LED TV with Dolby Audio Surround Sound Technology, 32Y1S Edge",
        image: "https://www.jiomart.com/images/product/original/492796556/oneplus-81-28-cm-32-inch-hd-ready-android-smart-led-tv-with-dolby-audio-surround-sound-technology-32y1s-edge-digital-o492796556-p591054037-0-202202221339.jpeg?im=Resize=(420,420)",
        price: 16490,
      },
      // {
      //   name: "Huda Beauty Fauxfilter Luminous Matte Full Coverage Liquid Foundation - 210B Chai",
      //   image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/5/f52f3cdhudab00000148_new_1.jpg",
      //   price: 3650.99,
      // },

      // {
      //   name: "NARS MINI LAGUNA TALC-FREE BRONZING POWDER",
      //   image: "https://www.narscosmetics.com/dw/image/v2/BBSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw465995b4/2023/March/Makeup/MiniBronzer/999NAC0000156_MiniLagunaBronzingPowder_Laguna08_1.jpg?sw=856&sh=750&sm=fit",
      //   price: 1539.99,
      // },
      // {
      //   name: "Estee Lauder Pure Color Lipstick Emerald - Intense Nude (Creme)  ",
      //   image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/0/7065dccESTEE00000465_01.jpg",
      //   price: 3600.99,
      // },
      // {
      //   name: "Benefit Cosmetics Roller Liner Black Liquid Eyeliner",
      //   image: "https://images-static.nykaa.com/media/catalog/product/6/0/602004089588_-_1.jpg",
      //   price: 2400.99,
      // },

    ];

    const Products2 = [
      // {
      //   name:"SUGAR All Set To Go Translucent Powder",
      //   image:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090495004_01.jpg",
      //   price: 502.99,
      // },
      // {
      //   name:"Makeup Revolution Reloaded Fundamental Eyeshadow Palette",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/5057566099462.jpg",
      //   price:594.99,
      // },
      // {
      //   name:"Revlon Touch & Glow Moisturising Makeup - Ivory Mist",
      //   image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/504b6d2rev_8902656402233_0.jpg",
      //   price: 327.99,
      // },
      // {
      //   name:"Rare Beauty Soft Pinch Liquid Blush",
      //   image:"https://www.rarebeauty.com/cdn/shop/products/Liquid-Blush-Matte-BLISS-SKU.jpg?v=1639020840",
      //   price: 1886.99,
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
            <h1 style={titleStyle}>Televisions</h1>
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
export default MakeUp;