import "../../styles/ExperienceSection.css";

function ExperienceSection({ experience }) {
  return (
    <div>
      <h2>Experience</h2>
      <hr />
      <div className="resume-company">
        <div className="company-name">
          {experience.companyName ? (
            <p>{experience.companyName}</p>
          ) : (
            <p>Company Name</p>
          )}
        </div>
        <div className="company-location">
          {experience.location ? <p>{experience.location}</p> : <p>Location</p>}
        </div>
      </div>
      <div className="resume-job">
        <div>
          {experience.positionTitle ? (
            <p>{experience.positionTitle}</p>
          ) : (
            <p>Position Title</p>
          )}
        </div>
        <div className="job-date">
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
      <div className="resume-description">
        {experience.description ? (
          <p>{experience.description}</p>
        ) : (
          <p>Job Description</p>
        )}
      </div>
    </div>
  );
}

export default ExperienceSection;
