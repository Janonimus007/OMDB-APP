import AsyncStorage from "@react-native-async-storage/async-storage";
import { Search } from "../interfaces/peliculas.interface";

export const setPelicula = async (pelicula:Search[])=>{
  try {
    const favoritosString = JSON.stringify(pelicula)
    await AsyncStorage.setItem("pelicula",favoritosString)
    return true
  } catch (error) {
    return false;
  }
}
export const getpeliculaStorage = async ()=>{
  try {
    const peliculaString = await AsyncStorage.getItem("pelicula");
    if (peliculaString) {
      const peliculaArray: Search[] = JSON.parse(peliculaString);
      return peliculaArray;
    }
    return null; 
  } catch (error) {
    return false;
  }
}
