import getRandomInt from "@/helpers/getRandomInt"

export const incrementRandomInt = async(context) => {
    context.commit('setLoading')
    const rndInt = await getRandomInt()
    context.commit('incrementBy', rndInt)
    context.commit('setLoading')
}