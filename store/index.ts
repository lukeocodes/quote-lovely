import path from 'path'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import globby from 'globby'

export const state = () => ({
  submissions: [] as string[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  submissions: (state) => state.submissions,
}

export const mutations: MutationTree<RootState> = {
  SUBMISSIONS: (state, submissions: []) => (state.submissions = submissions),
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    const dir = 'content/submissions'
    const paths = await globby(dir)

    await commit('SUBMISSIONS', paths)
  },
}
