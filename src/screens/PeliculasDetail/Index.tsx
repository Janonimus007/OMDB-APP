import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { getDetail } from '../../store/thunks/peliculasThunks';
import { styles } from './PeliculasDetail.styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Rating } from '../../interfaces/peliculas.interface';

interface Props{
  navigation:any;
  route:any
}

export const PeliculasDetail = ({ navigation, route }:Props)=> {
  const {id} = route.params;
  const dispatch = useDispatch()
  const { isLoading,peliculaDetail } = useAppSelector((store) => store.peliculas);
  
  useEffect(() => {
    dispatch(getDetail(id))
  }, [])
  

  return (
    <ScrollView style={styles.container}>
      {
        isLoading?(<ActivityIndicator style={{marginTop:'5%'}}/>):(
          <View>
            <Image
              style={styles.image}
              source={{
              uri: peliculaDetail.Poster,
              }}
             />
             <View style={styles.body}>
                <Text style={styles.ratings}>Plot</Text>  
                <Text style={styles.description}>{peliculaDetail.Plot}</Text>
                <Text style={styles.ratings}>Information</Text> 
                <View style={styles.detailDescription}>
                  <Text style={styles.textDescription}>Genre: {peliculaDetail.Genre}</Text>
                  <Ionicons name="ios-flame" size={24} color="red" />                  
                </View>
                <View style={styles.detailDescription}>
                  <Text style={styles.textDescription}>Runtime: {peliculaDetail.Runtime}</Text>
                  <Ionicons name="md-time" size={24} color="black" />                  
                </View>

                <View style={styles.detailDescription}>
                  <Text style={styles.textDescription}>Awards: {peliculaDetail.Awards}</Text>
                  <Ionicons name="md-wine" size={24} color="#C2CB04" />                  
                </View>

                <View style={styles.detailDescription}>
                  <Text style={styles.textDescription}>Released {peliculaDetail.Released}</Text>
                  <MaterialIcons name="date-range" size={24} color="black" />                  
                </View>

                <View style={styles.detailDescription}>
                  <Text style={styles.textDescription}>Actors {peliculaDetail.Actors}</Text>     
                  <MaterialIcons name="person-outline" size={24} color="black" />                   
                </View>

                <View>
                  <Text style={styles.ratings}>Ratings</Text>  
                  {
                    peliculaDetail?.Ratings?.map((rating:Rating,index)=>(
                      <View style={{...styles.detailDescription,marginBottom:15}} key={index}>
                        <Text>{rating.Source}</Text>
                        <Text>{rating.Value}</Text>
                      </View>
                    ))
                  }   
                </View>
             </View>
          </View>
        )
      }
    </ScrollView>
  )
}