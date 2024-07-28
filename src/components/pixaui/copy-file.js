const fs = require('fs');
const path = require('path');

console.log('Current directory:', __dirname);
console.log('Environment variable INIT_CWD:', process.env.INIT_CWD);

const buttonv2File = path.join(__dirname, 'buttonv2.jsx');
const projectRoot = process.env.INIT_CWD || process.cwd();
const destinationFile = path.join(projectRoot, 'src', 'components', 'pixaui', 'buttonv2.jsx');

console.log('Source file:', buttonv2File);
console.log('Destination file:', destinationFile);

const destinationDir = path.dirname(destinationFile);
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

fs.copyFile(buttonv2File, destinationFile, (err) => {
  if (err) throw err;
  console.log('buttonv2.jsx is installed at src/components/pixaui');
});
