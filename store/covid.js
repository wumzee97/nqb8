import Axios from 'axios'
import { Store } from 'vuex'

export const state = () => ({})

export const mutations = {}

export const getters = {}

export const actions = {
  async summary() {
    const data = await this.$axios.$get(
      '/summary',

      {
        headers: {},
      }
    )

    return data
  },
}
