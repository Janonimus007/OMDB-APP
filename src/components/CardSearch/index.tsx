import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Search } from '../../interfaces/peliculas.interface'
import { styles } from './CardSearch.styles'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const CardSearch =(pelicula:Search) =>{
    const [isFavorite, setIsFavorite] = useState(false)
    const navigation = useNavigation()
    const gotoDetails =()=>{
        navigation.navigate('PeliculasDetail',{id:pelicula.imdbID})
    }
    const handleFavorite =()=>{
        setIsFavorite(prevstate=>!prevstate)
    }

    return (
    <View style={styles.container} >
        <TouchableOpacity 
            style={styles.containerMovie}
            onPress={()=>gotoDetails()}
        >
            <Image
                style={styles.image}
                source={{
                uri: pelicula.Poster,
                }}
            />
            <View style={styles.containerBody}>
                <Text  style={styles.title}>{pelicula.Title}</Text>
                <Text>Tipo: {pelicula.Type}</Text>
                <Text>Año: {pelicula.Year}</Text>  
         
            </View>
        </TouchableOpacity>   
        <TouchableOpacity 
            style={styles.favorite}
            onPress={handleFavorite}
        >
            <Ionicons style={styles.favorite} 
                name={!isFavorite ?"heart-dislike":"heart"} 
                color={!isFavorite ?'black':"red"} 
                size={25} />                
        </TouchableOpacity>

    </View>

    )
}