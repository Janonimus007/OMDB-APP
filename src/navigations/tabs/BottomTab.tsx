import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PeliculasSearch } from '../../screens/PeliculasSearch/Index';
import { PeliculasFavorites } from '../../screens/PeliculasFavorites/Index';
import { PeliculasStack } from '../stacks/PeliculasStack';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Peliculas"  
        options={{ 
            headerShown: false,
        }} 
        component={PeliculasStack} />
      <Tab.Screen 
        name="Favorites" 
        component={PeliculasFavorites} 
        options={{ 
            title: 'Favoritos',
            headerTitleAlign:'center'
        }}         
      />
    </Tab.Navigator>
  );
}