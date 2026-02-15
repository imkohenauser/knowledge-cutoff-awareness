#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Source directory: .agent/skills/knowledge-cutoff-awareness inside the package
const sourceDir = path.join(__dirname, '..', '.agent', 'skills', 'knowledge-cutoff-awareness');

// Target directory: .agent/skills/knowledge-cutoff-awareness in the current working directory
// Assumes user runs this from their project root
const targetBaseDir = path.join(process.cwd(), '.agent', 'skills');
const targetDir = path.join(targetBaseDir, 'knowledge-cutoff-awareness');

console.log(`Installing knowledge-cutoff-awareness skill...`);
console.log(`Source: ${sourceDir}`);
console.log(`Target: ${targetDir}`);

if (!fs.existsSync(sourceDir)) {
  console.error(`Error: Source directory not found at ${sourceDir}`);
  process.exit(1);
}

// Create target parent directory (.agent/skills)
if (!fs.existsSync(targetBaseDir)) {
  console.log(`Creating directory: ${targetBaseDir}`);
  fs.mkdirSync(targetBaseDir, { recursive: true });
}

// Recursive copy function
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to);
  }

  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

try {
  copyFolderSync(sourceDir, targetDir);
  console.log(`\n✅ Skill installed successfully to ${targetDir}`);
  console.log(`You can now use the skill in your agent configuration.`);
} catch (err) {
  console.error(`\n❌ Installation failed:`, err);
  process.exit(1);
}
