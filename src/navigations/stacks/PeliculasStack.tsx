import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PeliculasSearch } from "../../screens/PeliculasSearch/Index";
import { PeliculasDetail } from "../../screens/PeliculasDetail/Index";

const Stack = createNativeStackNavigator();

export const PeliculasStack =() =>{
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="PeliculaSearch" 
                component={PeliculasSearch} 
                options={{ 
                    title: 'Buscar Peliculas',
                    headerTitleAlign:'center'
                }}   
            />
            <Stack.Screen 
                name="Detalle de pelicula" 
                component={PeliculasDetail} 
                options={{ 
                    title: 'Favoritos',
                    headerTitleAlign:'center'
                }}   
            />
        </Stack.Navigator>
      );
}