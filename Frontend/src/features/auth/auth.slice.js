import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    //Initial user state
    name: "auth",
    initialState: {
        user: null,
        loading: true,
        error: null,
    },

    //3 reducers
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setUser, setLoading, setError } = authSlice.actions
export default authSlice.reducer