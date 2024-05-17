import InputGroup from "../InputGroup";

function ExperienceForm({ onChange, experience, index, isVisible, onVisible }) {
  const formName = "experiences";

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
              onChange(e, formName, experience.id, "companyName");
            }}
            value={experience.companyName}
          />
          <InputGroup
            id={"position-title-" + index}
            labelText="Position Title"
            type="text"
            placeholder="Position title"
            onChange={(e) =>
              onChange(e, formName, experience.id, "positionTitle")
            }
            value={experience.positionTitle}
          />
          <InputGroup
            id={"description-" + index}
            labelText="Description"
            type="textarea"
            placeholder="Job description"
            onChange={(e) =>
              onChange(e, formName, experience.id, "description")
            }
            value={experience.description}
          />
          <InputGroup
            id={"experience-start-date-" + index}
            labelText="Start Year"
            type="text"
            placeholder="Start year"
            onChange={(e) => onChange(e, formName, experience.id, "startDate")}
            value={experience.startDate}
          />
          <InputGroup
            id={"experience-end-date-" + index}
            labelText="End Year"
            type="text"
            placeholder='End year or "Present"'
            onChange={(e) => onChange(e, formName, experience.id, "endDate")}
            value={experience.endDate}
          />
          <InputGroup
            id={"experience-location-" + index}
            labelText="Company's Location"
            type="text"
            placeholder="Company's location"
            onChange={(e) => onChange(e, formName, experience.id, "location")}
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
