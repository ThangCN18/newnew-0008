import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
  
  const { Header, Sider, Content } = Layout;
  
  const LayoutComponent: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('4');
  
    return (
      <Layout className='h-[100vh]' >
      <Sider trigger={null} collapsible collapsed={collapsed} className="!bg-gray-100">
        <Link to="/">
          {
            !collapsed ?
              <div className="logo flex pt-4 mb-8 justify-center items-center" >
                <img className="h-[35px] mr-2" src='https://coursesbe.s3.ap-southeast-1.amazonaws.com/c572dcfd-998f-4d93-b40f-6d105dcbdb49-logo-learning.png' />
                <h4 className='text-black text-lg font-bold'>Wizcove IT</h4>
              </div> :
              <div className="logo flex pt-4 mb-8 justify-center items-center" >
                <img className="h-[35px]" src='https://coursesbe.s3.ap-southeast-1.amazonaws.com/c572dcfd-998f-4d93-b40f-6d105dcbdb49-logo-learning.png' />

              </div>
          }
        </Link>
        <Menu
          theme='light'
          mode="inline"
          selectedKeys={[selectedMenu]}
          [
            {
              key: '1',
              icon: <RiDashboardLine />,
              label: 'Dashboard',
              onClick: () => {
                navigate('/admin')
              }
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Users',
              onClick: () => {
                navigate('/admin/user')
              }
            },
            {
              key: '3',
              icon: <FaRoute />,
              label: 'Roadmaps',
              onClick: () => {
                navigate('/admin/roadmap')
              }
            },
            {
              key: '4',
              icon: <HiOutlineBookOpen />,
              label: 'Courses',
              onClick: () => {
                navigate('/admin/course')
              }
            },
            {
              key: '5',
              icon: <MdOutlineReviews />,
              label: 'Reviews',
              onClick: () => {
                navigate('/admin/review')
              }
            },
            {
              key: '6',
              icon: <MdOutlinePayments />,
              label: 'Payments',
              onClick: () => {
                navigate('/admin/payment')
              }
            },
            {
              key: '7',
              icon: <MdOutlineCategory />,
              label: 'Categories',
              onClick: () => {
                navigate('/admin/categories')
              }
            },
          ] 
          }
        />
      </Sider>
      <Layout className="site-layout min-w-[1000px] max-w-[1800px] h-[100vh]">
        <Header className="!bg-white !px-5 flex justify-between items-center" >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='flex justify-end space-x-5 items-center'>
            <a href='https://wizcoveit.netlify.app/meet' target="_blank" className='text-[#0160fa] hover:text-blue-500 '><RiVideoAddFill className='text-2xl' /></a>
            <UserDropdown handelLogout={handelLogout} />

          </div>

        </Header>
        <Content
          className=' overflow-y-scroll'

          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: ,
          }}
        >
          {

            "dsasa"

          }

        </Content>
      </Layout>
      {
        loading.isLoading ?
          <LoadingComponent /> : null
      }

    </Layout>
    );
  };
  
  export default LayoutComponent;