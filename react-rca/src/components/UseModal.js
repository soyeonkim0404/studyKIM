import React, { useContext } from 'react';
import { ModalsDispatchContext } from '../context/ModalsContext';

function UseModal() {
  const { open, close } = useContext(ModalsDispatchContext);
  const openModal = (component, props) => {
    open(component, props);
  };
  const closeModal = (component) => {
    close(component);
  };
  return {
    openModal,
    closeModal,
  };
}

export default UseModal;
