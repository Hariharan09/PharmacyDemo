import {icons} from '../../../Assets';
import {
  Container,
  Image,
  Input,
  Text,
  Touchable,
  ImageView,
} from '../../../Components';
import {color} from '../../../Theme';
import {fonts} from '../../../Assets';
import {debounce} from 'lodash';
import React, {useState} from 'react';
import {SearchInputProps} from './interfaces';

const SearchInput: React.FC<SearchInputProps> = ({
  heading,
  onChangeText,
  onSubmit,
  onSortClick,
  onSearchClear,
}) => {
  const [searchString, setSearchString] = useState<string>('');

  const handleOnChangeText = debounce((search: string) => {
    setSearchString(search);

    if (onChangeText) {
      onChangeText(search);
    }
  });

  const handleOnPress = debounce(() => {
    if (onSubmit) {
      onSubmit(searchString);
      setSearchString('');
    }
  }, 100);

  const handleClearSearch = debounce(() => {
    setSearchString('');

    if (onChangeText) {
      onChangeText('');
    }

    if (onSearchClear) {
      onSearchClear();
    }
  }, 100);

  return (
    <Container
      variant={'card-search'}
      flex-d={'row'}
      flex-jc={'space-evenly'}
      flex-ac={'stretch'}
      elevation={5}>
      <Touchable
        flex-jc={'center'}
        margin-l={15}
        accessibilityRole="button"
        onPress={handleOnPress}>
        <ImageView
          tint-c={color.coolGrey}
          w={18}
          h={18}
          source={icons.search}
        />
      </Touchable>

      <Container flex={1}>
        <Input
          variant={'default'}
          defaultValue={searchString}
          placeholder={'search'}
          placeholderTextColor={color.coolGrey}
          onChangeText={handleOnChangeText}
        />
      </Container>
      {searchString !== '' && (
        <Touchable
          margin-r={10}
          flex-jc={'center'}
          flex-ai={'center'}
          accessibilityRole="button"
          onPress={handleClearSearch}>
          <Image
            accessibilityIgnoresInvertColors={true}
            w={13}
            h={13}
            source={icons.closeBtn}
          />
        </Touchable>
      )}
    </Container>
  );
};

export {SearchInput};
