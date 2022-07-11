import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import AdminUser from './AdminUser';

import './AdminUser.css'
import { useNavigate } from 'react-router-dom'

import AdminRole from './AdminRole';
import AdminCate from './AdminCate';
const { TabPane } = Tabs;
const App = () => {

  const navigate = useNavigate()
  useEffect(() => {

    if (localStorage.USER_LOGIN) {
      const USER = JSON.parse(localStorage.USER_LOGIN).role
      if (USER !== 1) {
        navigate('/')
      }
    } else {
      navigate('/')
    }
  }, [])

  return (
    <div className='m-5'>
      <h1>ADMIN DASBOARD</h1>
      <Tabs className='1'  tabPosition='left'>
        <TabPane tab="Quản Lý User" key="1">
          <AdminUser/> 
        </TabPane>
        <TabPane tab="Phân Quyền (Role)" key="2">
          <AdminRole />
        </TabPane>
        <TabPane tab="Catelogy" key="3">
          <AdminCate/>
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          Content of Tab 4
        </TabPane>
        <TabPane tab="Tab 5" key="5">
          Content of Tab 5
        </TabPane>
        <TabPane tab="Tab 6" key="6">
          Content of Tab 6
        </TabPane>
        <TabPane tab="Tab 7" key="7">
          Content of Tab 7
        </TabPane>
        <TabPane tab="Tab 8" key="8">
          Content of Tab 8
        </TabPane>
        <TabPane tab="Tab 9" key="9">
          Content of Tab 9
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;