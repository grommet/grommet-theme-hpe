#!/usr/bin/env node
/**
 * Codemod dispatcher CLI for grommet-theme-hpe
 * Usage: node node_modules/grommet-theme-hpe/codemod <transform> <path> [--dry]
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);

function getAllFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, exts));
    } else if (exts.includes(path.extname(filePath).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

function printHelp() {
  /* eslint-disable no-console */
  console.log(`\nGrommet Theme HPE Codemod\n`);
  console.log(
    `Usage: node node_modules/grommet-theme-hpe/codemod <transform> <path> [options]\n`,
  );
  console.log(`Transforms:`);
  console.log(`  migrate-tshirt-sizes   Migrate v6 t-shirt sizes to v7`);
  console.log(`Options:`);
  console.log(`  --dry      Run in dry mode (no changes)`);
  console.log(`  --scan     Scan for t-shirt sizes without transforming`);
  console.log(`  --verbose  Set verbosity level (0, 1, or 2). Default is 0`);
  console.log(
    `  --quote    Set quote style (single or double). Default is double`,
  );
  console.log(`  --help     Show this help message`);
  console.log(`\nExample usage:`);
  console.log(
    `  node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --scan\n`,
    `  node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/\n`,
    `  node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --dry\n`,
    `  node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --quote single --dry\n`,
    `  node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --verbose 1 --dry\n`,
    `  node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --verbose 1\n`,
    `  node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --verbose 2\n`,
  );
  /* eslint-enable no-console */
}

// Move scan check to the BEGINNING
if (process.argv.includes('--scan')) {
  /* eslint-disable no-console */
  console.log('🔍 Scanning for t-shirt sizes...\n');

  // Get transform and target from args
  const transform = args[0];
  const target = args[1];

  const transforms = {
    'migrate-tshirt-sizes': path.join(__dirname, 'migrate-tshirt-sizes.js'),
  };

  if (!transforms[transform]) {
    console.error(`Unknown transform: ${transform}`);
    process.exit(1);
  }

  let filesToProcess = [];
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    filesToProcess = getAllFiles(target, ['.js', '.jsx', '.ts', '.tsx']);
  } else {
    filesToProcess = [target];
  }

  // Batch files by extension
  const tsFiles = filesToProcess.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return ext === '.ts' || ext === '.tsx';
  });
  const jsFiles = filesToProcess.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return ext === '.js' || ext === '.jsx';
  });

  // Build and run scan command
  try {
    if (tsFiles.length > 0) {
      execSync(
        `npx jscodeshift --parser=tsx --extensions=ts,tsx -t "${transforms[transform]}" --scan=true ${tsFiles.map((f) => `"${f}"`).join(' ')}`,
        { stdio: 'inherit' },
      );
    }
    if (jsFiles.length > 0) {
      execSync(
        `npx jscodeshift --extensions=js,jsx -t "${transforms[transform]}" --scan=true ${jsFiles.map((f) => `"${f}"`).join(' ')}`,
        { stdio: 'inherit' },
      );
    }
  } catch (error) {
    console.error('Scan failed:', error.message);
    process.exit(1);
  }

  console.log(
    '\n✅ Scan complete. Files listed above contain t-shirt sizes that may need review.',
  );
  /* eslint-enable no-console */
  process.exit(0);
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
  /* eslint-disable no-console */
  console.error(`Unknown transform: ${transform}`);
  /* eslint-enable no-console */
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
  !Number.isNaN(Number(args[verboseIndex + 1]))
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
      }" ${tsFiles.map((f) => `"${f}"`).join(' ')}`,
      { stdio: 'inherit' },
    );
    if (!dry) {
      /* eslint-disable no-console */
      console.log(
        '✅  Migration to Grommet Theme HPE v7 t-shirt sizes complete!',
      );
      console.warn('⚠️   WARNING: Review any deprecation warnings.');
      console.warn('⚠️   WARNING: Fix any other manual changes needed.');
      /* eslint-enable no-console */
    }
  } catch (err) {
    hadError = true;
    /* eslint-disable no-console */
    console.error('Error processing TypeScript files');
    /* eslint-enable no-console */
  }
}

// js/jsx files
if (jsFiles.length > 0) {
  try {
    execSync(
      `npx jscodeshift ${dryFlag} ${verboseFlag} ${quoteFlag} --extensions=js,jsx -t "${
        transforms[transform]
      }" ${jsFiles.map((f) => `"${f}"`).join(' ')}`,
      { stdio: 'inherit' },
    );
    if (!dry) {
      /* eslint-disable no-console */
      console.log(
        '✅  Migration to Grommet Theme HPE v7 t-shirt sizes complete!',
      );
      console.warn('⚠️   WARN: Review any deprecation warnings.');
      console.warn('⚠️   WARN: Fix any other manual changes needed.');
      /* eslint-enable no-console */
    }
  } catch (err) {
    hadError = true;
    // eslint-disable-next-line no-console
    console.error('Error processing JS/JSX files');
  }
}

if (hadError) {
  process.exit(1);
}
