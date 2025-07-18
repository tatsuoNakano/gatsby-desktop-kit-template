// electron/config.js
const dotenv = require('dotenv');
dotenv.config();

const CONFIG = {
  name: process.env.ELECTRON_NAME || 'GatsbyDesktopKit',
  version: process.env.ELECTRON_VERSION || '0.0.1',
  author: process.env.ELECTRON_AUTHOR || 'Unknown',
  description: process.env.ELECTRON_DESCRIPTION || '',
  port: process.env.ELECTRON_PORT || 9003,
};

module.exports = CONFIG;
