import React, { useMemo, useState } from 'react';
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from '../context/ModalsContext';

const ModalsProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState([]);

  const open = (component, props) => {
    setOpenModals((modals) => {
      return [...modals, { component, props }];
    });
  };

  const close = (component) => {
    setOpenModals((modals) => {
      return modals.filter((modal) => {
        return modal.component !== component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
