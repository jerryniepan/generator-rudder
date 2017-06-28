const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');


module.exports = class extends Generator{
    prompts() {
        this.log(yosay(
          'Welcome to the posh ' + chalk.green('generator-rudder') + ' generator!'
        ));
        // return;
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your project name?',
            defualt: this.appname
        }, {
            type: 'input',
            name: 'description',
            message: 'What is your project\'s description?'
        }]).then((answers) => {
            console.log('answers.name:', answers.name)
            this.name = answers.name;
            this.description = answers.description;
            if (!this.name) {
                throw chalk.red('Please input your frame name.');
            }
        });
    }

    initialCopy() {
        this.fs.copyTpl(
            this.templatePath('frame/'),
            this.destinationPath(this.name),
            {
                name: this.name,
                description: this.description,
                author: this.user.git.name(),
                email: this.user.git.email()
            }
        );
    }

    end() {
        var npmDir = process.cwd() + '/' + this.name;
        process.chdir(npmDir);
        this.installDependencies({
            bower: false,
            npm: true
        });
    }
};