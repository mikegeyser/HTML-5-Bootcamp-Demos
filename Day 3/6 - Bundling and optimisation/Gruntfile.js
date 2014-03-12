/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    uglify: {
      my_target: {
          files: {
            'dest/output.min.js': ['src/input1.js', 'src/input2.js']
          }
      }
    },
    cssmin: {
      combine: {
        files: {
          'bundle.css': ['one.css', 'two.css']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
