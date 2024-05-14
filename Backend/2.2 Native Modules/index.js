const fs = require('fs');

fs.readFile('message.txt', 'utf-8', (data) => {
    console.log('File contents:', data);
});