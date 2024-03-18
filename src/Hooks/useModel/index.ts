import {useState} from 'react';

const useModal = (initialValue: boolean) => {
  const [visible, setVisible] = useState(initialValue);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return {
    visible,
    show,
    hide,
  };
};

export {useModal};
