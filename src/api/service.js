let YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_AUTH_KEY = 'AIzaSyA-l8TEo-5QyKbxekK1r_i6L8pU7znC47I';
// key Ju AIzaSyA-l8TEo-5QyKbxekK1r_i6L8pU7znC47I

export const searchVideos = (searchText) => {
  const URL = `${YOUTUBE_API_URL}/search?part=snippet&q=${searchText}&maxResults=25&key=${YOUTUBE_AUTH_KEY}`;

  // testing url: https://www.googleapis.com/youtube/v3/search?part=snippet&q=search&maxResults=25&key=AIzaSyA-l8TEo-5QyKbxekK1r_i6L8pU7znC47I

  // return new Promise((resolve, reject) => {

  return fetch(URL)
    .then((response) => response.json())
    .then(
      (data) => data,
      (error) => error
    );
};

export const getVideoInfo = (videoId) => {
  const urlParams = `part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_AUTH_KEY}`;
  const URL = `${YOUTUBE_API_URL}/videos?${urlParams}`;

  // return new Promise((resolve, reject) => {
  //   resolve(
  return fetch(URL)
    .then((response) => response.json())
    .then(
      (data) => data,
      (error) => error
    );
};

export const getVideoComments = (videoId) => {
  const urlParams = `part=snippet&videoId=${videoId}&textFormat=plainText&key=${YOUTUBE_AUTH_KEY}`;
  const URL = `${YOUTUBE_API_URL}/commentThreads?${urlParams}`;

  // return new Promise((resolve, reject) => {
  //   resolve(
  return fetch(URL)
    .then((response) => response.json())
    .then(
      (data) => data,
      (error) => error
    );
};
