import { configureStore } from '@reduxjs/toolkit'
import LoaderSlice from './slices/loaderslice'

export const store = configureStore({
    reducer:{
        Loader : LoaderSlice,
    }
})