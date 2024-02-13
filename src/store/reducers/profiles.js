import { FETCH_ERROR, FETCH_PROFILES, SET_LOADING } from "../types"

const initialState = {
    loading: true,
    profiles: [],
    next: "",
    previous: ""
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_PROFILES:
            return {
                ...state,
                loading: false,
                profiles: payload?.results,
                next: payload?.next,
                previous: payload?.previous,
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                profiles: [],
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}