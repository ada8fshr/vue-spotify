import request from './../request'

export default {
  getTracks(offset = 0, limit = 50, market) {
    return request.get(`me/tracks`, {
      params: {
        limit,
        offset,
        market
      }
    });
  },

  getAlbums(offset = 0, limit = 50, market) {
    return request.get(`me/albums`, {
      params: {
        limit,
        offset,
        market
      }
    });
  }
};

