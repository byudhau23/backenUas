// import database
const db = require("../config/database");
// membuat class Employee
class Employee {
  // buat fungsi
  static all() {
    return new Promise((resolve, reject) => {
        // lakukan query ke db untuk ambil data
        const sql = "SELECT * FROM employees";
        db.query(sql, (sql, results) => {
            resolve(results);
        });
    });
  }

  // promise 1
  static async create(employees) {
    const id = await new Promise((resolve, reject) => {
        const sql = "INSERT INTO employees SET ?";
        db.query(sql, employees, (err, results) => {
            resolve(results.insertId);
        });
    });

    // promise 2
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM employees WHERE id = ?`;
        db.query(sql, id, (err, results) => {
            resolve(results);
        });
    });
}

static find(id) {
  // lakukan promise, select by id
  return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE id = ?`;
      db.query(sql, id, (err, results) => {
          resolve(results[0]);
      });
  });
}

static async update(id, data) {
  // update data
  await new Promise((resolve, reject) => {
      // query untuk update data
      const sql = "UPDATE employees SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
          resolve(results);
      });
    });

      // select data by id
  const employees= await this.find(id);
  return employees;
  }

  static async delete(id) {
    // query delete
    return new Promise((resolve, reject) => {
        // query sql
        const sql = "DELETE FROM employees WHERE id = ?";
        db.query(sql, id, (err, results) => {
            resolve(results);
        });
    });
  }

  static search(name) {
    // lakukan promise, select by id
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM employees WHERE name = ?`;
        db.query(sql, name, (err, results) => {
            resolve(results[0]);
        });
    });
  }

  static status(stat) {
    return new Promise((resolve, reject) => {
        // lakukan query ke db untuk ambil data
        const sql = "SELECT * FROM employees WHERE status = ?";
        db.query(sql, stat, (sql, results) => {
            resolve(results);
        });
    });
  }
}


// export class Employee
module.exports = Employee;
