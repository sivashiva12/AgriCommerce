import React from 'react'
import './Sidebar.css'
import add_product_icon from '../Assets/Product_Cart.svg'

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      
      
    </div>
  )
}

export default Sidebar
