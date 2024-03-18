export type MultiScreenDropdownItem = {
  id: any;
  title?: string | undefined;
  name?: string | undefined;
};
export interface MultiScreenDropdownProps {
  heading?: string | null;
  onSubmit?: (array: any) => void;
  dropDownData: Array<MultiScreenDropdownItem>;
  selected?: any;
}
