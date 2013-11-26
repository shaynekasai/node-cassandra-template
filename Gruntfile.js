module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
    	dynamic_mappings: {
		files: [{
			expand: true,
			cwd: 'src/js/',
			src: ['**/*.js'],
			dest: 'build/',
			ext: '.min.js'
		}]
	}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
