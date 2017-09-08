const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator{
    prompts() {
        this.log(yosay(
          'Welcome to the posh ' + chalk.green('custom-chart') + ' generator!'
        ));

        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your custom-chart name?',
            defualt: 'custom-chart'//this.appname
        }, {
            type: 'input',
            name: 'description',
            message: 'What is your project\'s description?'
        }]).then((answers) => {
            this.name = answers.name;
            this.description = answers.description;
        });
    }

    initialCopy() {
        this.fs.copyTpl(
            this.templatePath(''),
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
        console.log('rrrr')
        var npmDir = process.cwd() + '/' + this.name;
        process.chdir(npmDir);
        this.installDependencies({
            bower: false,
            npm: true
        });
    }
};