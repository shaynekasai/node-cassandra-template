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

    cssmin: {
	minify: {
		expand: true,
		cwd: 'src/css/',
		src: ['*.css', '!*.min.css'],
		dest: 'build/assets/css/',
		ext: '.min.css'
	}	
    },

    liquid: {
	pages: {
		files: [
			{
				expand: true, 
				flatten: true, 
				cwd: 'src/liquid/', 
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'liquid']);

};
