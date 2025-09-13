import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../tabs/Home';
import User from '../tabs/User';
import Add from '../tabs/Add';
import Search from '../tabs/Search';
import WishList from '../tabs/WishList';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarStyle: { height: 60 },
    tabBarLabelStyle: {
      fontSize: 14,
      fontFamily: 'Georgia',
      fontWeight: '300',
    },
    tabBarIcon: ({ focused, size }) => {
      let iconSource;

      if (route.name === 'Home') {
        iconSource = require('../images/home.png');
      } else if (route.name === 'Search') {
        iconSource = require('../images/search.png');
      } else if (route.name === 'Add') {
        iconSource = require('../images/plus.png');
      } else if (route.name === 'WishList') {
        iconSource = require('../images/heart.png');
      } else if (route.name === 'Profile') {
        iconSource = require('../images/account.png');
      }

      return (
        <Image
          source={iconSource}
          style={{
            width: size,
            height: size,
            tintColor: focused ? '#0080ff' : 'gray',
            resizeMode: 'contain',
          }}
        />
      );
    },
    tabBarActiveTintColor: '#0080ff',
    tabBarInactiveTintColor: 'gray',
  })}
>
  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="Search" component={Search} />
  <Tab.Screen name="Add" component={Add} />
  <Tab.Screen name="WishList" component={WishList} />
  <Tab.Screen name="Profile" component={User} />
</Tab.Navigator>

  );
};

export default HomeScreen;
