export default function selectIsAuthenticated(state) {
    return state && state.authentication && state.authentication.isAuthenticated
}