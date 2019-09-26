Radarr Mass Delete Low Rating Movies
===

The Script to clean up your library from shitty movies based on the IMDB Rating.

The Script fetches all the movies, you have in the database and then fetches rating from IMDB for every movie and compares the movie rating with the rating set up by User.


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
