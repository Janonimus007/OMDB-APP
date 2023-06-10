import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { PeliculaDetail, Search } from '../../interfaces/peliculas.interface'
import { getDetail, getSearch } from '../thunks/peliculasThunks'

// Define a type for the slice state
interface PeliculasState {
  peliculasSearch: Search[] | [];
  isLoading:boolean;
  error:String;
  peliculaDetail:PeliculaDetail |null;
  favoritos: Search[] | [];
}

// Define the initial state using that type
const initialState: PeliculasState = {
  peliculasSearch: [],
  isLoading:false,
  error:'',
  peliculaDetail:null,
  favoritos:[]
}

export const peliculasSlice = createSlice({
  name: 'peliculas',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getSearch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getSearch.fulfilled,
        (state, action: PayloadAction<Search[]>) => {
          state.peliculasSearch = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(getSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getDetail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getDetail.fulfilled,
        (state, action: PayloadAction<PeliculaDetail>) => {
          state.peliculaDetail = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(getDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
})

export const { 
  // increment, decrement, incrementByAmount 
} = peliculasSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default peliculasSlice.reducer