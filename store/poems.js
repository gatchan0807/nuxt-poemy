import shortId from 'shortid'
import moment from 'moment'

export const state = () => ({
  list: []
})

export const mutations = {
  add(state, poem) {
    state.list.push({
      id: shortId.generate(),
      contents: poem.contents,
      timestamp: moment().format('x')
    })
  }
}

export const getters = {
  all: state => {
    return state.list
  }
}
