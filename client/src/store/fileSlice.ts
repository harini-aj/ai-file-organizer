import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FileState {
    data: string[]
    fetchStatus: 'idle' | 'loading' | 'success' | 'error'
    error: string | null
}

const initialState: FileState = {
    data: [],
    fetchStatus: 'idle',
    error: null
}

export const fetchAllFiles = createAsyncThunk('fetch/fetchAll', async () => {
    const res = await fetch('http://localhost:5000/api/files')
    if(!res.ok) throw new Error('Failed to load')
    const data = await res.json() 
    return data.files as string[]
})


const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllFiles.fulfilled, (state, action: PayloadAction<string[]>) => {
                console.log("Fetched files:", action.payload);
                state.data = action.payload
                state.fetchStatus = 'success'
                state.error = null
            })
            .addCase(fetchAllFiles.pending, (state) => {
                state.fetchStatus = 'loading'
                state.error = null
            })
            .addCase(fetchAllFiles.rejected, (state, action) => {
                state.fetchStatus = 'error'
                state.error = action.error.message || 'Something went wrong';
            })
    },
})

export default fileSlice.reducer;