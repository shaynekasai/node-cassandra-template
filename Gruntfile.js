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
			dest: 'build/assets/js/',
			ext: '.min.js'
		}]
	}
    },


    liquid: {
	pages: {
		files: [
			{
				expand: true, 
				flatten: true, 
				cwd: 'liquid/', 
				src: '*.html', 
				dest: 'build/', 
				ext: '.html'
			}
		]
	}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-liquid');
  // Default task(s).
  grunt.registerTask('default', ['uglify','liquid']);

};
