var Generator = require('yeoman-generator');

module.exports = Generator.extend({
    prompts: function() {
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
            this.name = answers.name;
            this.description = answers.description;
        });
    },
    initialCopy: function() {
        this.fs.copy(
            this.templatePath('frame/'),
            this.destinationPath(this.name)
        );
    },
    end: function() {
        var npmDir = process.cwd() + '/' + this.name;
        process.chdir(npmDir);
        this.installDependencies({
            bower: false,
            npm: true
        });
    }
});