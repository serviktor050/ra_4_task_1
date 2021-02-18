import React from "react";
import { useState } from "react";
import hexToRgb from "../functions/hexToRgb";

const DEFAULT = {
  hex: "#",
  rgb: "",
  backgroundColor: "#808080",
};

const regexp = /#[a-f0-9]{6}/gi;

export default function ConverterForm() {
  const [state, setState] = useState(DEFAULT);

  const onFormFieldChange = (e) => {
    if (e.target.value.length < 7) {
      setState((prev) => ({ ...prev, hex: e.target.value }));
      return;
    } else {
      setState((prev) => ({
        ...prev,
        hex: e.target.value,
        rgb: "Ошибка",
      }));
    }

    if (e.target.value.match(regexp)) {
      const rgb = hexToRgb(e.target.value);
      setState({
        hex: e.target.value,
        rgb: `rgb(${rgb.r},${rgb.g},${rgb.b})`,
        backgroundColor: e.target.value,
      });
    } else {
      setState((prev) => ({
        ...prev,
        hex: e.target.value,
        rgb: "Ошибка",
      }));
    }
  };

  return (
    <div
      className="background-color"
      style={{ backgroundColor: state.backgroundColor }}
    >
      <form className="convert-color-form">
        <input
          type="text"
          name="hex"
          onChange={onFormFieldChange}
          value={state.hex}
        />
        <input
          type="text"
          name="rgb"
          onChange={onFormFieldChange}
          value={state.rgb}
        />
      </form>
    </div>
  );
}
