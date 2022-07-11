import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserAction } from '~/redux/actions/UserAction'
import { useDispatch } from 'react-redux';
export default function AdminUser() {
  const { user } = useSelector(state => state.AdminUserReducer)
  const dispatch = useDispatch()

  const renderUser = () => {
    return user?.map((user,index)=>{
      return <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{user.fullname}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address}</td>
      <td>ID : {user.role_id} ( {user.role_id === 1 ? "ADMIN" : "USER" } ) </td>
      <td>Sửa   Xóa </td>
    </tr>
    })
  }
  useEffect(()=>{
    dispatch(getUserAction())
  },[])
  return (
    <div className='container mt-5 pt-5'>
      <h2 className='text-center'>USER SHOP BÁN HÀNG</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tên</th>
          <th scope="col">Eamil</th>
          <th scope="col">SĐT</th>
          <th scope="col">Địa Chỉ</th>
          <th scope="col">Role</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      <tbody>
        {renderUser()}
      </tbody>
    </table>
    </div>

  )
}
