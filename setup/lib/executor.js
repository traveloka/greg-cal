const { execSync } = require('child_process');

module.exports = function (workingDirectory) {
    return {
        exec: function (command) {
            execSync(command, { cwd: workingDirectory  ,stdio: 'inherit' });
        }
    }
}