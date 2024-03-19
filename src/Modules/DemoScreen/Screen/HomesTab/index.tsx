import {icons} from '../../../../Assets';
import {
  Container,
  FlatList,
  Header,
  ImageView,
  SearchInput,
  Text,
} from '../../../../Components';
import React from 'react';

type Item = {
  id: number;
  name: string;
  Image: string;
  description: string;
  code: any;
};
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

  return (
    <>
      <Header variant={'companyHeader'} heading={'Home'} />

      <Container flex={1} padding={20}>
        <SearchInput />

        <Container margin-b={70}>
          <FlatList<React.ElementType>
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item, index}: {item: any; index: number}) => {
              return (
                <>
                  <Container variant={'card'}>
                    <Container flex-d={'row'}>
                      <Container>
                        <ImageView h={80} w={80} source={item.Image} isUri />
                      </Container>
                      <Container margin-l={25}>
                        <Text variant={'bold'}>{item.name}</Text>
                        <Container margin-t={10} flex-w={'wrap'}>
                          <Text variant={'medium'}>{item.description}</Text>
                        </Container>
                        <Container
                          margin-t={10}
                          flex-d={'row'}
                          flex-jc={'space-between'}>
                          <Text variant={'medium'}>{item.code}</Text>
                          <ImageView
                            margin-t={10}
                            margin-r={20}
                            h={10}
                            w={10}
                            source={icons.addFill}
                            variant={'rounded-icon'}
                            tint-c={'black'}
                          />
                        </Container>
                      </Container>
                    </Container>
                  </Container>
                </>
              );
            }}
            keyExtractor={(item: Item) => item.id}
          />
        </Container>
      </Container>
    </>
  );
};

export {HomesTab};
