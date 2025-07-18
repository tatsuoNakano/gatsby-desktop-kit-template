// gatsby/scripts/start.js
const { spawn } = require('child_process');
const path = require('path');
const dotenv = require('dotenv');

// .env ファイルを明示的に読み込む
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.GATSBY_PORT || '8000';

console.log(`🚀 Starting Gatsby on port ${port}`);

const dev = spawn('npx', ['gatsby', 'develop', '-p', port], {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'inherit',
  shell: true,
});
