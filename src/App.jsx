import { EmployeeDropdown } from './components/EmployeeDropdown/EmployeeDropdown';
import { EmployeeTable } from './components/EmployeeTable/EmployeeTable';
import { Header } from './components/Header/Header';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.option}>
        <EmployeeDropdown />
      </div>
      <EmployeeTable />
    </div>
  );
}

export default App;
