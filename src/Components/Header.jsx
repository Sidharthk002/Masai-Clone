
import React from 'react'
import './header.css'
const Header = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='navul'>
            <h1 style={{color:'rgb(244, 51, 151)',fontSize:'50px',marginTop:'-5px',marginLeft:'40px'}}>meesho</h1>
            <input style={{height:'40px',width:'380px', marginTop:'15px',marginLeft:'20px',borderRadius:'6px',borderColor: "lightgray"}} placeholder={'Try Saree,Kurti or Search by Product Code'}/>
            
            <div className='hover-on-manubar'  style={{marginLeft:'230px',cursor:'pointer',width:'8rem'}}>
            <p  className=".text-decoration-none">Download App</p>
            <div  className='drop-down' >
                <ul>
                    <h3 style={{width:"500px",marginLeft:"-34px"}}>Download From</h3>
                    <li style={{listStyle:'none',marginLeft:'-25px'}}>Google Play</li>
                    <li style={{listStyle:'none',marginLeft:'-25px'}}>App Store</li>
                </ul>
            </div>
            </div>
            <p style={{marginLeft:'20px',}}>|</p>
            <p style={{marginLeft:'20px',cursor:'pointer',height:'20px',}}>Become a Supplier</p>
            <p style={{marginLeft:'20px'}}>|</p>
            <p style={{marginLeft:'20px',cursor:'pointer',height:'20px'}} >Profile</p>
            <p style={{marginLeft:'20px'}}>|</p>
            <p style={{marginLeft:'20px',cursor:'pointer',height:'20px'}} >Cart</p>
        </ul>
      </nav>
    </>
  )
}

export default Header