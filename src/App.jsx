import { EmployeeTable } from './components/EmployeeTable/EmployeeTable';
import { EmployeeSelect } from './components/EmployeeSelect/EmployeeSelect';
import { Header } from './components/Header/Header';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.option}>
        <EmployeeSelect />
      </div>
      <EmployeeTable />
    </div>
  );
}

export default App;
