import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { PeliculaDetail, Search } from '../../interfaces/peliculas.interface'
import { getDetail, getSearch } from '../thunks/peliculasThunks'
import { setPelicula } from '../asyncStorage'

interface PeliculasState {
  peliculasSearch: Search[] | [];
  isLoading:boolean;
  error:String;
  peliculaDetail:PeliculaDetail |null;
  favoritos: Search[] | [];
}

const initialState: PeliculasState = {
  peliculasSearch: [],
  isLoading:false,
  error:'',
  peliculaDetail:null,
  favoritos:[]
}

export const peliculasSlice = createSlice({
  name: 'peliculas',
  initialState,
  reducers: {
    addFavoriteFromStorage: (state, action: PayloadAction<Search[]>) => {
      state.favoritos= action.payload
    },
    addFavorite: (state, action: PayloadAction<Search>) => {
      const pelicula= action.payload;
      const existingMovie = state.favoritos.find((movie:Search) => movie.imdbID === pelicula.imdbID);
      console.log(existingMovie);
      
      if (!existingMovie) {
        console.log('entro');
        
        state.favoritos.push(action.payload);
      }
      setPelicula(state.favoritos)
    },
    deleteFavorite:(state, action: PayloadAction<Search>)=>{
      const imdbIDToRemove = action.payload;
      state.favoritos = state.favoritos.filter((movie:Search) => movie.imdbID != imdbIDToRemove.imdbID);
      setPelicula(state.favoritos)
    }
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
  addFavorite,
  deleteFavorite,
  addFavoriteFromStorage
} = peliculasSlice.actions


export default peliculasSlice.reducer