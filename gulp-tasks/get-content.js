var project  = require('./_project.js');
var gulp     = require('gulp');
var axios    = require('axios');
var gravatar = require('gravatar');

// load environment variables

// Collect and stash comments for the build
gulp.task("get:content", function(done) {

   var url = "https://test-content-source.netlify.com/feeds/news.json";
  axios.get(url)
    .then(function (response) {
      console.log('response :', response.data);
        project.storeData(project.buildSrc + '/site/_data/news.json', JSON.stringify(response.data));
        done();
    })
    .catch(function (error) {
      console.log(error);
      done();
    });
});
