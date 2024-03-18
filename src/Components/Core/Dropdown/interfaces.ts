export type DropDownItem = {
  sector_id?: string | boolean;
  id: any;
  title?: string | undefined;
  name?: string | undefined;
};
export interface DropDownProps {
  heading?: string | null;
  onItemClick?: (selected: DropDownItem) => void;
  dropDownData: Array<DropDownItem>;
  selected?: DropDownItem | any;
}
