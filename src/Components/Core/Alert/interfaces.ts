import React from 'react';

export interface AlertProps {
  visible: boolean;
  title?: string;
  content?: React.ReactNode;
  dismiss?: boolean;
  onShow?: () => void;
  onClose?: () => void;
  onDismiss?: () => void;
}
