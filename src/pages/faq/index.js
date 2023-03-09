import { Layout, Breadcrumb, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
const { Content } = Layout;
const Faq = () => {
    return (
        <Content style={{ padding: '50px 50px' }}>
            <div className="site-layout-content">
                <h3>FAQ</h3>
                <p>
                    Start Building Client Websites With a Platform That Supports Your Business Growth. The Website Building Platform Chosen by 18,000 Agencies to Deliver Rapid Growth. Reduce Production Time. Access To Source Code. Automate Your Workflow. White Label Editor.
                </p>
                <p>
                    Start Building Client Websites With a Platform That Supports Your Business Growth. The Website Building Platform Chosen by 18,000 Agencies to Deliver Rapid Growth. Reduce Production Time. Access To Source Code. Automate Your Workflow. White Label Editor.
                </p>
                <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                      Technical testing 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                      Technical testing 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
                <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </p>                                  
            </div>
        </Content>
    )
}

export default Faq