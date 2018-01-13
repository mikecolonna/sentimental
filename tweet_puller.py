import tweepy # replace all of these
import numpy as np
import json

consumer_key = "1Q29XiMI0xvPfNrVEdxrDkieb"
consumer_secret = "6Z4lLiNUOGdCkr1c37m7ZaVdZcfoGnbq8NiemjorKDgIcvw040"
access_token = "811323013-OS2XFILfROSixWVlz761tCFS6rjlXORU45IHVUeQ"
access_token_secret = "VD0MWHzaQNFCtpFzZpB1wngMCr2I6Gr2de1H6UmngYSzf"

####### PART 1: YOUR TIMELINE
# Creating the authentication object
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
# Setting your access token and secret
auth.set_access_token(access_token, access_token_secret)
 # Creating the API object while passing in auth information
api = tweepy.API(auth)

##### PART 2: TWEETS FROM A SPECIFIC USER
# Creating the API object while passing in auth information
api = tweepy.API(auth)

 #The Twitter user who we want to get tweets from
 # REPLACE WITH ON-CLICK COMMAND FRPM
name = "joewilliams_tew"
 # Number of tweets to pull
tweetCount = 100
 # Calling the user_timeline function with our parameters
results = api.user_timeline(id=name, count=tweetCount)
tweets = []

 # foreach through all tweets pulled
for tweet in results:
    tweets = np.append(tweets, tweet.text)

tweetsJSON = ' '.join(tweets)

info = {}
info["username"] = tweet.user.screen_name
info["location"] = tweet.user.location

print json.dumps(info)

data = {}

data["text"] = tweetsJSON


file_path = "tone.json" ## your path variable

with open(file_path, 'w') as outfile:
    json.dump(data , outfile)
