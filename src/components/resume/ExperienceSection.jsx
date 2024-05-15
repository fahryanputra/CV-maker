import "../../styles/ExperienceSection.css";

function ExperienceSection({ data }) {
  return (
    <div>
      <h2>Experience</h2>
      <hr />
      <div className="resume-company">
        <div className="company-name">
          {data.experiences[0].companyName ? (
            <p>{data.experiences[0].companyName}</p>
          ) : (
            <p>Company Name</p>
          )}
        </div>
        <div className="company-location">
          {data.experiences[0].location ? (
            <p>{data.experiences[0].location}</p>
          ) : (
            <p>Location</p>
          )}
        </div>
      </div>
      <div className="resume-job">
        <div>
          {data.experiences[0].positionTitle ? (
            <p>{data.experiences[0].positionTitle}</p>
          ) : (
            <p>Position Title</p>
          )}
        </div>
        <div className="job-date">
          <p>
            {data.experiences[0].startDate ? (
              <span>{data.experiences[0].startDate}</span>
            ) : (
              <span>Start Date</span>
            )}
            <span> - </span>
            {data.experiences[0].endDate ? (
              <span>{data.experiences[0].endDate}</span>
            ) : (
              <span>End Date</span>
            )}
          </p>
        </div>
      </div>
      <div className="resume-description">
        {data.experiences[0].description ? (
          <p>{data.experiences[0].description}</p>
        ) : (
          <p>Job Description</p>
        )}
      </div>
    </div>
  );
}

export default ExperienceSection;
