// Get env vars from .env.dist
// Get them from process.env.*
// Write them to .env

const dotEnvPath = './.env';
const distEnvPath = './.env.dist';
const fs = require('fs');

// Check for .env.dist
if (!fs.existsSync(distEnvPath)) throw 'No .env.dist found'; // eslint-disable-line

// Remove .env
if (fs.existsSync(dotEnvPath)) {
  fs.unlinkSync(dotEnvPath);
  console.info('Removed existing .env file');
} else {
  console.info('No existing .env file');
}

// Read .env.dist for var names
// Get values for var names from process.env.*
// Write key=value\n string in a buffer
console.info('Getting env var names and values');
let dotEnvOut = '';
const envDistRaw = fs.readFileSync(distEnvPath, 'utf-8');
const envDistArr = envDistRaw.split('\n');
envDistArr.forEach((line) => {
  if (line.indexOf('=') !== -1) {
    // Var found
    const varName = line.trim().split('=')[0];
    const varValue = process.env[varName] || '';
    dotEnvOut = `${dotEnvOut}${varName}=${varValue}\n`;
  }
});

// Write .env file
console.info('Writing .env');
fs.writeFileSync(dotEnvPath, dotEnvOut);
