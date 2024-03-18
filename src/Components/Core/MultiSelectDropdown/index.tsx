import React, {useState} from 'react';
import {MultiScreenDropdownProps, MultiScreenDropdownItem} from './interfaces';
import {
  Container,
  Touchable,
  Text,
  FlatList,
  Modal,
  Button,
  ImageView,
} from '@Components';
import {translate} from '@I18n/translate';
import {icons} from '@Assets';

const MultiScreenDropdown: React.FC<MultiScreenDropdownProps> = ({
  heading,
  dropDownData,
  selected,
  onSubmit,
}) => {
  const [showModel, setShowModel] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  const handleSelectButton = (item: any) => {
    let updatedSelected = [...selectedList];

    const isExist = selectedList.some((current: any) => current.id === item.id);

    if (isExist) {
      updatedSelected = selectedList.filter(
        (current: any) => current.id !== item.id,
      );
    } else {
      updatedSelected = [...updatedSelected, item as never];
    }

    setSelectedList(updatedSelected);
  };
  const handleCancelButtonOnpress = (item: any) => {
    let cancelButtonUpdate = [...selectedList];
    cancelButtonUpdate = selectedList.filter(
      (current: any) => current.id !== item.id,
    );
    setSelectedList(cancelButtonUpdate);
  };

  return (
    <>
      <Touchable
        accessibilityRole="button"
        onPress={() => {
          setShowModel(!showModel);
        }}>
        {heading && (
          <Text variant={'input-heading'} margin-b={12}>
            {heading}
          </Text>
        )}
        <Container
          variant={'grey-dropdown'}
          flex-d={'row'}
          padding={20}
          flex-w={'wrap'}>
          {selectedList?.map((item: any, index: number) => {
            return (
              <Container
                key={item.id}
                flex-d={'row'}
                margin-l={index !== 0 ? 5 : 0}
                flex-ai={'center'}
                flex-jc={'center'}>
                <Text variant={'toolbar-heading'} font-size={12}>
                  {item.title}
                </Text>
                <Touchable
                  margin-l={5}
                  accessibilityRole="button"
                  onPress={() => {
                    handleCancelButtonOnpress(item);
                  }}>
                  <ImageView h={10} w={10} source={icons.close} />
                </Touchable>
              </Container>
            );
          })}
        </Container>
      </Touchable>
      <Modal
        visible={showModel}
        isDropDown
        onClose={() => {
          setShowModel(!showModel);
        }}>
        <>
          <FlatList<React.ElementType>
            data={dropDownData}
            renderItem={({
              item,
              index,
            }: {
              item: MultiScreenDropdownItem;
              index: number;
            }) => {
              const isExist = selectedList.some(
                (current: any) => current.id === item.id,
              );

              return (
                <Touchable
                  accessibilityRole="button"
                  onPress={() => {
                    handleSelectButton(item);
                  }}>
                  <Container padding-v={20} flex-ai={'center'} flex-d={'row'}>
                    <Container flex={1}>
                      <Text variant={'book'} letter-s={3}>
                        {item.title}
                      </Text>
                    </Container>
                    <>
                      <Touchable accessibilityRole="button">
                        {isExist && (
                          <Container>
                            <ImageView h={22} w={22} source={icons.tickGreen} />
                          </Container>
                        )}
                      </Touchable>
                    </>
                  </Container>

                  {index !== dropDownData.length - 1 && (
                    <Container variant={'divider'} />
                  )}
                </Touchable>
              );
            }}
            keyExtractor={(item: MultiScreenDropdownItem) => item.id}
          />
          <Container margin-b={10} />
          <Button
            variant={'primary'}
            text={translate('auth.submit')}
            onPress={() => {
              if (onSubmit) {
                onSubmit(selectedList);
              }

              setShowModel(!showModel);
            }}
          />
        </>
      </Modal>
    </>
  );
};

export {MultiScreenDropdown};
