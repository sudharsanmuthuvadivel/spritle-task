const { Sample } = require('../models');

const createEmployee = async (req, res) => {
  try {
    const payload = req.body;
    if (!payload) {
      return res.status(400).json({
        mas: 'Bad Request',
        data: null,
        statusCode: 400,
      });
    }
    const createData = await Sample.create(payload);
    return res.status(200).json({
      mas: 'Success',
      data: createData,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      mas: 'Internal Server Error',
      error: JSON.stringify(error),
      statusCode: 500,
    });
  }
};

const getAllEmployee = async (req, res) => {
  try {
    const getData = await Sample.find().sort({ employeeName: 1 });
    if (getData) {
      return res.status(200).json({
        mas: 'Success',
        data: getData,
        statusCode: 200,
      });
    }
    return res.status(404).json({
      mas: 'Not Found',
      statusCode: 404,
    });
  } catch (error) {
    return res.status(500).json({
      mas: 'Internal Server Error',
      error,
      statusCode: 500,
    });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        mas: 'Bad Request',
        data: null,
        statusCode: 400,
      });
    }
    const getData = await Sample.findById({ _id: id });
    if (getData) {
      return res.status(200).json({
        mas: 'Success',
        data: getData,
        statusCode: 200,
      });
    }
    return res.status(404).json({
      mas: 'Not Found',
      statusCode: 404,
    });
  } catch (error) {
    return res.status(500).json({
      mas: 'Internal Server Error',
      error,
      statusCode: 500,
    });
  }
};

const getEmployeeByQuery = async (req, res) => {
  try {
    const { query } = req;
    if (!query) {
      return res.status(400).json({
        mas: 'Bad Request',
        data: null,
        statusCode: 400,
      });
    }
    const getData = await Sample.find({ ...query });
    if (getData) {
      return res.status(200).json({
        mas: 'Success',
        data: getData,
        statusCode: 200,
      });
    }
    return res.status(404).json({
      mas: 'Not Found',
      statusCode: 404,
    });
  } catch (error) {
    return res.status(500).json({
      mas: 'Internal Server Error',
      error,
      statusCode: 500,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    if (!id) {
      return res.status(400).json({
        mas: 'Bad Request',
        data: null,
        statusCode: 400,
      });
    }
    const updatedData = await Sample.updateOne({ _id: id }, { $set: payload }, { new: true });
    return res.status(200).json({
      mas: 'Success',
      data: updatedData,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({
      mas: 'Internal Server Error',
      error,
      statusCode: 500,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await Sample.deleteOne({ _id: id });
    if (deletedData) {
      return res.status(200).json({
        mas: 'Success',
        data: deletedData,
        statusCode: 200,
      });
    }
  } catch (error) {
    return res.status(500).json({
      mas: 'Internal Server Error',
      error,
      statusCode: 500,
    });
  }
};

module.exports = {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  getEmployeeByQuery,
  updateEmployee,
  deleteEmployee,
};
