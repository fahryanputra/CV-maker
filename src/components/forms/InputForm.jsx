import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";

function InputForm({ data, setData }) {
  function handleChange(e, formName, id, inputName) {
    setData({
      ...data,
      [formName]: data[formName].map((element) => {
        if (element.id === id) element[inputName] = e.target.value;
        return element;
      }),
    });
  }

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PersonalDetails
        data={data}
        setData={setData}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      />
      <Experience
        data={data}
        setData={setData}
        onChange={handleChange}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      />
      <Education
        data={data}
        setData={setData}
        onChange={handleChange}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      />
    </>
  );
}

export default InputForm;
