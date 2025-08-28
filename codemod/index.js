#!/usr/bin/env node
/**
 * Codemod dispatcher CLI for grommet-theme-hpe
 * Usage: node node_modules/grommet-theme-hpe/codemod <transform> <path> [--dry]
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);

function printHelp() {
  /* eslint-disable no-console */
  console.log(`\nGrommet Theme HPE Codemod\n`);
  console.log(
    `Usage: node node_modules/grommet-theme-hpe/codemod <transform> <path> [options]\n`
  );
  console.log(`Transforms:`);
  console.log(`  migrate-tshirt-sizes   Migrate v6 t-shirt sizes to v7`);
  console.log(`Options:`);
  console.log(`  --dry      Run in dry mode (no changes)`);
  console.log(`  --verbose  Set verbosity level (0, 1, or 2). Default is 0`);
  console.log(`  --quote    Set quote style (single or double). Default is double`);
  console.log(`  --help     Show this help message`);
  console.log(`\nExample usage:`);
  console.log(
    `  node node_modules/grommet-theme-hpe/codemod --help\n`,
    ` node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/\n`,
    ` node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --dry\n`,
    ` node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --quote single --dry\n`,
    ` node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --verbose 1 --dry\n`,
    ` node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --verbose 1\n`,
    ` node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --verbose 2\n`
  );
}

// Handle --help flag
if (args.includes('--help') || args.length < 2) {
  printHelp();
  process.exit(0);
}

const transform = args[0];
const target = args[1];

const transforms = {
  'migrate-tshirt-sizes': path.join(__dirname, 'migrate-tshirt-sizes.js'),
};

if (!transforms[transform]) {
  console.error(`Unknown transform: ${transform}`);
  printHelp();
  process.exit(1);
}

// Handle --dry flag
const dry = args.includes('--dry');
const dryFlag = dry ? '--dry' : '';

// Handle --verbose level flag
let verboseLevel = 0;
const verboseIndex = args.indexOf('--verbose');
if (
  verboseIndex !== -1 &&
  args[verboseIndex + 1] &&
  !isNaN(Number(args[verboseIndex + 1]))
) {
  verboseLevel = Number(args[verboseIndex + 1]);
}
const verboseFlag = `-v ${verboseLevel}`;

// Handle --quote flag
let quoteFlag = 'double';
const quoteIndex = args.indexOf('--quote');
if (quoteIndex !== -1 && args[quoteIndex + 1]) {
  const quoteValue = args[quoteIndex + 1];
  if (quoteValue === 'single' || quoteValue === 'double') {
    quoteFlag = `--quote=${quoteValue}`;
  }
}

function getAllFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, exts));
    } else {
      if (exts.includes(path.extname(filePath).toLowerCase())) {
        results.push(filePath);
      }
    }
  });
  return results;
}

let filesToProcess = [];
if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
  filesToProcess = getAllFiles(target, ['.js', '.jsx', '.ts', '.tsx']);
} else {
  filesToProcess = [target];
}

// Batch files by extension for faster processing
const tsFiles = filesToProcess.filter((f) => {
  const ext = path.extname(f).toLowerCase();
  return ext === '.ts' || ext === '.tsx';
});
const jsFiles = filesToProcess.filter((f) => {
  const ext = path.extname(f).toLowerCase();
  return ext === '.js' || ext === '.jsx';
});

let hadError = false;

// ts/tsx files
if (tsFiles.length > 0) {
  try {
    execSync(
      `npx jscodeshift --parser=tsx ${dryFlag} ${verboseFlag} ${quoteFlag} --extensions=ts,tsx -t "${
        transforms[transform]
      }" ${tsFiles.map((f) => '"' + f + '"').join(' ')}`,
      { stdio: 'inherit' }
    );
  } catch (err) {
    hadError = true;
    console.error('Error processing TypeScript files');
  }
}

// js/jsx files
if (jsFiles.length > 0) {
  try {
    execSync(
      `npx jscodeshift ${dryFlag} ${verboseFlag} ${quoteFlag} --extensions=js,jsx -t "${
        transforms[transform]
      }" ${jsFiles.map((f) => '"' + f + '"').join(' ')}`,
      { stdio: 'inherit' }
    );
    console.log('✅  Migration to Grommet Theme HPE v7 t-shirt sizes complete!');
    console.warn('⚠️   WARN: Review any deprecation warnings.');
    console.warn('⚠️   WARN: Fix any other manual changes needed.');
  } catch (err) {
    hadError = true;
    console.error('Error processing JS/JSX files');
  }
}
if (hadError) {
  process.exit(1);
}
