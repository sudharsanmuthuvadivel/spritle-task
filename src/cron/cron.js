/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const cron = require('node-cron');
const axios = require('axios');
const fs = require('fs');

const task = cron.schedule('9 19 * * *', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/get-all-employee');

    console.log(response.status, 'oooooooo');

    if (response.status === 200) {
      fs.appendFile('./succes.json', [JSON.stringify({ date: new Date(), data: response.data })], (err) => {
        if (err) {
          console.error('Error appending data to file:', err);
          return;
        }
        console.log('Data appended to file successfully.');
      });
    } else {
      console.log('Authentication API failed with status:', response.status);
      fs.appendFile('error.json', [JSON.stringify({ date: new Date(), error: response.status })], (err) => {
        if (err) {
          console.error('Error appending data to file:', err);
          return;
        }
        console.log('Data appended to file successfully.');
      });
    }
  } catch (error) {
    console.error('Error calling authentication API:', error.message);
    fs.appendFile('error.json', [JSON.stringify({ date: new Date(), error: error.message })], (err) => {
      if (err) {
        console.error('Error appending data to file:', err);
        return;
      }
      console.log('Data appended to file successfully.');
    });
  }
});
task.start();

task.on('error', (err) => {
  console.error('Cron job error:', err);
});
