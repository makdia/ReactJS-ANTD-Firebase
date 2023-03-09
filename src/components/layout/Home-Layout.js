import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Layout } from 'antd';

const PageLayout = ({ children }) => {
    return (
        <Layout className="layout">
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </Layout>

    )
}

export default PageLayout
