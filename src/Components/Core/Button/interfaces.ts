import {ButtonVariants} from '../../Styled/Button/interfaces';
import {ImageSourcePropType} from 'react-native';

export interface ButtonProps {
  variant?: ButtonVariants;
  icon?: ImageSourcePropType;
  text?: string | undefined | null;
  onPress?: () => void;
  hasIcon?: boolean;
}
