const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const writePackage = require('write-pkg');
const rimraf = require('rimraf');
const files = require('./lib/files');
const wizard = require('./lib/wizard');
const executor = require('./lib/executor');
const defaultPackageInfo = require('../package.json');

const welcome = () => {
  clear();
  console.log(chalk.yellow(figlet.textSync('Web Package Template')));
};

const run = async () => {
  welcome();
  try {
    const { owner, ...packageInfo } = await wizard.askPackageInfo();
    const newPackageInfo = {
      ...defaultPackageInfo,
      ...packageInfo,
    };

    delete newPackageInfo.scripts.setup;

    newPackageInfo['repository'] = defaultPackageInfo['repository'].replace(
      'web-package-template',
      packageInfo.name
    );
    newPackageInfo['umd:main'] = defaultPackageInfo['umd:main'].replace(
      'web-package-template',
      packageInfo.name
    );
    newPackageInfo['module'] = defaultPackageInfo['module'].replace(
      'web-package-template',
      packageInfo.name
    );
    newPackageInfo['bundlesize'][0]['path'] = defaultPackageInfo[
      'bundlesize'
    ][0]['path'].replace('web-package-template', packageInfo.name);
    newPackageInfo['version'] = '0.0.0';

    // Set working directory to root
    const workingDir = path.join(files.getCurrentDirectoryBase(), '../../');
    const executorInstance = executor(workingDir);

    // Write package json
    await writePackage(workingDir, newPackageInfo);

    // reset changelog
    executorInstance.exec("echo '' > CHANGELOG.md");
    // update code owners
    executorInstance.exec(`echo '* ${owner}' > .github/CODEOWNERS`);

    rimraf(path.join(workingDir, 'yarn.lock'), () => {
      console.log(chalk.yellow('\nInstalling dependencies...\n'));
      executorInstance.exec('yarn');

      console.log(chalk.yellow('\nClearing setup files...\n'));
      rimraf(
        path.join(files.getCurrentDirectoryBase(), '../../setup'),
        () => {}
      );

      console.log(chalk.green('\nSetup Done!\n'));
    });
  } catch (e) {
    console.log('\n' + chalk.red(e.message) + '\n');
    process.exit();
  }
};

run();
