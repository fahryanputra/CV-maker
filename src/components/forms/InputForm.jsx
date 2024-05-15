import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";

function InputForm({ data, setData }) {
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
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      />
      <Education
        data={data}
        setData={setData}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      />
    </>
  );
}

export default InputForm;
