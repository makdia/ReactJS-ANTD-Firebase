import { Layout } from 'antd';
import { BrowserRouter as Router, Link } from "react-router-dom";
const { Footer } = Layout;
const LayoutFooter = () => {
    return (
		<Footer style={{ textAlign: 'center' }}>
			<p>© 2022 iReadify, LLC. All rights reserved.</p>
			<p>
			    <a href="/terms-and-conditions">Terms & Conditions</a> | <a href="/privacy-policy">Privacy Policy</a>
			</p> 
		</Footer>
	)
}
export default LayoutFooter
