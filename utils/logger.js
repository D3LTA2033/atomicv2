const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, 'activity.log');

function log(msg) {
  const logEntry = `[INFO] ${new Date().toISOString()} - ${msg}\n`;
  fs.appendFileSync(logFile, logEntry);
}

function warn(msg) {
  const warnEntry = `[WARN] ${new Date().toISOString()} - ${msg}\n`;
  fs.appendFileSync(logFile, warnEntry);
}

module.exports = { log, warn };
