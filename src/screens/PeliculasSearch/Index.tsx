import { View, Text, ActivityIndicator, FlatList, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getSearch } from '../../store/thunks/peliculasThunks'
import { Search } from '../../interfaces/peliculas.interface'
import { CardSearch } from '../../components/CardSearch'
import { SinContenido } from '../../components/sinContenido'
import { styles } from './PeliculasSearch.styles'
import { getpeliculaStorage } from '../../store/asyncStorage'
import { addFavorite, addFavoriteFromStorage } from '../../store/slices/peliculasSlice'

export const PeliculasSearch = () => {
  const dispatch = useAppDispatch()
  const { peliculasSearch,isLoading } = useAppSelector((store) => store.peliculas);
  const [search, setSearch] = useState('')

  const getPeliculas =()=>{
    dispatch(getSearch(search))
  }


  useEffect(() => {
    getpeliculaStorage().then((peli)=>{
      peli&&dispatch(addFavoriteFromStorage(peli))
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.containerBtnInput}>
        <TextInput
          style={styles.input}
          placeholder="Ingresar pelicula"
          onChangeText={newText => setSearch(newText)}
          defaultValue={search}
        />
        <Button
          title="Buscar pelicula"
          onPress={() =>getPeliculas() }
        />
      </View>
      {
        isLoading?(<ActivityIndicator style={{ marginVertical: "5%" }} />):
        (
        <FlatList
          ListEmptyComponent={
            !isLoading ? (
              <SinContenido text='Sin resultados'/>
            ) : (
              <ActivityIndicator style={{ marginVertical: "5%" }} />
            )
          }
          style={{ marginTop: 0 , paddingHorizontal:'5%'}}
          data={peliculasSearch}
          renderItem={({item,index}) => {
            return (
              <View key={item.imdbID}>
                <CardSearch  {...item}/>                
              </View>
 
            );
          }}
        /> 
        )
      }
    </View>
  )
}