const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname,  'WordnetNouns.json');

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  let jsonData = JSON.parse(data);

  // Remove the 'Count' key from each object
  jsonData = jsonData.map((item) => {
    const { POS, ...rest } = item;
    return rest;
  });

  // Convert the updated JSON back to a string
  const updatedData = JSON.stringify(jsonData, null, 2);

  // Write the updated JSON back to the file
  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Count key removed and file updated successfully.');
    }
  });
});
