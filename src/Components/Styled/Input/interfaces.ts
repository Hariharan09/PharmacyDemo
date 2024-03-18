import {ColorValue, KeyboardType} from 'react-native';
export type Variants =
  | 'otp'
  | 'otp-input'
  | 'default'
  | 'grey'
  | 'white'
  | 'text-area';

export interface InputProps {
  variant?: Variants;
  type?: KeyboardType;

  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;

  autoCorrect?: boolean | undefined;

  autoFocus?: boolean | undefined;

  blurOnSubmit?: boolean | undefined;

  caretHidden?: boolean | undefined;

  contextMenuHidden?: boolean | undefined;

  defaultValue?: string | undefined;

  editable?: boolean | undefined;

  maxLength?: number | undefined;

  multiline?: boolean | undefined;

  onChangeText?: ((text: string) => void) | undefined;

  placeholder?: string | undefined;

  placeholderTextColor?: ColorValue | undefined;

  secureTextEntry?: boolean | undefined;

  selectTextOnFocus?: boolean | undefined;

  selection?: {start: number; end?: number | undefined} | undefined;

  selectionColor?: ColorValue | undefined;

  textAlign?: 'left' | 'center' | 'right' | undefined;

  testID?: string | undefined;

  inputAccessoryViewID?: string | undefined;

  value?: string | undefined;

  maxFontSizeMultiplier?: number | null | undefined;
  onKeyPress?: ({nativeEvent}: any) => void | undefined;
}
