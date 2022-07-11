import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getCateAction } from '~/redux/actions/CateAction';

export default function AdminCate() {

  const { cate } = useSelector(state => state.AdminCateReducer)

  const dispatch = useDispatch()


  const renderCate = () => {
    return cate?.map((cates,index)=>{
      return <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{cates.name}</td>
      <td>Sửa   Xóa </td>
    </tr>
    })
  }


  useEffect(()=>{
    dispatch(getCateAction())
  },[])

  
  return (
    <div className='container mt-5 pt-5'>
      <h2 className='text-center'>Cate SHOP BÁN HÀNG</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tên</th>
          <th scope="col">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        {renderCate()}
      </tbody>
    </table>
    </div>

  )
}
