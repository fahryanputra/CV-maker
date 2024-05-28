import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExperienceForm from "./ExperienceForm";

function Experience({ data, setData, onChange, isActive, onShow, removeForm }) {
  function addExperience(data, setData, e) {
    e.preventDefault();
    setData({
      ...data,
      experiences: [
        ...data.experiences,
        {
          id: uuidv4(),
          companyName: "",
          positionTitle: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      ],
    });
    setActiveIndex(data.experiences.length);
  }

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <form className="form-section">
      <h2 onClick={onShow}>
        <span className="material-symbols-outlined">work</span>Experiences
      </h2>
      {isActive &&
        data.experiences.map((experience, index) => (
          <ExperienceForm
            key={experience.id}
            onChange={onChange}
            experience={experience}
            index={index}
            isVisible={activeIndex === index}
            onVisible={() => setActiveIndex(index)}
            removeForm={removeForm}
            experiencesLength={data.experiences.length}
          />
        ))}
      {isActive && data.experiences.length < 3 && (
        <button
          className="button-add"
          onClick={(e) => addExperience(data, setData, e)}
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      )}
    </form>
  );
}

export default Experience;
