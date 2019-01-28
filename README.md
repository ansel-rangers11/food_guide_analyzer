## Inspiration
In 1942, the first Canadian food guide was released, supported by the need of maintaining good health during a time when wartime rations were common. On January 2019, the latest food guide is announced, now including the newest nutritional research, giving the food guide a complete makeover. Even as the food guide becomes more accessible than ever before, it is still difficult to make those changes in our daily lives. This is when PlatePal realized that everyone needs a food companion, a web app that will support our every meal. PlatePal aims to take part in a user's day to day life, providing instant feedback on their progress to healthy eating.

## What it does
PlatePal invites the user to create a food diary, and document their daily intake with our mobile friendly web app. Before each meal, the user would be able to take a photo of their food, and PlatePal will return to the user a list of ingredients for the user to sift through along with three sliders for the three categories of food. The user will easily be able to indicate what percentage of their plate is made up of fruits & vegetables, grains, or proteins. The past ingredients will be displayed in a word cloud, and past proportions of food categories in a line graph. PlatePal will continue to support each user's journey to great health.

## How we built it
The front end is built with React, back-end with Express.js. The data is currently stored in SQLite, with hosting provided by Azure. The image processing is completed by Azure Computer Vision, which returns a JSON object for us to parse.

## Challenges we ran into
Towards the beginning of our project, the greatest challenge was making the API call. We have never experienced sending any images during an API call, and that took us a long time to experiment with. In the later half, we also struggled with hosting our web app on a domain. External to our code, we also realized a few hours in to the hackathon that the computer vision API that we were using wasn't accurate or detailed enough for our project. In the end, we accommodated all of these challenges with different workarounds, or by seeking the mentorship of others.

## Accomplishments that we're proud of
We are proud that we are taking part in solving the health crises that is occurring in Canada, and supporting those who are closest to us in taking steps to healthy living. Through historical user data, we have been able to generate useful graphs to show the user their continuous improvements towards their goals.

## What we learned
Through PlatePal, we are able to recognize the current limitations of computer vision, but we are also able to see all the possible improvements that are to come. Each one of us have learned new skills coming out of this project, whether that may be about healthy eating, React, Express.js, JavaScript or SQL.

## What's next for PlatePal
With more time, the data for PlatePal will be moved to MongoDB, calorie count per dish calculated, and the computer vision model custom trained.

## Built With
express.js
react
azure
css
javascript

## See more: https://devpost.com/software/platepal
## Team: Yutian Lin, Ansel Hartanto, Jasper Chan, Angela Dai
