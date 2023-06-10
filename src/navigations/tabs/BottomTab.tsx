import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PeliculasSearch } from '../../screens/PeliculasSearch/Index';
import { PeliculasFavorites } from '../../screens/PeliculasFavorites/Index';
import { PeliculasStack } from '../stacks/PeliculasStack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Peliculas"  
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
            headerShown: false,
            tabBarLabel:'Buscar Peliculas',
            tabBarLabelStyle: {
              fontSize: 16, 
              fontWeight: 'bold', 
              paddingBottom:2
            },
        }} 
        component={PeliculasStack} />
      <Tab.Screen 
        name="Favorites" 
        component={PeliculasFavorites} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
            title: 'Favoritos',
            headerTitleAlign:'center',
            tabBarLabel:'Mis Favoritos',
            tabBarLabelStyle: {
              fontSize: 16, 
              fontWeight: 'bold', 
              paddingBottom:2
            },
        }}         
      />
    </Tab.Navigator>
  );
}