var fs = require('fs');

fs.appendFile('fs_written.txt', 'Hello content!', function (err) {
  if (err) throw err;
	  console.log('Saved!');
	}); 