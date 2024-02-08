const express = require('express');
const {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  getEmployeeByQuery,
  updateEmployee,
  deleteEmployee,
} = require('../../controllers/sample.controller');

const router = express.Router();

router.post('/create-employee', createEmployee);
router.get('/get-all-employee', getAllEmployee);
router.get('/employee/:id', getEmployeeById);
router.get('/employee', getEmployeeByQuery);
router.put('/update-employee/:id', updateEmployee);
router.delete('/delete-employee/:id', deleteEmployee);

module.exports.sampleRouter = router;
