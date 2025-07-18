const fs = require('fs-extra');
const path = require('path');

// 修正: gatsby/public → electron/public にコピー
const srcDir = path.resolve(__dirname, '../gatsby/public');
const destDir = path.resolve(__dirname, '../dist');

// コピー実行
fs.copy(srcDir, destDir, { overwrite: true })
    .then(() => {
        console.log('✅ Gatsby build copied to electron/public');
    })
    .catch((err) => {
        console.error('❌ Failed to copy Gatsby build:', err);
        process.exit(1);
    });
