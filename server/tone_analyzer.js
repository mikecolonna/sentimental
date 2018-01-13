//start.js
var spawn = require('child_process').spawn,
    py    = spawn('python', ['tweet_puller.py']),
    data = [],
    dataString = '';

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');


py.stdout.on('data', function(data){

  dataString += data.toString();
});

var tone_analyzer = new ToneAnalyzerV3({
  username: "657ff540-0f0e-4398-8e2b-c17bae7ccc67",
  password: "QgCV0WFkbB32",

  version_date: '2017-09-21'
});

var params = {
  'tone_input': require('./tone.json'),
  'content_type': 'application/json'
};


tone_analyzer.tone(params, function(error, response) {
  if (error)
    console.log('error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
  }
);

py.stdin.write(JSON.stringify(data));
py.stdin.end();

module.exports = {
    toneAnalyzer: tone_analyzer
};
