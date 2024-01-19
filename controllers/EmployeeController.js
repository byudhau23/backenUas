// import Model Employee
const Employee = require("../models/Employee")
// buat class EmployeeController
class EmployeeController {
  // buat fungsi
  async index(req, res) {
    const employees = await Employee.all();

    const data = {
        message: "Menampilkan data Karyawan",
        data: employees
    };

    res.status(200).json(data);
}
async store(req, res) {
 
  const employees = await Employee.create(req.body);
  const data = {
      message: "Menambahkan data student",
      data: employees,
  };

  res.status(201).json(data);
}

async update(req, res) {
  const { id } = req.params;

  const employees = await Employee.find(id);

  if (employees) {
      // update data
      const EmployeeUpdated = await Employee.update(id, req.body);
      const data = {
          message: "Mengupdate data karyawan",
          data: EmployeeUpdated,
      };

      res.status(200).json(data);
  }
  else {
      // kirim data tidak ada
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }
  }

  async destroy(req, res) {
    const { id } = req.params;

    const employees = await Employee.find(id);

    if (employees) {
        // hapus data
        await Employee.delete(id);
        const data = {
            message: "Menghapus data karyawan",
        };

        res.status(200).json(data);
    }
    else {
        // data tidak ada
        const data = {
            message: "Data tidak ada",
        };

        res.status(404).json(data);
    }
  }

async find(req, res) {
  const { id } = req.params;

  const employees = await Employee.find(id);

  if (employees) {
      const data = {
          message: "Menampilkan detail data karyawan",
          data: Employee,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }
  }

  async search(req, res) {
    const { name } = req.params;
  
    const employees = await Employee.search(name);
  
    if (employees) {
        const data = {
            message: "Mencari nama karyawan",
            data: employees,
        };
  
        res.status(200).json(data);
    }
    else {
        const data = {
            message: "Data tidak ada",
        };
  
        res.status(404).json(data);
    }
    }

    async find(req, res) {
  const { id } = req.params;

  const employees = await Employee.find(id);

  if (employees) {
      const data = {
          message: "Menampilkan detail data karyawan",
          data: Employee,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }
  }

  async active(req, res) {
    const employees = await Employee.status('active');

    const data = {
        message: "Menampilkan data Karyawan yang active",
        data: employees
    };

    res.status(200).json(data);
  }

  async inactive(req, res) {
    const employees = await Employee.status('inactive');

    const data = {
        message: "Menampilkan data Karyawan yang inactive",
        data: employees
    };

    res.status(200).json(data);
  }

  async terminated(req, res) {
    const employees = await Employee.status('terminated');

    const data = {
        message: "Menampilkan data Karyawan yang terminated",
        data: employees
    };

    res.status(200).json(data);
}
}

// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;
