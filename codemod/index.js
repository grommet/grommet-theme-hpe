#!/usr/bin/env node
/**
 * Codemod dispatcher CLI for grommet-theme-hpe
 * Usage: node node_modules/grommet-theme-hpe/codemod <transform> <path> [--dry]
 */

const { execSync } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);

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
  console.log(`  --help     Show this help message`);
  console.log(`\nExample:`);
  console.log(
    `  node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes src/ --dry\n`,
  );
}

if (args.includes('--help') || args.length < 2) {
  printHelp();
  process.exit(0);
}

const transform = args[0];
const target = args[1];
const dry = args.includes('--dry');

const transforms = {
  'migrate-tshirt-sizes': path.join(__dirname, 'migrate-tshirt-sizes.js'),
};

if (!transforms[transform]) {
  console.error(`Unknown transform: ${transform}`);
  printHelp();
  process.exit(1);
}

const dryFlag = dry ? '--dry' : '';

try {
  execSync(
    `npx jscodeshift -t "${transforms[transform]}" ${target} ${dryFlag} --extensions=js,jsx,ts,tsx`,
    { stdio: 'inherit' },
  );
} catch (err) {
  process.exit(err.status || 1);
}
