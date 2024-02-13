import quadBApi from '../../api/scizersApi'
import { FETCH_ERROR, FETCH_PROFILES, SET_LOADING } from '../types'

export const fetchProfiles = () => async dispatch => {
    try {
        const response = await quadBApi.get('/')
        dispatch({ type: FETCH_PROFILES, payload: response?.data })
    } catch (err) {
        dispatch({ type: FETCH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}

export const paginate = (url) => async dispatch => {
    try {
        dispatch({ type: SET_LOADING })
        const response = await fetch(url)
        const data = await response.json()
        dispatch({ type: FETCH_PROFILES, payload: data })
    } catch (err) {
        dispatch({ type: FETCH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}
