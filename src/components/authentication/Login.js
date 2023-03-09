import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
const { Content } = Layout;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/home");
    }, [user, loading]);

    return (
      <Content style={{ padding: '50px 50px' }}>
        <div className="site-layout-content">
          <Row style={{ padding: '100px 50px' }}>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => logInWithEmailAndPassword(email, password)}>
                    Log in
                  </Button>
                  <Button type="primary" block onClick={() => signInWithGoogle()} style={{margin:'15px 0px 15px 0px'}}>
                    Login with Google
                  </Button>
                  Don't have an account? <a href="/signup">Register!</a>
                </Form.Item>
              </Form>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
          </Row>
        </div>
      </Content>
    )
}

export default Login


