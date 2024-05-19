export const increment = (state) => {
    state.count++
    state.lastMutation = 'increment'
}

export const incrementBy = (state, value) => {
    state.count += value
    state.lastMutation = 'incrementBy',
    state.lastRandomInt = value
}

export const setLoading = (state) => {
    state.isLoading = !state.isLoading
}