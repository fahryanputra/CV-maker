import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExperienceForm from "./ExperienceForm";

function Experience({ data, setData, isActive, onShow }) {
  function handleExperienceChange(id, inputName, e) {
    setData({
      ...data,
      experiences: data.experiences.map((experience) => {
        if (experience.id === id) experience[inputName] = e.target.value;
        return experience;
      }),
    });
  }

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
    <form className="experience">
      <h2 onClick={onShow}>Experience</h2>
      {isActive &&
        data.experiences.map((experience, index) => (
          <ExperienceForm
            key={experience.id}
            onChange={handleExperienceChange}
            experience={experience}
            index={index}
            isVisible={activeIndex === index}
            onVisible={() => setActiveIndex(index)}
          />
        ))}
      {isActive && data.experiences.length < 3 && (
        <button onClick={(e) => addExperience(data, setData, e)}>
          Add experience
        </button>
      )}
    </form>
  );
}

export default Experience;
