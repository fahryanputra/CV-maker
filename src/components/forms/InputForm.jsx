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

  function toggleFormVisibility(index) {
    if (activeIndex === index) {
      showChildren ? setShowChildren(false) : setShowChildren(true);
    } else {
      setActiveIndex(index);
      setShowChildren(true);
    }
  }

  function removeForm(formName, id) {
    setData({
      ...data,
      [formName]: data[formName].filter((element) => element.id !== id),
    });
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [showChildren, setShowChildren] = useState(true);

  return (
    <>
      <PersonalDetails data={data} setData={setData} />
      <Experience
        data={data}
        setData={setData}
        onChange={handleChange}
        isActive={activeIndex === 1 && showChildren}
        onShow={() => toggleFormVisibility(1)}
        removeForm={removeForm}
      />
      <Education
        data={data}
        setData={setData}
        onChange={handleChange}
        isActive={activeIndex === 2 && showChildren}
        onShow={() => toggleFormVisibility(2)}
        removeForm={removeForm}
      />
    </>
  );
}

export default InputForm;
