import { GetterTree, ActionTree, MutationTree } from 'vuex'

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
    const path = require('path')
    const globby = require('globby')
    const dir = 'content/submissions/*.json'
    const paths = await globby(dir)

    await commit(
      'SUBMISSIONS',
      paths.map((glob: any) => path.basename(glob, '.json'))
    )
  },
}
