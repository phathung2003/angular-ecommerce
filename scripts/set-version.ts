const fs = require('fs');
const packageJson = require('../package.json');

const version = packageJson.version;

// Tạo file version.ts ở src/
const versionFile = `export const VERSION = '${version}';\n`;

fs.writeFileSync('./src/version.ts', versionFile, { encoding: 'utf8' });

console.log(`✅ Version file generated: ${version}`);
