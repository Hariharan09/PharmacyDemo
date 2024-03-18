import {useState} from 'react';

const useLoader = (initialValue: boolean) => {
  const [loader, setLoader] = useState(initialValue);

  const hideLoader = () => {
    setLoader(false);
  };

  const showLoader = () => {
    setLoader(true);
  };

  return {
    loader,
    showLoader,
    hideLoader,
  };
};

export {useLoader};
