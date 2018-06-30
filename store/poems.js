import shortId from 'shortid'
import moment from 'moment'
import axios from 'axios'

const BASE_URL = 'http://localhost:3030'

export const state = () => ({
  list: [],
})

export const actions = {
  async add(state, poem) {
    const p = {
      id: shortId.generate(),
      contents: poem.contents,
      timestamp: Math.floor(moment().format('x') / 1000)
    }

    state.commit('add', p)

    let data = {}

    try {
      data = await axios.post(BASE_URL + '/poems', p)
      return data
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  async list(state) {
    let response = {}

    try {
      response = await axios.get(BASE_URL + '/poems')

      state.commit('update', response.data)

      return response.data
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

export const mutations = {
  add(state, p) {
    state.list.push(p)
  },
  update(state, poems) {
    state.list = poems
  }
}

export const getters = {
  all: state => {
    return state.list
  }
}
