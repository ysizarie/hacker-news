import axios from 'axios'

const resource = 'https://hacker-news.firebaseio.com/v0/'

class StoriesModel {
  getStories () {
    return axios({
      method: 'GET',
      url: `${resource}topstories.json`
    })
  }
  getStoryInfo (id) {
    return axios({
      method: 'GET',
      url: `${resource}item/${id}.json`
    })
  }
  getAuthorInfo (id) {
    return axios({
      method: 'GET',
      url: `${resource}user/${id}.json`
    })
  }
}

export default new StoriesModel()
