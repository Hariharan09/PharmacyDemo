export type Variants =
  | 'directions'
  | 'cancel'
  | 'delete-all'
  | 'call'
  | 'e-mail';

export interface TagProps {
  variant: Variants;
  onPress?: () => void;
}
