import {transformProps} from '../../Components/Styled/Css/interfaces';
import {keys} from 'lodash';
import {Linking, Platform} from 'react-native';
import {SERVER} from '../../Services';

export const suffixPx = (val?: string | number) => {
  if (typeof val === 'string') {
    return val;
  }

  return val + 'px';
};

export const parseTransformCss = (transform: transformProps): string => {
  let parsed = '';

  transform.forEach(item => {
    const itemKeys = keys(item);

    itemKeys.forEach(key => {
      parsed += `${key}(${item[key as keyof typeof item]}) `;
    });
  });

  return parsed;
};

export function getStatusFromCode(dashboardDetails: any, status: string) {
  const statusCodes: any = {};
  dashboardDetails?.ticket_status?.forEach((pair: any) => {
    const code = pair[0];
    const description = pair[1];
    statusCodes[code] = description;
  });

  return statusCodes[status];
}

export function arrayOrderbyCreatedAt(array: any) {
  let modifiedArray = [];
  if (array && array.length > 0) {
    modifiedArray = array.sort((a: any, b: any) => {
      return a.created_at < b.created_at
        ? -1
        : a.created_at > b.created_at
        ? 1
        : 0;
    });
    return modifiedArray;
  }
}

export const dialCall = (number: any) => {
  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }
  Linking.openURL(phoneNumber);
};

export const mailTo = (email: any) => {
  Linking.openURL('mailto:' + email);
};

export const getPhotos = (photo: any) => {
  if (photo) {
    if (photo.substring(0, 4) === 'http') {
      return photo;
    } else {
      return SERVER + photo;
    }
  }
};

export const getShrinkData = (name: any) => {
  if (name.length > 9) {
    return name.substring(0, 9) + '...';
  } else {
    return name;
  }
};
