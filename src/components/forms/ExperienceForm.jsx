import InputGroup from "../InputGroup";

function ExperienceForm({
  onChange,
  experience,
  index,
  isVisible,
  onVisible,
  removeForm,
  experiencesLength,
}) {
  const formName = "experiences";

  return (
    <div className="visible" onClick={onVisible} key={experience.id}>
      {isVisible ? (
        <div>
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
          <div className="button-delete container">
            {experiencesLength > 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeForm("experiences", experience.id);
                }}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <h4 className="collapsed">
          {experience.companyName
            ? experience.companyName
            : "Empty company name"}
        </h4>
      )}
    </div>
  );
}

export default ExperienceForm;
