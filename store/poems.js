import shortId from 'shortid'
import moment from 'moment'
import axios from 'axios'

const BASE_URL = 'http://localhost:3030'

export const state = () => ({
  list: [],
  detailId: '',
})

export const actions = {
  openDetail(state, poem) {
    state.commit('setDetailId', poem.id)
  },
  closeDetail(state) {
    state.commit('removeDetailId')
  },

  async add(state, poem) {
    const p = {
      id: shortId.generate(),
      contents: poem.contents,
      timestamp: moment().format('x')
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

      state.commit('update', response.data.reverse())

      return response.data
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

export const mutations = {
  add(state, p) {
    state.list.unshift(p)
  },
  update(state, poems) {
    state.list = poems
  },
  setDetailId(state, id) {
    state.detailId = id
  },
  removeDetailId(state) {
    state.detailId = ''
  }
}

export const getters = {
  all: state => {
    return state.list
  },
  detail: state => {
    return state.detailId
  }
}
