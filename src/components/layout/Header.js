import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const { Header } = Layout;
function LayoutHeader() {
	const [user] = useAuthState(auth);
    return (
		<Header>
      		<div className="logo" />
	      	<Menu 
	      		theme="dark"
		        mode="horizontal"
		        defaultSelectedKeys={['home']}
		    >
			  <Link to="/"><Menu.Item key="home">Home</Menu.Item></Link>
			  <Link to="/about"><Menu.Item key="about">About Us</Menu.Item></Link>
			  <Link to="/faq"><Menu.Item key="faq">Faq</Menu.Item></Link>
			  { user ? <Link to="#" onClick={() => logout ()} style={{ float: "right" }}><Menu.Item key="logout">Logout</Menu.Item></Link> : '' }
			</Menu>
    	</Header>
    )
}

export default LayoutHeader
