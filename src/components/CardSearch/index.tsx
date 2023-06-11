import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Search } from '../../interfaces/peliculas.interface'
import { styles } from './CardSearch.styles'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../store/slices/peliculasSlice';
import { useAppSelector } from '../../store/hooks';

export const CardSearch =(pelicula:Search) =>{
    const [isFavorite, setIsFavorite] = useState(false)
    const { favoritos } = useAppSelector((store) => store.peliculas);
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const gotoDetails =()=>{
        navigation.navigate('PeliculasDetail',{id:pelicula.imdbID})
    }
    const handleFavorite = ()=>{
        setIsFavorite(!isFavorite)
    }

    const removeFavorite =()=>{
        setIsFavorite(!isFavorite)
        dispatch(deleteFavorite(pelicula))
    }

    useEffect(() => {
        const existingMovie = favoritos.find((movie:Search) => movie.imdbID === pelicula.imdbID);
        existingMovie ? setIsFavorite(true) : setIsFavorite(false)
        if(isFavorite){
            dispatch(addFavorite(pelicula))
        }
    }, [isFavorite])
    

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

        {
            !isFavorite?(
                <TouchableOpacity 
                style={styles.favorite}
                onPress={handleFavorite}
            >   
                <Ionicons style={styles.favorite} 
                    name={"heart-dislike"} 
                    color={'black'} 
                    size={25} />                
            </TouchableOpacity>
            ):(
                <TouchableOpacity 
                style={styles.favorite}
                onPress={removeFavorite}
            >   
                <Ionicons style={styles.favorite} 
                    name={"heart"} 
                    color={"red"} 
                    size={25} />                
            </TouchableOpacity>
            )
        }

    </View>

    )
}