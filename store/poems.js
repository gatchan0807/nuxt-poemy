import shortId from 'shortid'
import moment from 'moment'
import axios from 'axios'

const BASE_URL = 'http://localhost:3030'

export const state = () => ({
  list: [],
})

export const mutations = {
  async add(state, poem) {
    const p = {
      id: shortId.generate(),
      contents: poem.contents,
      timestamp: Math.floor(moment().format('x') / 1000)
    }

    state.list.push(p)

    let data = {}

    try {
      data = await axios.post(BASE_URL + '/poems', p)
    } catch (e) {
      console.log(e)
    }

    console.log(data)
  }
}

export const getters = {
  all: state => {
    return state.list
  }
}
