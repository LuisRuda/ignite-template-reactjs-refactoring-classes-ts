import React from 'react';

export interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}