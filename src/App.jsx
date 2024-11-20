import React from "react";
import MyInput from "./components/MyInput";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5">
      <p>Type and see your result in console</p>
      <MyInput />
    </div>
  );
};

export default App;
