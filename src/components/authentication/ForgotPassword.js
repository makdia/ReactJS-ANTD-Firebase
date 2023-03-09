import { Layout, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Content } = Layout;
import { Row, Col } from 'antd';

const ForgotPassword = () => {

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
	                onFinish={onFinish}
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
	                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
	                  <Button type="primary" htmlType="submit" className="login-form-button">
	                    Log in
	                  </Button>
	                  Or <a href="">register now!</a>
	                </Form.Item>
	              </Form>
	            </Col>
	            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
	          </Row>
	        </div>
	    </Content>
	)
}

export default ForgotPassword
