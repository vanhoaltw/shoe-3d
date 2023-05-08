import { shoeScene, useShoeConfiguration } from "../context/ShoeConfigurtion";

const debounce = (fn, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};

const Configuration = () => {
  const { onChangeColor, setCurrentConfig } = useShoeConfiguration();

  const onInputFocus = (name) => {
    setCurrentConfig(name);
  };

  const onInputBlur = () => {
    setCurrentConfig(null);
    // debounce(() => , 250);
  };

  return (
    <div className="configuration">
      <h4 style={{ margin: 0 }}>Setting</h4>
      <hr />
      {Object.keys(shoeScene).map((k) => (
        <div key={k}>
          <label htmlFor={k} className="configuration-label">
            {k}
          </label>
          <input
            type="color"
            id={k}
            onBlur={onInputBlur}
            onFocus={() => onInputFocus(k)}
            onChange={(e) => onChangeColor({ [k]: e.target.value })}
          />
        </div>
      ))}
    </div>
  );
};

export default Configuration;
