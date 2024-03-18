/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {DropDownProps, DropDownItem} from './interfaces';
import {Container, Touchable, Text, FlatList, Modal} from '@Components';
const DropDown: React.FC<DropDownProps> = ({
  heading,
  onItemClick,
  dropDownData,
  selected,
}) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <Touchable
        accessibilityRole="button"
        onPress={() => {
          setShowModel(!showModel);
        }}>
        <Text variant={'input-heading'} margin-b={12}>
          {heading}
        </Text>
        <Container variant={'grey-dropdown'} padding-v={13} flex-jc={'center'}>
          <Text margin-l={15} variant={'book'}>
            {selected?.title ? selected.title : selected?.name}
          </Text>
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
              item: DropDownItem;
              index: number;
            }) => (
              <>
                <Touchable
                  accessibilityRole="button"
                  onPress={() => {
                    if (onItemClick) {
                      onItemClick(item);
                      setShowModel(!showModel);
                    }
                  }}>
                  <Container padding-v={14} flex-ai={'center'} flex-d={'row'}>
                    <Container flex-ai={'center'} padding-l={10}>
                      <Text variant={'book'} letter-s={3}>
                        {item.title ? item.title : item.name}
                      </Text>
                    </Container>
                  </Container>
                </Touchable>
                {index !== dropDownData.length - 1 && (
                  <Container variant={'divider'} />
                )}
              </>
            )}
            keyExtractor={(item: DropDownItem) => item.id}
          />
        </>
      </Modal>
    </>
  );
};

export {DropDown};
