import * as React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './AddEmployeeForm.module.scss';
import { Header } from '../Header/Header';
import { addEmployee } from '../../data/api';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployee } from '../../reducer/employeeSlice';
import { setFilteredEmployee } from '../../reducer/filteredEmployeeSlice';

export function AddEmployeeForm() {
  const employee = useSelector((state) => state.employee.value);
  const filteredEmployee = useSelector((state) => state.filteredEmployee.value);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const onFinish = async (values) => {
    await addEmployee(values)
    navigate('/admin');
    const newEmployee = [...employee, values];
    const newFilteredEmployee = [...filteredEmployee, values];
    dispatch(setEmployee(newEmployee));
    dispatch(setFilteredEmployee(newFilteredEmployee));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
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
            label="First name"
            name="first_name"
            rules={[{ required: true, message: 'Please input your first name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="last_name"
            rules={[{ required: true, message: 'Please input your last name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true, message: 'Please input your department' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Hobby"
            name="hobby"
            rules={[{ required: false, message: 'Please input your hobby' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}