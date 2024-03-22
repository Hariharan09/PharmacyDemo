import {icons} from '../../../../Assets';
import {
  Container,
  FlatList,
  Header,
  ImageView,
  NotificationCount,
  ScrollView,
  SearchInput,
  Text,
} from '../../../../Components';
import React from 'react';
import {color} from '../../../../Theme';

type Item = {
  id: number;
  name: string;
  Image: string;
  description: string;
  code: any;
};
const Category: React.FC<{}> = ({}) => {
  let data = [
    {
      id: 1,
      name: 'polyside rock iron',
      Image:
        'https://c7.alamy.com/comp/2R9JXM7/cosmetic-products-mockup-design-template-3d-design-3d-realistic-design-serum-design-serum-bottle-white-background-designbeauty-product-2R9JXM7.jpg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 222',
    },
    {
      id: 2,
      name: 'polytide iron',
      Image:
        'https://c7.alamy.com/comp/2HTHJC0/vintage-pharmaceutical-products-2HTHJC0.jpg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 456',
    },
    {
      id: 3,
      name: 'Iron Tonic Tablets',
      Image:
        'https://c7.alamy.com/comp/T518B2/composition-of-antique-medicines-euzymina-metarsile-and-arema-products-by-menarini-between-1890-and-1960-T518B2.jpg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 987',
    },
    {
      id: 4,
      name: 'Ferro Vin (Iron Tonic)',
      Image: 'https://4.imimg.com/data4/XN/GA/MY-24517258/1-250x250.jpg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 657',
    },
    {
      id: 5,
      name: 'Iron Tonic',
      Image:
        'https://4.imimg.com/data4/JV/RW/ANDROID-7193507/product-500x500.jpeg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 342',
    },
    {
      id: 6,
      name: 'Irolic Zn Iron Tablet',
      Image:
        'https://5.imimg.com/data5/IJ/MD/AX/SELLER-5771276/irolic-zn-tablets-500x500.jpg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 934',
    },
  ];

  let smallData = [
    {id: 1, name: 'Wellness', Icon: icons.wellness},
    {id: 2, name: 'Brand Details', Icon: icons.brand},
    {id: 3, name: 'Homeo', Icon: icons.homeo},
    {id: 4, name: 'Eye Care', Icon: icons.eyeCare},
    {id: 5, name: 'Dental', Icon: icons.dental},
  ];

  return (
    <>
      {/* <Header variant={'companyHeader'} heading={'Category'} /> */}
      <ScrollView margin-b={90}>
        <Container flex={1} padding={20}>
          <Container flex-jc={'space-between'} flex-d={'row'}>
            <Container variant={'rounded-notify'} margin-l={10}>
              <ImageView
                resize-m={'stretch'}
                source={icons.backButton}
                h={25}
                w={25}
              />
            </Container>

            <Container flex-d={'row'}>
              <Container variant={'rounded-notify'} margin-r={10}>
                <ImageView
                  resize-m={'stretch'}
                  source={icons.search}
                  h={15}
                  w={15}
                  tint-c={color.black}
                />
              </Container>
              <NotificationCount itemCount={'3'} />
            </Container>
          </Container>
          <Container margin-t={10} variant={'card'} bc={color.primary}>
            <Container flex-jc={'center'} flex-as={'center'}>
              <ImageView
                h={150}
                w={150}
                source={
                  'https://freepngimg.com/thumb/pills/27320-1-pills-transparent-background-thumb.png'
                }
                isUri
              />
            </Container>
            <Container
              flex-d={'row'}
              flex-jc={'space-between'}
              bc={'#FDD5DF'}
              padding={20}
              margin-b={-25}
              bottom={20}>
              <Container>
                <Text variant={'heading'}>{'EPA & DPH'}</Text>
                <Text variant={'heading'}>{'Eliminated mercury'}</Text>
              </Container>
              <Container>
                <Text variant={'heading'}>{'hear healthy'}</Text>
                <Text variant={'heading'}>{'New item'}</Text>
              </Container>
            </Container>
          </Container>
          <Container>
            <Text font-size={15} variant={'heading'} color={'blue'}>
              {'DHA OMEGA 3'}
            </Text>
            <Text font-size={25} variant={'heading'}>
              {'AED 350'}
            </Text>
            <Text font-size={12} variant={'heading'}>
              {'Delivered within 2-3 days to:'}
              <Text font-size={15} color={'blue'}>
                {'12 Rich Terrace,Wigram'}
              </Text>
            </Text>
          </Container>
          <Container margin-t={20}>
            <Text font-size={20} variant={'heading'}>
              {'frquently bought together'}
            </Text>
          </Container>
          <Container>
            <FlatList<React.ElementType>
              showsVerticalScrollIndicator={false}
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}: {item: any; index: number}) => {
                return (
                  <>
                    <Container
                      variant={'medium-card'}
                      margin={5}
                      bc={ index % 2 === 0 ? '#FDD5DF' : '#caadff'}>
                      <Container margin-t={10} margin-l={10}>
                        <Text variant={'heading'}>{item.name}</Text>
                        <Text margin-t={10} variant={'screen-heading'}>
                          {'950MG'}
                        </Text>
                        <Text margin-t={10} variant={'screen-heading'}>
                          {item.code}
                        </Text>
                      </Container>
                      <Container flex-d={'row'} flex-jc={'space-between'}>
                        <Container
                          margin-l={30}
                          margin-t={40}
                          variant={'rounded-notify'}>
                          <ImageView h={15} w={15} source={icons.addFill} />
                        </Container>
                        <Container margin-r={10}>
                          <ImageView h={80} w={80} source={item.Image} isUri />
                        </Container>
                      </Container>
                    </Container>
                  </>
                );
              }}
              keyExtractor={(item: any) => item.id}
            />
          </Container>
          <Container margin-t={10}>
            <Text variant={'heading'}>{'OVERVIEW'}</Text>
            <Text variant={'sub-heading'}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            </Text>
          </Container>
          <Container margin-t={10}>
            <Text variant={'heading'}>{'its woks as flow'}</Text>
            <Text variant={'sub-heading'}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            </Text>
          </Container>
          <Container margin-t={10}>
            <Text variant={'heading'}>{'how to use'}</Text>
            <Text variant={'sub-heading'}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .'
              }
            </Text>
          </Container>
        </Container>
      </ScrollView>
    </>
  );
};

export {Category};
