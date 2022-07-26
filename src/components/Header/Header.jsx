import * as React from 'react'
import styles from './Header.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerText}>社员管理</div>
    </div>
  )
}