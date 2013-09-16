module.exports = function(grunt) {


	grunt.initConfig({
		watch: {
			
		}
	});


	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);

};