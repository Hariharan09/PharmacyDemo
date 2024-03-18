export interface SearchInputProps {
  heading?: string;
  onChangeText?: (search: string) => void;
  onSubmit?: (search: string) => void;
  onSortClick?: () => void;
  searchIcon?: boolean;
  onSearchPress?: (search: string) => void;
  onSearchClear?: () => void;
}
