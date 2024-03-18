export type Variants =
  | 'bold'
  | 'bold-italic'
  | 'medium'
  | 'medium-italic'
  | 'light'
  | 'light-italic'
  | 'book'
  | 'book-italic'
  | 'heading'
  | 'sub-heading'
  | 'input-heading'
  | 'screen-heading'
  | 'screen-description'
  | 'toolbar-heading';

export interface TextProps {
  variant?: Variants;
}
