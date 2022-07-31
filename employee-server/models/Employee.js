const sqlite3 = require('sqlite3').verbose();
const dbName = 'employee.sqlite';
const db = new sqlite3.Database(dbName);

db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTS employee
      (id integer primary key, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), department VARCHAR(255), hobby TEXT)
  `;
  db.run(sql);
});

class Employee {
  static all(cb) {
    db.all('SELECT * FROM employee', cb);
  }

  static find(id, cb) {
    db.get('SELECT * FROM employee WHERE id = ?', id, cb);
  }

  static create(data, cb) {
    const sql = 'INSERT INTO employee(first_name, last_name, email, department, hobby) VALUES (?, ?, ?, ?, ?)';
    db.run(sql, data.first_name, data.last_name, data.email, data.department, data.hobby, cb);
  }

  static delete(id, cb) {
    if (!id) {
      return cb(new Error('Please provide an id'));
    }
    db.run('DELETE FROM employee WHERE id = ?', id, cb);
  }
}

module.exports = db;
module.exports.Employee = Employee;