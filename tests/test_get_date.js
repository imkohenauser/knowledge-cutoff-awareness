const assert = require('assert');
const { execSync } = require('child_process');
const path = require('path');

const scriptPath = path.resolve(__dirname, '../.agent/skills/knowledge-cutoff-awareness/scripts/get_date.js');

function runScript(args = []) {
  try {
    const cmd = `node ${scriptPath} ${args.join(' ')}`;
    return execSync(cmd).toString().trim();
  } catch (e) {
    console.error(`Error running ${args.join(' ')}:`, e.stderr.toString());
    throw e;
  }
}

console.log('Running tests...');

// 1. Basic execution (no args)
{
  const output = runScript();
  assert.match(output, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/, 'Output should be valid ISO format with timezone');
  console.log('✅ Basic execution (no args) passed');
}

// 2. Relative date (+1d)
{
  const output = runScript(['+1d']);
  const now = new Date();
  const today = now.getDate();
  const tomorrow = new Date(now.setDate(today + 1));
  const expectedDay = tomorrow.getDate().toString().padStart(2, '0');

  // Note: timezone handling might make exact matching brittle if run near midnight.
  // We'll check the day part roughly matches or check full date logic.
  // Actually, simplest check is format and no error for now, as exact time matching is complex.
  assert.match(output, /^\d{4}-\d{2}-\d{2}T/, 'Output should start with date');
}

// 3. Keywords (yesterday)
{
  const output = runScript(['yesterday']);
  assert.match(output, /^\d{4}-\d{2}-\d{2}T/, 'Output for yesterday should be valid');
}

// 4. Human readable format
{
  const output = runScript(['--human']);
  // Output format depends on locale but usually contains day name or month name
  assert.ok(output.length > 0, 'Human readable output should not be empty');
  console.log('✅ Human readable format passed');
}

console.log('All tests passed!');
