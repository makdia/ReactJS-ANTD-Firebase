import { Result, Button } from 'antd';

export default function Custom404() {
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back to Home</Button>}
  />
);