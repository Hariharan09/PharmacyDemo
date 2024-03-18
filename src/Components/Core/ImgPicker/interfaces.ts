export interface ImagePickerProps {
  type?: 'camera' | 'gallery' | 'both';
  front?: boolean;
  crop?: boolean;
  onResponse: (image: any) => void;
  onDeleteResponse?: () => void;
  defaultImage?: any;
  heading?: string | undefined | null;
  h?: number;
  w?: number;
  isDelete?: boolean;
}
