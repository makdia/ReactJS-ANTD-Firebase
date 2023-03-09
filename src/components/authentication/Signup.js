import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import { Layout, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
const { Content } = Layout;

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const register = () => {
		if (!name) alert("Please enter name");
		registerWithEmailAndPassword(name, email, password);
	};
	useEffect(() => {
	    if (loading) return;
	    if (user) navigate("/home");
	}, [user, loading]);

	const onSubmit = async ({ username, password }) => {
		try {
			
		} catch (error) {
			console.log(error)
		}
	};

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
	                  name="fullname"
	                  rules={[
	                    {
	                      required: true,
	                      message: 'Please input your Fullname!',
	                    },
	                  ]}
	                >
	                  <Input type="text" value={name} onChange={(e) => setName(e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
	                </Form.Item>
	                <Form.Item
	                  name="email"
	                  rules={[
	                    {
	                      required: true,
	                      message: 'Please input your email!',
	                    },
	                  ]}
	                >
	                  <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail Address" />
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
	                  <Button type="primary" htmlType="submit" className="login-form-button" onClick={register}>
	                    Register
	                  </Button>
	                  <p>Or <a href="/">Login!</a></p>
	                </Form.Item>
	              </Form>
	            </Col>
	            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
	          </Row>
	        </div>
	    </Content>
	)
}

export default SignUp
