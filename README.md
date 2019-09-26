Radarr Mass Delete Low Rating Movies
===
The Script will clean up your library from shitty movies based on the IMDB Rating.

The Script fetches all the movies, you have in the database, then fetches rating from IMDB for every movie and compares the movie rating with the rating set up by User.

I've created this script because I had many lists in my Radarr with rating from `8` for auto-add and monitor, but Radarr rating is very misleading so I've ended up with many shitty movies in my collection.

I recommend running this script every month if you wish to have movies based on real IMDB rating in your collection.


How to install and use?
---
1. Download Latest LTS version of Node.js from here https://nodejs.org/en/ and install it on your computer.

2. Download Visual Studio Code which I recommend but you can use any text editor of your choice to fill all the required constants(options) https://code.visualstudio.com/

3. You can run terminal directly in Visual Studio Code or you can open terminal from explorer or finder.

4. When you are in the terminal and you are in the script folder run `npm install`

5. When it will finish installing run `node app.js` to run the script and delete all the shitty movies. 

Options
---
API KEY FROM RADARR
```
const radarrAPI = 'YOUR_API_KEY'
```
Option to add movies to exclusions list in Radarr // `true` will add exclusions // `false` will not add to exclusions
```
const addExclusion = true;
```
Option to delete a movies from disk // `true` will delete movies from disk // `false` will not delete movies from disk
```
const deleteFiles = true;
```
Key for https://www.omdbapi.com/ You can find one for free but I will not share it in here, please support the developers
```
const keyOmdb = 'KEY_TO_OMDB';
```
All the movies below and equal to this rating are gonna be deleted
```
const desiredRating = 6;
```
Url To Your radarr API // Only Domain changes /api/movie/ should stay the same
```
const radarrUrl = 'https://YOURDOMAIN.COM/api/movie/'
```

