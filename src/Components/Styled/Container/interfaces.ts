export type Variants =
  | 'card'
  | 'card-search'
  | 'divider'
  | 'divider-v'
  | 'rounded-cart'
  | 'rounded-cart-count'
  | 'tool-bar'
  | 'dropdown'
  | 'dropdown-item'
  | 'add'
  | 'edit'
  | 'tag'
  | 'rounded-icon'
  | 'screen'
  | 'card-service'
  | 'card-issue'
  | 'bottom-tab'
  | 'rounded-camera-bg'
  | 'image-picker'
  | 'grey'
  | 'rounded-notify'
  |'square-location'
  |'medium-card'
  | 'small-card';

export interface ContainerProps {
  variant?: Variants;
}
