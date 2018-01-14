var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var express = require('express');
var fs      = require('fs');
var Twitter = require('twitter');
var username   = '',
location   = '',
tones      = [] ,
tweets     ='';

var router = express.Router();

var client = new Twitter ({
    consumer_key: '1Q29XiMI0xvPfNrVEdxrDkieb',
    consumer_secret: '6Z4lLiNUOGdCkr1c37m7ZaVdZcfoGnbq8NiemjorKDgIcvw040',
    access_token_key: '811323013-OS2XFILfROSixWVlz761tCFS6rjlXORU45IHVUeQ',
    access_token_secret: 'VD0MWHzaQNFCtpFzZpB1wngMCr2I6Gr2de1H6UmngYSzf'
});

// router.get('/tweetpuller', function(res, req, next) {
function clickHandler (username){
    var params = {screen_name: username, include_rts: 'false', count : 100};

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            var tweet_texts = tweets.map( (tweet) => {
                return tweet.text
            })

            var text = {"text": tweet_texts.join('')}

            var tone_analyzer = new ToneAnalyzerV3({
                username: "657ff540-0f0e-4398-8e2b-c17bae7ccc67",
                password: "QgCV0WFkbB32",

                version_date: '2017-09-21'
            });

            var params = {
                'tone_input': text,
                'content_type': 'application/json'
            };

            tone_analyzer.tone(params, function(error, response) {
                if (error) {
                    console.log('error:', error);
                }  else {
                    console.log("Overall tone: ")
                    var response_tones = response.document_tone.tones
                    // tones.push(response_tones)

                    for(i of response.document_tone.tones){
                        tones[i.tone_name] =  i.score
                    }
                    // console.log(i.tone_name, i.score)
                    // console.log(JSON.stringify(response, null, 2))
                    return tones;
                }
            });
        }
    });
}
// })
//
// function clickHandler (username){
//
//   var params = {screen_name: username, include_rts: 'false', count : 100};
//
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       var tweet_texts = tweets.map( (tweet) => {
//         return tweet.text
//       })
//
//       var text = {"text": tweet_texts.join('')}
//
//       var tone_analyzer = new ToneAnalyzerV3({
//         username: "657ff540-0f0e-4398-8e2b-c17bae7ccc67",
//         password: "QgCV0WFkbB32",
//
//         version_date: '2017-09-21'
//       });
//
//       var params = {
//         'tone_input': text,
//         'content_type': 'application/json'
//       };
//
//       tone_analyzer.tone(params, function(error, response) {
//         if (error)
//             console.log('error:', error);
//         else {
//             console.log("Overall tone: ")
//             var response_tones = response.document_tone.tones
//             // tones.push(response_tones)
//
//             for(i of response.document_tone.tones){
//               tones[i.tone_name] =  i.score
//             }
//             // console.log(i.tone_name, i.score)
//             // console.log(JSON.stringify(response, null, 2))
//             return tones;
//         }
//     })
//     }
// });
//
// }

module.exports = {
  getInfo : clickHandler
}
