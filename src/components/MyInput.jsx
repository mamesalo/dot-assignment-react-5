import { useState } from "react";

const MyInput = () => {
  const [value, setvalue] = useState("");
  console.log(value);

  return (
    <input
      type="text"
      className="p-5 border-2 rounded-lg border-gray-800"
      value={value}
      placeholder="Example"
      onChange={(e) => setvalue(e.target.value)}
    />
  );
};

export default MyInput;
