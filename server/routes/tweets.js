const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// var express = require('express');
const express = require('express');
const router = express.Router();
const fs      = require('fs');
const Twitter = require('twitter');
let username   = '',
location   = '',
tweets     ='';

const client = new Twitter ({
    consumer_key: '1Q29XiMI0xvPfNrVEdxrDkieb',
    consumer_secret: '6Z4lLiNUOGdCkr1c37m7ZaVdZcfoGnbq8NiemjorKDgIcvw040',
    access_token_key: '811323013-OS2XFILfROSixWVlz761tCFS6rjlXORU45IHVUeQ',
    access_token_secret: 'VD0MWHzaQNFCtpFzZpB1wngMCr2I6Gr2de1H6UmngYSzf'
});

//const auth = require('./auth');

//router.use('/', auth.checkAuth);

router.get('/', function(req, res, next) {
    res.send(tweets.getAllTweets());
});

router.post('/', function(req, res, next) {
    const twitParams = {screen_name: req.body.user, include_rts: 'false', count : 100};

    client.get('statuses/user_timeline', twitParams, function(error, tweets, response) {
        if (!error) {
            const tweet_texts = tweets.map( (tweet) => {
                return tweet.text
            })

            const text = {"text": tweet_texts.join('')}

            const tone_analyzer = new ToneAnalyzerV3({
                username: "657ff540-0f0e-4398-8e2b-c17bae7ccc67",
                password: "QgCV0WFkbB32",

                version_date: '2017-09-21'
            });

            const toneParams = {
                'tone_input': text,
                'content_type': 'application/json'
            };

            tone_analyzer.tone(toneParams, function(error, response) {
                if (error) {
                    console.log('error:', error);
                    res.status(500).send('Error analyzing tone');
                }  else {
                    res.status(200).send(
                        response.document_tone.tones
                            .reduce((tones, {tone_name, score}) => {
                                tones[tone_name] = score
                                return tones
                            }, {})
                    );
                }
            });
        } else {
            res.status(500).send('Error retrieving tweets');
        }
    });
});

module.exports = router;
