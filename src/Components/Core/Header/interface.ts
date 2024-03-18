type Variants = 'back' | 'menu' | 'menu-agent' | 'thread' | 'companyHeader';
export interface HeaderProps {
  variant?: Variants;
  heading?: string | null | undefined;
  subHeading?: string;
  onUserPress?: () => void;
  onMenuDotButton?: () => void;
  onCallPress?: () => void;
  onEmailPress?: () => void;
}
