import InputGroup from "../InputGroup";

function Experience({ experience, setExperience, isActive, onShow }) {
  function handleExperienceChange(inputName, e) {
    setExperience({ ...experience, [inputName]: e.target.value });
  }

  const form = (
    <div>
      <InputGroup
        id="company-name"
        labelText="Company Name"
        type="text"
        placeholder="Company name"
        onChange={(e) => handleExperienceChange("companyName", e)}
        value={setExperience.companyName}
      />
      <InputGroup
        id="position-title"
        labelText="Position Title"
        type="text"
        placeholder="Position title"
        onChange={(e) => handleExperienceChange("positionTitle", e)}
        value={setExperience.positionTitle}
      />
      <InputGroup
        id="description"
        labelText="Description"
        type="textarea"
        placeholder="Job description"
        onChange={(e) => handleExperienceChange("description", e)}
        value={setExperience.description}
      />
      <InputGroup
        id="experience-start-date"
        labelText="Start Year"
        type="text"
        placeholder="Start year"
        onChange={(e) => handleExperienceChange("startDate", e)}
        value={setExperience.startDate}
      />
      <InputGroup
        id="experience-end-date"
        labelText="End Year"
        type="text"
        placeholder='End year or "Present"'
        onChange={(e) => handleExperienceChange("endDate", e)}
        value={setExperience.endDate}
      />
      <InputGroup
        id="experience-location"
        labelText="Company's Location"
        type="text"
        placeholder="Company's location"
        onChange={(e) => handleExperienceChange("location", e)}
        value={setExperience.location}
      />
      <button>Add</button>
    </div>
  );

  return (
    <form className="experience">
      <h2 onClick={onShow}>Experience</h2>
      {isActive && form}
    </form>
  );
}

export default Experience;
