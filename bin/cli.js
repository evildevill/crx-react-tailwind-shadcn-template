#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = process.argv.slice(2);
const projectName = args[0] || 'my-chrome-extension';
const projectPath = path.join(process.cwd(), projectName);

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function createProject() {
  try {
    // Check if directory already exists
    if (fs.existsSync(projectPath)) {
      log(`✗ Directory "${projectName}" already exists!`, 'yellow');
      process.exit(1);
    }

    log(`\n🚀 Creating Chrome Extension Project: "${projectName}"\n`, 'cyan');

    // Create directory
    fs.mkdirSync(projectPath, { recursive: true });

    // Get template directory - copy from package root
    const templateDir = path.join(__dirname, '..');

    // Copy template files
    log('📁 Copying template files...', 'blue');
    copyTemplateFiles(templateDir, projectPath);

    // Update package.json name
    log('⚙️  Configuring project...', 'blue');
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packageJson.name = projectName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // Install dependencies
    log('📦 Installing dependencies...', 'blue');
    log('   This may take a minute...\n', 'yellow');
    
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });

    // Success message
    log(`\n✓ Project created successfully!\n`, 'green');
    log(`📂 Project location: ${projectPath}`, 'cyan');
    log(`\n📋 Next steps:\n`, 'blue');
    log(`  1. cd ${projectName}`);
    log(`  2. npm run dev        (start development server)`);
    log(`  3. Load in Chrome: chrome://extensions/ → "Load unpacked" → select dist folder\n`);
    log(`Happy coding! 🎉\n`, 'green');

  } catch (error) {
    log(`\n✗ Error: ${error.message}`, 'yellow');
    process.exit(1);
  }
}

function copyTemplateFiles(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`Template directory not found: ${src}`);
  }

  const files = fs.readdirSync(src);

  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    // Skip node_modules, bin directory, and other non-essential files
    if (['node_modules', '.git', 'dist', '.next', 'bin', '.npmignore', 'NPM_PUBLISH_GUIDE.md', 'PUBLISH_CHECKLIST.sh', 'SETUP_COMPLETE.md'].includes(file)) {
      return;
    }

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyTemplateFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

createProject();
