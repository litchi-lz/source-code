// 用户信息模块(局部模块)
export default {
    namespaced: true, // 开启命名空间
    state() {
        return {
            
        }
    },
    mutations: {
        // 定义mutations，用于同步修改状态
        alterType(state, payload) {
            state.articleType = payload
        },

    },
    actions: {
        // 定义actions，用于异步修改状态
        // 2秒后更新状态
        updateNickname(context, payload) {
            setTimeout(() => {
                context.commit('updateNickname', payload)
            }, 2000)
        }
    },
    getters: {
        // 定义一个getters
        formatNickname(state) {
            return 'Hi ' + state.profile.nickname
        }
    }
}