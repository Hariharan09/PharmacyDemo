import {InputProps} from '../../Styled/Input/interfaces';

export interface CustomInputProps extends InputProps {
  heading?: string | undefined | null;
  placeholder?: string;
}
