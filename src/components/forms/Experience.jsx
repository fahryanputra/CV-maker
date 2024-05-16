import { useState } from "react";
import InputGroup from "../InputGroup";
import { v4 as uuidv4 } from "uuid";

function ExperienceForm(
  data,
  setData,
  experience,
  index,
  isVisible,
  onVisible
) {
  function handleExperienceChange(id, inputName, e) {
    setData({
      ...data,
      experiences: data.experiences.map((experience) => {
        if (experience.id === id) experience[inputName] = e.target.value;
        return experience;
      }),
    });
  }

  return (
    <div onClick={onVisible} key={experience.id}>
      {isVisible ? (
        <div>
          <h4>Experience {index + 1}</h4>
          <InputGroup
            id={"company-name-" + index}
            labelText="Company Name"
            type="text"
            placeholder="Company name"
            onChange={(e) => {
              handleExperienceChange(experience.id, "companyName", e);
            }}
            value={experience.companyName}
          />
          <InputGroup
            id={"position-title-" + index}
            labelText="Position Title"
            type="text"
            placeholder="Position title"
            onChange={(e) =>
              handleExperienceChange(experience.id, "positionTitle", e)
            }
            value={experience.positionTitle}
          />
          <InputGroup
            id={"description-" + index}
            labelText="Description"
            type="textarea"
            placeholder="Job description"
            onChange={(e) =>
              handleExperienceChange(experience.id, "description", e)
            }
            value={experience.description}
          />
          <InputGroup
            id={"experience-start-date-" + index}
            labelText="Start Year"
            type="text"
            placeholder="Start year"
            onChange={(e) =>
              handleExperienceChange(experience.id, "startDate", e)
            }
            value={experience.startDate}
          />
          <InputGroup
            id={"experience-end-date-" + index}
            labelText="End Year"
            type="text"
            placeholder='End year or "Present"'
            onChange={(e) =>
              handleExperienceChange(experience.id, "endDate", e)
            }
            value={experience.endDate}
          />
          <InputGroup
            id={"experience-location-" + index}
            labelText="Company's Location"
            type="text"
            placeholder="Company's location"
            onChange={(e) =>
              handleExperienceChange(experience.id, "location", e)
            }
            value={experience.location}
          />
        </div>
      ) : (
        <h4>
          {experience.companyName ? experience.companyName : "Blank Company"}
        </h4>
      )}
    </div>
  );
}

function Experience({ data, setData, isActive, onShow }) {
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
        data.experiences.map((experience, index) =>
          ExperienceForm(
            data,
            setData,
            experience,
            index,
            activeIndex === index,
            () => setActiveIndex(index)
          )
        )}
      {isActive && data.experiences.length < 3 && (
        <button onClick={(e) => addExperience(data, setData, e)}>
          Add experience
        </button>
      )}
    </form>
  );
}

export default Experience;
