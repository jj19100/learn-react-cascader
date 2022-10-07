import { useState } from "react";
import { CascaderModal, options } from "./components/Cascader";
function App() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState([]);
  const openCascader = () => {
    setVisible(true)
  }
  const handlePickerChange = (e) => {
    console.log("change:", e)
  }

  const handleCancel = (e) => {
    console.log("cancle:", e)
  }

  const handleConfirm = (e) => {
    console.log("confirm:", e)
  }

  return (
    <div className="App">
      <button onClick={openCascader}>打开</button>
      <CascaderModal
        value={value}
        options={options}
        visible={visible}
        onSelect={handlePickerChange}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default App;
