module.exports = (grunt) ->

  grunt.initConfig
    clean:
      dev:
        src:['build']

    copy:
      dev:
        cwd: 'src'
        src: '**'
        dest: 'build/'
        expand: true


  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-copy'



  grunt.registerTask 'default', [ 'clean:dev','copy:dev' ]
