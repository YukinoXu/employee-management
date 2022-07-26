import { Dropdown } from 'react-bootstrap';
import styles from './EmployeeDropdown.module.scss';
import * as React from 'react'

export function EmployeeDropdown(props) {
  const [selectedDepartment, setSelectedDepartment] = React.useState('A');
  const [selectedItem, setSelectedItem] = React.useState('Finance');
  const [selectedCompany, setSelectedCompany] = React.useState('Microsoft');

  function handleDepartmentSelect(eventKey, event) {
    switch (eventKey) {
      case 'A':
        setSelectedDepartment('A')
        break;
      case 'B':
        setSelectedDepartment('B')
        break;
      default:
        break;
    }
  }

  function handleItemSelect(eventKey, event) {
    switch (eventKey) {
      case 'Finance':
        setSelectedItem('Finance')
        break;
      case 'Management':
        setSelectedItem('Management')
        break;
      case 'People':
        setSelectedItem('People')
        break;
      default:
        break;
    }
  }

  function handleCompanySelect(eventKey, event) {
    switch (eventKey) {
      case 'Microsoft':
        setSelectedCompany('Microsoft')
        break;
      case 'Google':
        setSelectedCompany('Google')
        break;
      case 'Amazon':
        setSelectedCompany('Amazon')
        break;
      case 'Accenture':
        setSelectedCompany('Accenture')
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.container}>
      <Dropdown onSelect={handleDepartmentSelect}>
        <Dropdown.Toggle id="dropdown-basic">
          {selectedDepartment}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={'A'}>A</Dropdown.Item>
          <Dropdown.Item eventKey={'B'}>B</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {selectedDepartment === 'A' &&
      <Dropdown onSelect={handleItemSelect}>
        <Dropdown.Toggle id="dropdown-basic">
          {selectedItem}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={'Finance'}>Finance</Dropdown.Item>
          <Dropdown.Item eventKey={'Management'}>Management</Dropdown.Item>
          <Dropdown.Item eventKey={'People'}>People</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>}
      {selectedDepartment === 'B' &&
      <Dropdown onSelect={handleCompanySelect}>
        <Dropdown.Toggle id="dropdown-basic">
          {selectedCompany}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={'Microsoft'}>Microsoft</Dropdown.Item>
          <Dropdown.Item eventKey={'Google'}>Google</Dropdown.Item>
          <Dropdown.Item eventKey={'Amazon'}>Amazon</Dropdown.Item>
          <Dropdown.Item eventKey={'Accenture'}>Accenture</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>}
    </div>
  );
}
