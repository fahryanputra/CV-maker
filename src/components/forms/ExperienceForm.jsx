import InputGroup from "../InputGroup";

function ExperienceForm({ onChange, experience, index, isVisible, onVisible }) {
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
              onChange(experience.id, "companyName", e);
            }}
            value={experience.companyName}
          />
          <InputGroup
            id={"position-title-" + index}
            labelText="Position Title"
            type="text"
            placeholder="Position title"
            onChange={(e) => onChange(experience.id, "positionTitle", e)}
            value={experience.positionTitle}
          />
          <InputGroup
            id={"description-" + index}
            labelText="Description"
            type="textarea"
            placeholder="Job description"
            onChange={(e) => onChange(experience.id, "description", e)}
            value={experience.description}
          />
          <InputGroup
            id={"experience-start-date-" + index}
            labelText="Start Year"
            type="text"
            placeholder="Start year"
            onChange={(e) => onChange(experience.id, "startDate", e)}
            value={experience.startDate}
          />
          <InputGroup
            id={"experience-end-date-" + index}
            labelText="End Year"
            type="text"
            placeholder='End year or "Present"'
            onChange={(e) => onChange(experience.id, "endDate", e)}
            value={experience.endDate}
          />
          <InputGroup
            id={"experience-location-" + index}
            labelText="Company's Location"
            type="text"
            placeholder="Company's location"
            onChange={(e) => onChange(experience.id, "location", e)}
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

export default ExperienceForm;
