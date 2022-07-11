import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getRoleAction } from '~/redux/actions/RoleAction';

export default function AdminRole() {
  const { role } = useSelector(state => state.AdminRoleReducer)
  const dispatch = useDispatch()
  const renderRole = () => {
    return role?.map((role,index)=>{
      return <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{role.name}</td>
      <td>Sửa   Xóa </td>
    </tr>
    })
  }
  useEffect(()=>{
    dispatch(getRoleAction())
  },[])
  return (
    <div className='container mt-5 pt-5'>
      <h2 className='text-center'>ROLE SHOP BÁN HÀNG</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tên</th>
          <th scope="col">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        {renderRole()}
      </tbody>
    </table>
    </div>

  )
}
