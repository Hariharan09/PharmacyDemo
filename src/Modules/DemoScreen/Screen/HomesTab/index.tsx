import {icons} from '../../../../Assets';
import {
  Container,
  FlatList,
  Header,
  ImageView,
  NotificationCount,
  SearchInput,
  Text,
} from '../../../../Components';
import React, {useEffect} from 'react';
import {color} from '../../../../Theme';

// type Item = {
//   id: number;
//   name: string;
//   Image: string;
//   description: string;
//   code: any;
// };
const HomesTab: React.FC<{}> = ({}) => {
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
      name: 'Iron Tonic ',
      Image:
        'https://c7.alamy.com/comp/T518B2/composition-of-antique-medicines-euzymina-metarsile-and-arema-products-by-menarini-between-1890-and-1960-T518B2.jpg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 987',
    },
    {
      id: 4,
      name: 'Ferro Vin ',
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
      name: 'Irolic Zn Iron ',
      Image:
        'https://5.imimg.com/data5/IJ/MD/AX/SELLER-5771276/irolic-zn-tablets-500x500.jpg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 934',
    },
    {
      id: 7,
      name: 'Irolic Zn Iron ',
      Image:
        'https://5.imimg.com/data5/IJ/MD/AX/SELLER-5771276/irolic-zn-tablets-500x500.jpg',
      description: 'Nutra Healthcare Private Limited, Surat, Gujarat',
      code: 'AED 934',
    },
    {
      id: 8,
      name: 'Irolic Zn Iron ',
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
      {/* <Header variant={'companyHeader'} heading={'Home'} /> */}

      <Container variant={'screen'} padding={20}>
        <Container flex-jc={'space-between'} flex-d={'row'}>
          <Container flex-d={'row'}>
            <Container variant={'square-location'} margin-l={10}>
              <ImageView
                resize-m={'stretch'}
                source={icons.location}
                h={25}
                w={25}
              />
            </Container>
            <Container margin-l={10} flex-jc={'center'}>
              <Text variant={'input-heading'}> {'Delivery Address'}</Text>
              <Text variant={'toolbar-heading'}>
                {'12 Rich Terrace, Wigram,NZ'}
              </Text>
            </Container>
          </Container>
          <NotificationCount itemCount={'3'} />
        </Container>
        <Container margin-t={15}>
          <SearchInput />
        </Container>
        <Container
          variant={'card'}
          elevation={5}
          bc={'#CAADFF'}
          flex-d={'row'}
          flex-jc={'space-between'}>
          <Container>
            <Text variant={'heading'}> {'Get Flat 25% off'} </Text>
            <Text margin-t={5} variant={'heading'}>
              {' '}
              {'on all mediciens'}{' '}
            </Text>
            <Container variant={'add'} elevation={5} bc={color.white}>
              <Text variant={'heading'}>{'Buy Now'}</Text>
            </Container>
          </Container>
          <Container>
            <ImageView
              h={100}
              w={100}
              source={
                'https://img.freepik.com/free-vector/healthcare-medications-composition-with-images-pills-blisters-capsules-jars-drops-syrups-vector-illustration_1284-71689.jpg?size=626&ext=jpg&ga=GA1.1.1654029441.1698328133&semt=ais'
              }
              isUri
            />
          </Container>
        </Container>
        <Container>
          <Text variant={'heading'}>{'Top Categories'}</Text>
        </Container>
        <Container>
          <FlatList<React.ElementType>
            showsVerticalScrollIndicator={false}
            data={smallData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}: {item: any; index: number}) => {
              return (
                <>
                  <Container
                    variant={'small-card'}
                    margin={10}
                    flex-jc={'center'}
                    elevation={5}>
                    <Container flex-jc={'center'} flex-as={'center'}>
                      <Container flex-as={'center'}>
                        <ImageView
                          resize-m={'stretch'}
                          source={item.Icon}
                          h={25}
                          w={25}
                        />
                      </Container>
                      <Text margin-t={5} variant={'bold'}>
                        {item.name}
                      </Text>
                    </Container>
                  </Container>
                </>
              );
            }}
            keyExtractor={(item: any) => item.id}
          />
        </Container>

        <Container margin-t={10}>
          <Text variant={'heading'}>{'DSF Special Deals'}</Text>
        </Container>

        <Container flex={1} margin-t={10}>
          <FlatList<React.ElementType>
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={({item, index}: {item: any; index: number}) => {
              return (
                <>
                  <Container variant={'medium-card'} margin={5} bc={'#FDD5DF'}>
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
      </Container>
    </>
  );
};

export {HomesTab};
