import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface props {
  children?: React.ReactNode;
}

const LinearGradients: FC<props> = ({children}) => {
  return (
    <LinearGradient
      flex={1}
      start={{x: 1, y: 0}}
      end={{x: 0.2, y: 1}}
      locations={[0, 0.1, 0.3, 1]}
      colors={['#F3E1D9', '#EFD8D6', '#EBD3D3', '#99C8E6']}>
      {children}
    </LinearGradient>
  );
};
export {LinearGradients};
