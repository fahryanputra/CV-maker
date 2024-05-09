import InputGroup from "../InputGroup";

function Experience({ experience, setExperience }) {
  function handleExperienceChange(inputName, e) {
    setExperience({ ...experience, [inputName]: e.target.value });
  }

  return (
    <form className="experience">
      <h2>Experience</h2>
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
        labelText="Start Date"
        type="date"
        placeholder="Start date"
        onChange={(e) => handleExperienceChange("startDate", e)}
        value={setExperience.startDate}
      />
      <InputGroup
        id="experience-end-date"
        labelText="End Date"
        type="date"
        placeholder="End date"
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
    </form>
  );
}

export default Experience;
