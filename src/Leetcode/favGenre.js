function favGenre(userSongs, songGenres) {
  let result = new Map();
  for (let [user, songs] of userSongs.entries()) {
    result.set(user, new Map());
    for (let song of songs) {
      for (let songGenre of [...songGenres.keys()]) {
        if (songGenres.get(songGenre).includes(song)) {
          let userMap = result.get(user);
          if (!userMap.has(songGenre)) userMap.set(songGenre, 1);
          else {
            userMap.set(songGenre, userMap.get(songGenre) + 1);
          }
        }
      }
    }
    const favGenreValue = Math.max(...result.get(user).values());
    const userValue = result.get(user);
    for (let key of userValue.keys()) {
      if (userValue.get(key) !== favGenreValue) {
        userValue.delete(key);
      }
    }
    result.set(user, [...userValue.keys()]);
  }
  return result;
}

const userSongs = new Map();
userSongs.set("David", ["song1", "song2", "song3", "song4", "song8"]);
userSongs.set("Emma", ["song5", "song6", "song7"]);

const songGenres = new Map();
songGenres.set("Rock", ["song1", "song3"]);
songGenres.set("Dubstep", ["song7"]);
songGenres.set("Techno", ["song2", "song4"]);
songGenres.set("Pop", ["song5", "song6"]);
songGenres.set("Jazz", ["song8", "song9"]);

console.log(favGenre(userSongs, songGenres));
