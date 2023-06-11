import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { SinContenido } from '../../components/sinContenido';
import { CardSearch } from '../../components/CardSearch';
import { useAppSelector } from '../../store/hooks';

export const PeliculasFavorites = () => {
  const { favoritos,isLoading } = useAppSelector((store) => store.peliculas);
  
  return (
    <View>
        <FlatList
          ListEmptyComponent={<SinContenido text='No has añadido peliculas a FAVORITOS'/>}
          style={{ marginTop: 0 , paddingHorizontal:'5%'}}
          data={favoritos}
          renderItem={({item,index}) => {
            return (
              <View key={index}>
                <CardSearch  {...item}/>                
              </View>

            );
          }}
        /> 
    </View>
  )
}