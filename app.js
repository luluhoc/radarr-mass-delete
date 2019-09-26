const request = require('request');
const rp = require('request-promise');

// settings
const radarrAPI = 'YOUR_API_KEY' // API Key From Radarr
const addExclusion = true; // true if you want to add exclusions // default true
const deleteFiles = true // true if you want to delete movie from disk // default true
const keyOmdb = 'KEY_TO_OMDB'; // https://www.omdbapi.com/
const desiredRating = 6 // all the movies below and equal to this rating are gonna be deleted
const radarrUrl = 'https://radarr.YOURDOMAIN.com/api/movie/'

const radarrGet = {
  uri: `${radarrUrl}`,
  headers: {
    'User-Agent': 'request',
    'X-Api-Key': radarrAPI,
  }
};

function deleteMovies() {
  rp(radarrGet)
    .then((body) => {
      const data = JSON.parse(body)
      data.forEach(e => {
        const movie = {
          rId: e.id,
          imdbId: e.imdbId,
          title: e.title,
        }
        rp(`http://www.omdbapi.com/?apikey=${keyOmdb}&i=${movie.imdbId}`)
          .then((body) => {
            const data = JSON.parse(body);
            movie.imdbVotes = data.imdbVotes;
            movie.imdbRating = Number(data.imdbRating);
            if (movie.imdbRating <= desiredRating) {
              console.log(`Deleted ${movie.title}`)
              var options = {
                method: 'DELETE',
                uri: `${radarrUrl}${movie.rId}?addExclusion=${addExclusion}&$deleteFiles=${deleteFiles}`,
                headers: {
                  'User-Agent': 'request',
                  'X-Api-Key': radarrAPI,
                }
              };
              rp(options).then((item) => console.log(item)).catch(err => console.log(err))
            }
          })
          .catch(err => console.log(err))
      })
    })
    .catch(err => console.log(err))
};

deleteMovies()
