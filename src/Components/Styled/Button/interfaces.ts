export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'small'
  | 'cancel'
  | 'medium';

export type TouchableVariants =
  | 'rounded-cart'
  | 'order-selected'
  | 'order-default'
  | 'model-btn'
  | 'card-plan';

export interface ButtonTouchableProps {
  variant?: ButtonVariants;
}

export interface TouchableProps {
  variant?: TouchableVariants;
}
export interface ButtonTextProps {
  'font-size'?: number;
  'font-family'?: string;
  variant?: ButtonVariants;
}
