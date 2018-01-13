var spawn = require('child_process').spawn,
    py    = spawn('python', ['tweet_puller.py']),
    data = [],
    dataString = '',
    username = '',
    location   = '',
    tweets     ='',
    tones = [];

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

py.stdout.on('data', function(data){
  dataString += data.toString();
});

py.stdout.on('end', function(){

  parsed_data = JSON.parse(dataString)

  username = parsed_data.username
  location = parsed_data.location

  console.log('User Info:')
  console.log(`Username: ${username} \nLocation: ${location}\n`);

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
    console.log("Overall tone: ")
    var response_tones = response.document_tone.tones
    // tones.push(response_tones)

    for(i of response.document_tone.tones){
        tones[i.tone_name] =  i.score
    }
      // console.log(i.tone_name, i.score)
    // console.log(JSON.stringify(response, null, 2))
    console.log(tones)
  }
)

// .then(response => {
//   tone = JSON.stringify(response, null, 2)
//   console.log("WHATS THIS  DO ", tone  )
// })

// console.log("WHATS THIS  DO ", tone  )
// console.log("WHATS THIS  DO ", tone  )
//
// console.log("NOTHING")
//
// py.stdin.write(JSON.stringify(data));
// py.stdin.end();
