#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jan 11 16:40:16 2018
@author: vmoody
"""
import tweepy # replace all of these
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

 # Using the API object to get tweets from your timeline, and storing it in a variable called public_tweets
"""public_tweets = api.home_timeline()
 # foreach through all tweets pulled
for tweet in public_tweets:
    # printing the text stored inside the tweet object
    print(tweet.text)
    print(tweet.created_at)
    print(tweet.user.screen_name)
    print(tweet.user.location)
"""
##### PART 2: TWEETS FROM A SPECIFIC USER
# Creating the API object while passing in auth information
api = tweepy.API(auth)

 #The Twitter user who we want to get tweets from
name = "joewilliams_tew"
 # Number of tweets to pull
tweetCount = 100
 # Calling the user_timeline function with our parameters
results = api.user_timeline(id=name, count=tweetCount)
tweets = []

import numpy as np
import json

#
# def main():
#     print tweet.user.screen_name,
#     tweet.user.location, tweets
 # foreach through all tweets pulled
for tweet in results:
    # printing the text stored inside the tweet object
    tweets = np.append(tweets, tweet.text)

tweetsJSON = ' '.join(tweets)
print tweetsJSON

data = {}
data ["text"] = tweetsJSON

file_path = "tone.json" ## your path variable

with open(file_path, 'w') as outfile:
    json.dump(data, outfile)



"""
#### PART 3: TWEETS BASED ON KEY WORDS
#Creating the API object while passing in auth information
api = tweepy.API(auth)

# The search term you want to find
query = "victim of domestic abuse"
# Language code (follows ISO 639-1 standards)
language = "en"

# Calling the user_timeline function with our parameters
results = api.search(q=query, lang=language)

# foreach through all tweets pulled
for tweet in results:
   # printing the text stored inside the tweet object
   print(tweet.text)

 """
