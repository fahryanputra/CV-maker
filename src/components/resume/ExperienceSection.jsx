import "../../styles/ResumeContent.css";

function ExperiencePreview(experience) {
  return (
    <div className="resume-content" key={experience.id}>
      <div className="first-line">
        <div className="left-column">
          {experience.companyName ? (
            <p>{experience.companyName}</p>
          ) : (
            <p>Company Name</p>
          )}
        </div>
        <div className="right-column">
          {experience.location ? <p>{experience.location}</p> : <p>Location</p>}
        </div>
      </div>
      <div className="second-line">
        <div className="left-column">
          {experience.positionTitle ? (
            <p>{experience.positionTitle}</p>
          ) : (
            <p>Position Title</p>
          )}
        </div>
        <div className="right-column">
          <p>
            {experience.startDate ? (
              <span>{experience.startDate}</span>
            ) : (
              <span>Start Date</span>
            )}
            <span> - </span>
            {experience.endDate ? (
              <span>{experience.endDate}</span>
            ) : (
              <span>End Date</span>
            )}
          </p>
        </div>
      </div>
      <div className="third-line">
        {experience.description && <p>{experience.description}</p>}
      </div>
    </div>
  );
}

function ExperienceSection({ data }) {
  return (
    <div>
      <h2>Experiences</h2>
      <hr />
      {data.experiences.map((experience) => ExperiencePreview(experience))}
    </div>
  );
}

export default ExperienceSection;
