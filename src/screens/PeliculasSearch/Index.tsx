import { View, Text, ActivityIndicator, FlatList, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getSearch } from '../../store/thunks/peliculasThunks'
import { Search } from '../../interfaces/peliculas.interface'
import { CardSearch } from '../../components/CardSearch'
import { SinContenido } from '../../components/sinContenido'

export const PeliculasSearch = () => {
  const dispatch = useAppDispatch()
  const { peliculasSearch,isLoading } = useAppSelector((store) => store.peliculas);
  const [search, setSearch] = useState('')

  const getPeliculas =()=>{
    console.log(search);
    
    dispatch(getSearch(search))
  }

  useEffect(() => {
    // dispatch(getSearch())
  }, [])
  
  return (
    <View style={{flex:1}}>
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
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
              <SinContenido text='No se han encontrado peliculas en la busqueda'/>
            ) : (
              <ActivityIndicator style={{ marginVertical: "5%" }} />
            )
          }
          style={{ marginTop: 0 , paddingHorizontal:'5%'}}
          data={peliculasSearch}
          renderItem={({item,index}) => {
            return (
              <CardSearch key={item.imdbID} {...item}/>
            );
          }}
        /> 
        )
      }
    </View>
  )
}