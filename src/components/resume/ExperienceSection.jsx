function ExperienceSection({ experience }) {
  return (
    <div>
      <h2>Experience</h2>
      <div>
        <span>Company Name:</span>
        {experience.companyName && <span>{experience.companyName}</span>}
      </div>
      <div>
        <span>Position Title:</span>
        {experience.positionTitle && <span>{experience.positionTitle}</span>}
      </div>
      <div>
        <span>Job Description:</span>
        {experience.description && <span>{experience.description}</span>}
      </div>
      <div>
        <span>Start Date:</span>
        {experience.startDate && <span>{experience.startDate}</span>}
      </div>
      <div>
        <span>End Date:</span>
        {experience.endDate && <span>{experience.endDate}</span>}
      </div>
      <div>
        <span>Location:</span>
        {experience.location && <span>{experience.location}</span>}
      </div>
    </div>
  );
}

export default ExperienceSection;
