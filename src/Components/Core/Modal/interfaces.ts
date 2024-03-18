import {GestureResponderEvent} from 'react-native';
export interface ModalProps {
  visible: boolean | undefined;
  onClose?: ((event: GestureResponderEvent) => void) | undefined;
  children?: React.ReactNode;
  isPositive?: string | undefined | null;
  isNegative?: string | undefined | null;
  isPositiveOnChange?: () => void;
  isNegativeOnChange?: () => void;
  isDropDown?: boolean;
}
