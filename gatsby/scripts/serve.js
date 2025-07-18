// gatsby/scripts/serve.js
const { spawn } = require('child_process');
const path = require('path');
const dotenv = require('dotenv');

// .env を読み込む
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.GATSBY_SERVE_PORT || '9000';

console.log(`📦 Gatsby serve on port ${port}...`);

const serve = spawn('npx', ['gatsby', 'serve', '-p', port], {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'inherit',
  shell: true,
});
