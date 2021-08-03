import React from 'react';
import './Switcher.css';

const Switcher = ({ setSwitcher, switcher }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        checked={switcher}
        onChange={() => {
          setSwitcher((prev) => !prev)
        }}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default Switcher;
