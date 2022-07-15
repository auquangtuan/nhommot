import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import imgLogo from '~/assets/img/logo.webp'
import './HeaderTemplate.scss'
export default function HeaderTemplate() {
  const navigate = useNavigate()
  const handleClicker = () => {
    navigate('/')
  }
  return (
    <header className='container d-flex flex-column'  style={{ height: '120px' }}>
      <div className='d-flex justify-content-around align-items-center py-3'>
        <div className='d-flex gap-2 align-items-center justify-content-center'>
          <svg width="24" height="24"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg>
          <span className='bold'>Tài Khoản</span>
        </div>
        <img style={{ "maxheight": "60px" }} src={imgLogo}></img>
        <div className='d-flex gap-2 align-items-center justify-content-center'>
          <svg width="24" height="24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
          <span>Tìm Kiếm</span>
          <div className='d-flex gap-2 align-items-center justify-content-center'>
            <svg width="24" height="24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
            <button onClick={handleClicker}>
              Giỏ Hàng <span>(0)</span>
            </button>
          </div>
        </div>
      </div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__listitem"><NavLink to='/' >Trang Chủ</NavLink></li>
           <li class="nav__listitem"><NavLink to='/' >Sản Phẩm </NavLink>
            <ul class="nav__listitemdrop">
              <li>Áo Polo</li>
              <li>Áo Thun Cổ Tròn</li>
              <li>Áo Khoác Nam</li>
              <li>Quần Nam</li>
              <li>Ví Nam</li>
              <li>Balo Nam</li>
              <li>Boxer Nam</li>
              <li>Giày Nam</li>
            </ul>
          </li>
          <NavLink to='/product' ><li className='nav__listitem'>Shopee Mail</li></NavLink>
          <NavLink to='/' ><li className='nav__listitem'>Lazada Mail</li></NavLink>
          <NavLink to='/' ><li className='nav__listitem'>Phong Cách Sống</li></NavLink>
          <NavLink to='/' ><li className='nav__listitem'>Giới Thiệu</li></NavLink>
          <NavLink to='/' ><li className='nav__listitem'>Liên Hệ</li></NavLink>
        </ul>
      </nav>
      <div>


      </div>

    </header>
  )
}

