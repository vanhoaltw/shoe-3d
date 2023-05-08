import { createContext, useContext, useMemo, useState } from "react";

export const shoeScene = {
  laces: "laces",
  mesh: "mesh",
  caps: "caps",
  inner: "inner",
  sole: "sole",
  stripes: "stripes",
  band: "band",
  patch: "patch",
};

const ShoeConfigurationContext = createContext();

const ShoeConfigurationProvider = ({ children }) => {
  const [currentConfig, setCurrentConfig] = useState(null);
  const [color, setColor] = useState(shoeScene);

  const onChangeColor = (value) => {
    setCurrentConfig(Object.keys(value)[0]);
    setColor((pre) => ({ ...pre, ...value }));
  };

  const values = useMemo(
    () => ({ color, onChangeColor, currentConfig, setCurrentConfig }),
    [color, currentConfig]
  );

  return (
    <ShoeConfigurationContext.Provider value={values}>
      {children}
    </ShoeConfigurationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShoeConfiguration = () => {
  return useContext(ShoeConfigurationContext);
};

export default ShoeConfigurationProvider;
