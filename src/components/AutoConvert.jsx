import React, { useState } from "react";

const AutoConverter = () => {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("kilometer");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    if (unit === "kilometer") {
      // Automatically convert to millimeters when the user enters a value in kilometers
      const millimetersValue = parseFloat(inputValue) * 1000000;
      setUnit("millimeter");
      setValue(millimetersValue.toFixed(2));
    }
  };

  const handleToggleUnit = () => {
    // Toggle between kilometers and millimeters
    setUnit((prevUnit) =>
      prevUnit === "kilometer" ? "millimeter" : "kilometer"
    );
    // Automatically convert to the new unit
    if (unit === "kilometer") {
      const millimetersValue = parseFloat(value) * 1000000;
      setValue(millimetersValue.toFixed(2));
    } else {
      const kilometersValue = parseFloat(value) / 1000000;
      setValue(kilometersValue.toFixed(2));
    }
  };

  return (
    <div>
      <label>
        {unit === "kilometer" ? "Kilometers:" : "Millimeters:"}
        <input type="number" value={value} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleToggleUnit}>
        Convert to {unit === "kilometer" ? "Millimeters" : "Kilometers"}
      </button>
    </div>
  );
};

export default AutoConverter;
