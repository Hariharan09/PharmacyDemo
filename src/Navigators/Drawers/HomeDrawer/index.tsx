import {icons} from '@Assets';
import {translate} from '@I18n';
import {HomeTab, NAVIGATE_SCREEN, resetRoot, navigateStack} from '@Navigators';
import {userLogout} from '@Redux';
import {
  Container,
  FlatList,
  Text,
  Touchable,
  ImageView,
  Modal,
} from '@Components';
import {color} from '@Theme';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export type HomeDrawerParamList = {
  'home-tab': undefined;
  logout: undefined;
};

type Drawer = {
  id: number;
  title: string;
  navigation: string;
  icon: any;
};

const Home = createDrawerNavigator<HomeDrawerParamList>();

function CustomDrawerContent(props: any) {
  const drawerData: Array<Drawer> = [
    {
      id: 1,
      title: 'Name',
      navigation: 'issues',
      icon: icons.lightLogo,
    },
    {id: 2, title: 'Issues', navigation: 'issues', icon: icons.categories},
    {id: 3, title: 'Settings', navigation: 'settings', icon: icons.menuCircle},

    {id: 4, title: 'Logout', navigation: 'logout', icon: icons.logout},
  ];

  return (
    <DrawerContentScrollView {...props}>
      <Container flex={1} margin-t={-10}>
        <LinearGradient
          flex={1}
          start={{x: 1, y: 0}}
          end={{x: 0.2, y: 1}}
          locations={[0, 0.1, 0.3, 1]}
          colors={['#F3E1D9', '#EFD8D6', '#EBD3D3', '#99C8E6']}>
          <Container flex-ai={'center'} flex-jc={'center'} h={180}>
            <ImageView h={60} w={60} source={icons.logo} />
            <Text
              padding-t={8}
              font-size={14}
              color={color.white}
              letter-s={1.5}
              variant={'bold'}>
              {translate('common.appName')}
            </Text>
          </Container>
        </LinearGradient>

        <Container>
          <FlatList<React.ElementType>
            data={drawerData}
            renderItem={({item, index}: {item: Drawer; index: number}) => (
              <Touchable accessibilityRole="button" onPress={() => {}}>
                <Container
                  padding-h={15}
                  padding-v={15}
                  flex-ai={'center'}
                  flex-d={'row'}>
                  <ImageView h={15} w={15} source={item.icon} />
                  <Text
                    margin-l={20}
                    font-size={10}
                    variant={'book'}
                    text-t={'uppercase'}>
                    {item.title}
                  </Text>
                </Container>
                <Container variant={'divider'} />
              </Touchable>
            )}
            keyExtractor={(item: Drawer) => item.id}
          />
        </Container>
      </Container>
    </DrawerContentScrollView>
  );
}
const HomeDrawer = () => {
  return (
    <>
      <Home.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Home.Screen
          name={'home-tab'}
          component={HomeTab}
          options={{headerShown: false}}
        />
      </Home.Navigator>
    </>
  );
};

export {HomeDrawer};
