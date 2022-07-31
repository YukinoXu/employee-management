import * as React from 'react'
import styles from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd';

export function Header() {
  const navigate = useNavigate();
  const link = window.localStorage.getItem('auth') ? '/admin' : '/login';

  function handleLogout() {
    window.localStorage.removeItem('auth')
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.headerText}>Employee Management System</div>
      </div>
      <div className={styles.rightContainer}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to={link}>Admin</Link>
        {link === '/admin' &&
          <Button className={styles.logout} onClick={handleLogout}>Logout</Button>
        }
      </div>
    </div>
  )
}