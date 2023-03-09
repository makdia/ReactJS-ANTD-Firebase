import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox, Timeline } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
const { Content } = Layout;

const Home = () => {
  	const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (!user) navigate("/");
    }, [user]);
    return (
      <Content style={{ padding: '50px 50px' }}>
        <div className="site-layout-content">
          <Row style={{ padding: '100px 50px' }}>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
              <Timeline>
                <Timeline.Item>Welcome to our site</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
          </Row>
        </div>
      </Content>
    )
}

export default Home


