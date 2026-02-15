const path = require('path');

module.exports = {
  // Absolute path to the skill directory within this package
  skillPath: path.join(__dirname, '.agent', 'skills', 'knowledge-cutoff-awareness'),

  // Absolute path to the get_date script
  getDateScriptPath: path.join(__dirname, '.agent', 'skills', 'knowledge-cutoff-awareness', 'scripts', 'get_date.js')
};
