'use strict';
const axios = require('axios');
export const getImages = nameSearch => {
   const baseUrl = `https://pixabay.com/api/?key=22644758-91a56f4647f302f87ea071930&q=${nameSearch}&image_type=photo&orientation=horizontal&safesearch=true`;
}