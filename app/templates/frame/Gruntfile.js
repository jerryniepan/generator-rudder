/**
 * @xiefei bdp grunt file config.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        'bdp-combine': {
            js: {
                'cwd': 'src/',
                'src': ['index.js'],
                'dest': 'dist/'
            }
        },
        'uglify': {
            js: {
                files: [{
                    expand: true,
                    'cwd': 'dist/',
                    'src': ['**/*.js'],
                    'dest': 'build/'
                }]
            }
        },
        'watch': {
            scripts: {
                files: ['src/**/*.*'],
                tasks: ['default']
            },
            options: {
                spawn: false
            }
        },
        'connect': {
            server: {
                options: {
                    port: 9002,
                    base: './'
                }
            }
        },
        'forever': {
            server: {
                options: {
                    index: 'grunt-tools/forever/app.js',
                    logDir: 'grunt-tools/forever/logs'
                }
            }
        }
    });

    //自定义grunt task
    grunt.loadTasks('./grunt-tools');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-forever');

    grunt.registerTask('default', ['bdp-combine','uglify:js']);
    grunt.registerTask('enterjs', ['uglify:enterJs']);
    grunt.registerTask('server', ['default', 'connect', 'watch']);
    grunt.registerTask('start', ['default', 'forever:server:start']);
    grunt.registerTask('restart', ['default', 'forever:server:restart']);
    grunt.registerTask('stop', ['forever:server:stop']);
};
