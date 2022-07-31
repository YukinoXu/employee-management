import * as React from 'react';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { Header } from '../Header/Header';
import styles from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const onFinish = (values) => {
    setErrorMessage(null)
    if (values.username === "admin" && values.password === "passwd") {
      window.localStorage.setItem('auth', true);
      navigate('/admin')
    } else {
      setErrorMessage('Invalid password');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Header />
      <section className={styles.error}>{errorMessage}</section>
      <Space>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </>
  );
}