export interface GenericStatusResponse {
  success: boolean;
  status: string;
  message: string;
  errorMessage: string;
}

export interface GenericStatusPaginationResponse {
  success: boolean;
  status: string;
  message: string;
  errorMessage?: string;
  details: GetAssociatedCompanies;
}

/**
 * Association
 */
export interface GetAssociatedCompanies
  extends GenericStatusPaginationResponse {
  total: number;
  num_pages: number;
  next_page: number;
  data: Array<GetAssociatedCompaniesItem>;
}

export interface GetAssociatedCompaniesItem {
  id: string;
  branch_id: string;
  display_name: string;
  phone: string;
  email: string;
  sector: string;
  address: string;
  logo: string;
  attachment_logo: string;
}

export interface ValidateUserBusinessResponse {
  success: boolean;
  status: string;
  message_duration: 'A' | 'S' | 'L' | 'M';
  error_message: string;
  status_code: number;
}

export interface ValidateUserBusinessResponse {
  success: boolean;
  status: string;
  message_duration: 'A' | 'S' | 'L' | 'M';
  error_message: string;
  status_code: number;
}

export interface RegisterUserResponse {
  success: boolean;
  status: string;
  message: string;
}
export interface GetDesignationResponse {
  success: boolean;
  status: string;
  message: string;
}

export interface OtpRegisterResponse {
  success: boolean;
  status: string;
  status_code: number;
  message_duration: string;
  error_message: string;
}
export interface UserBusinessPlaceItemResponse extends GenericStatusResponse {
  id: string;
  title: string;
  address: string;
}

export interface UserBusinessPlaceResponse extends GenericStatusResponse {
  details: Array<UserBusinessPlaceResponse>;
}

export interface CommonApiResponse {
  success: boolean;
  status: string;
  message: string;
}

export interface BrandSectorDetailsItem {
  id: string;
  name: string;
}
export interface BrandSectors extends CommonApiResponse {
  details: Array<BrandSectorDetailsItem>;
}

export interface BusinessPlaceDetailsDetailsItem {
  business_name: string;
  business_address: string;
  pin_code: string;
  contact_number: string;
  maps_url: string;
}
export interface BusinessPlaceDetails extends CommonApiResponse {
  details: BusinessPlaceDetailsDetailsItem;
}
export interface SectorServiceTypesDetailsItemProps {
  id: string;
  name: string;
  sector_id: string;
}

export interface SectorServiceTypesProps extends CommonApiResponse {
  details: SectorServiceTypesDetailsItemProps;
}

export interface RegisterCompanyProps {
  detail: string;
}

export interface CommonApiResponse {
  success: boolean;
  status: string;
  message: string;
}

export interface BrandSectorDetailsItem {
  id: string;
  name: string;
}
export interface BrandSectors extends CommonApiResponse {
  details: Array<BrandSectorDetailsItem>;
}

export interface BusinessPlaceDetailsDetailsItem {
  business_name: string;
  business_address: string;
  pin_code: string;
  contact_number: string;
  maps_url: string;
}
export interface BusinessPlaceDetails extends CommonApiResponse {
  details: BusinessPlaceDetailsDetailsItem;
}
export interface SectorServiceTypesDetailsItemProps {
  id: string;
  name: string;
  sector_id: string;
}

export interface SectorServiceTypesProps extends CommonApiResponse {
  details: SectorServiceTypesDetailsItemProps;
}

export interface RegisterCompanyProps {
  detail: string;
}
