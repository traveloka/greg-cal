const inquirer = require('inquirer');

module.exports = {
  askPackageInfo: () => {
    const questions = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter your package name (@traveloka/[your package name]):',
        validate: function (value) {
          //^(?:@[a-z0-9-~][a-z0-9-._~]*/)?[a-z0-9-~][a-z0-9-._~]*$
          if (value.length) {
            return true;
          } else {
            return 'Please enter your package name.';
          }
        },
      },
      {
        name: 'owner',
        type: 'input',
        message: "Who's the owner of this package?",
        default: '@traveloka/web',
      },
      {
        name: 'private',
        type: 'confirm',
        message: 'Create private package (default Yes):',
        default: true,
      },
    ];
    return inquirer.prompt(questions);
  },
};
