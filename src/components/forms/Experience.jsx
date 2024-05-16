import InputGroup from "../InputGroup";
import { v4 as uuidv4 } from "uuid";

function ExperienceForm(data, setData, experience) {
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
    <div key={experience.id}>
      <InputGroup
        id="company-name"
        labelText="Company Name"
        type="text"
        placeholder="Company name"
        onChange={(e) => {
          handleExperienceChange(experience.id, "companyName", e);
        }}
        value={experience.companyName}
      />
      <InputGroup
        id="position-title"
        labelText="Position Title"
        type="text"
        placeholder="Position title"
        onChange={(e) =>
          handleExperienceChange(experience.id, "positionTitle", e)
        }
        value={experience.positionTitle}
      />
      <InputGroup
        id="description"
        labelText="Description"
        type="textarea"
        placeholder="Job description"
        onChange={(e) =>
          handleExperienceChange(experience.id, "description", e)
        }
        value={experience.description}
      />
      <InputGroup
        id="experience-start-date"
        labelText="Start Year"
        type="text"
        placeholder="Start year"
        onChange={(e) => handleExperienceChange(experience.id, "startDate", e)}
        value={experience.startDate}
      />
      <InputGroup
        id="experience-end-date"
        labelText="End Year"
        type="text"
        placeholder='End year or "Present"'
        onChange={(e) => handleExperienceChange(experience.id, "endDate", e)}
        value={experience.endDate}
      />
      <InputGroup
        id="experience-location"
        labelText="Company's Location"
        type="text"
        placeholder="Company's location"
        onChange={(e) => handleExperienceChange(experience.id, "location", e)}
        value={experience.location}
      />
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
  }

  return (
    <form className="experience">
      <h2 onClick={onShow}>Experience</h2>
      {isActive &&
        data.experiences.map((experience) =>
          ExperienceForm(data, setData, experience)
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
