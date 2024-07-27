import React, { useMemo, useState } from 'react';

export const LayerContext = React.createContext({
  isLayerOpen: false,
  setIsLayerOpen: () => { },
});

export const LayerProvider = ({ children }) => {
  const [isLayerOpen, setIsLayerOpen] = useState(false);

  const value = useMemo(() => ({
    isLayerOpen,
    setIsLayerOpen
  }), [isLayerOpen]);
  
  return (
    <LayerContext.Provider value={value}>
      {children}
    </LayerContext.Provider>
  )
}