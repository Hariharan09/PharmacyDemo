export interface MultiSelectImagePickerProps {
  defaultData: Array<any>;
  alignment?: number;
  noOfPictures?: number;
  onResponse?: (photo: any) => void;
  heading?: string;
}
