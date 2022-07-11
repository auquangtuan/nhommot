import React from 'react'
import { useFormik } from 'formik'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '~/redux/actions/LoginAction'
//getInfoLogin
export default function Login() {
  const {userLogin} = useSelector(state => state.UserReducer)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(getUserAction(values))
    }
  })
  return (
    <div section onSubmit={(e) => {
      e.preventDefault()
      formik.handleSubmit(e)
    }} className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center m-5 shadow p-5 mb-5 bg-white rounded'>
        <h2>Đăng Nhập</h2>
        <p>Nếu bạn chưa có tài khoản, đăng ký tại đây</p>
        <form onSubmit={(e) => {
          formik.handleSubmit(e)
        }} className='d-flex flex-column justify-content-center align-items-center'>
          <div >
            <input name='email' onChange={formik.handleChange}  type="text" placeholder='Email' />
          </div>
          <div className='my-3'>
            <input name='password' onChange={formik.handleChange}  type="password" placeholder='Mật Khẩu' />
          </div>
          <div className=''>
            <button type='submit' className='btn btn-success'>Đăng Nhập</button>
          </div>
        </form>
        <p className='mt-4'>Quên Mật Khẩu ?</p>
        <p>Hoặc Đăng Nhập Bằng</p>
        <div className='d-flex gap-4'>
          <div>
            Facebook
          </div>
          <div>
            Google
          </div>
        </div>
      </div>
    </div>
  )
}
