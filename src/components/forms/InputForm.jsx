import "../../styles/InputForm.css";
import "../../styles/FormSection.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";
import { jsPDF } from "jspdf";

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

  function printResume() {
    const resume = new jsPDF("portrait", "pt", "a4");
    let pageCount = resume.internal.getNumberOfPages();

    resume.html(document.querySelector(".resume")).then(() => {
      resume.deletePage(pageCount + 1);
      resume.save("resume.pdf");
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
    <div className={"input-form"}>
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

      <button className="button-download" onClick={printResume}>
        <p>
          <span className="material-symbols-outlined">save</span>Download resume
        </p>
      </button>
    </div>
  );
}

export default InputForm;
