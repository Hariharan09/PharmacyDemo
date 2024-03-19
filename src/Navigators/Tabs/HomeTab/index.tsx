import {icons} from '../../../Assets';
import {NAVIGATE_SCREEN} from '../../';
import {Container, Text, Touchable, ImageView} from '../../../Components';
import {color} from '../../../Theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Category, HomesTab, Profile} from '../../../Modules';

export type HomeTabParamList = {
  'homes-tab': undefined;
  category: undefined;
  profile: undefined;
};

const TAB_SERVICE = 1;

type NavItem = {
  id: number;
  title: string;
  iconSelected: any;
  iconDefault: any;
  navigate: string;
};

const bottomNavItem: Array<NavItem> = [
  {
    id: 1,
    title: 'HOME',
    iconSelected: icons.homeFill,
    iconDefault: icons.home,
    navigate: NAVIGATE_SCREEN['homes-tab'],
  },
  {
    id: 2,
    title: 'CATEGORY',
    iconSelected: icons.categoriesFill,
    iconDefault: icons.categories,
    navigate: NAVIGATE_SCREEN.category,
  },
  {
    id: 3,
    title: 'PROFILE',
    iconSelected: icons.profileBlack,
    iconDefault: icons.profile,
    navigate: NAVIGATE_SCREEN.profile,
  },
];

const Home = createBottomTabNavigator<HomeTabParamList>();

type TabBarProps = {
  selected: number;
  onPress?: (index: number) => void;
  navigation: any;
};

const TabBar: React.FC<TabBarProps> = ({selected, onPress, navigation}) => {
  return (
    <>
      <Container variant={'bottom-tab'}>
        {bottomNavItem.map((item: NavItem) => {
          return (
            <Touchable
              key={item.id}
              onPress={() => {
                if (onPress) {
                  onPress(item.id);
                  navigation.navigate(item.navigate);
                }
              }}
              accessibilityRole="button"
              flex={1}
              flex-ai={'center'}
              flex-jc={'center'}>
              <ImageView
                tint-c={selected === item.id ? color.black : color.lightBlack}
                source={
                  selected === item.id ? item.iconSelected : item.iconDefault
                }
                h={20}
                w={20}
              />
              <Text
                letter-s={1}
                margin-t={5}
                text-t={'uppercase'}
                variant={selected === item.id ? 'bold' : 'book'}
                font-size={9}>
                {item.title}
              </Text>
            </Touchable>
          );
        })}
      </Container>
    </>
  );
};


const HomeTab: React.FC = () => {
  const [bottomSelected, setBottomSelected] = useState(TAB_SERVICE);
  return (
    <>
      <Home.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={props => (
          <TabBar
            {...props}
            selected={bottomSelected}
            onPress={index => {
           setBottomSelected(index);
            }}
          />
        )}>
        <Home.Screen name={'homes-tab'} component={HomesTab} />
        <Home.Screen name={'category'} component={Category} />
        <Home.Screen name={'profile'} component={Profile} />
      </Home.Navigator>
    </>
  );
};

export {HomeTab};
