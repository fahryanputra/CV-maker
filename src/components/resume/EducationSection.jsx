function EducationSection({ education }) {
  return (
    <div>
      <h2>Education</h2>
      <div>
        <span>School:</span>
        {education.school && <span>{education.school}</span>}
      </div>
      <div>
        <span>Degree:</span>
        {education.degree && <span>{education.degree}</span>}
      </div>
      <div>
        <span>Start Date:</span>
        {education.startDate && <span>{education.startDate}</span>}
      </div>
      <div>
        <span>End Date:</span>
        {education.endDate && <span>{education.endDate}</span>}
      </div>
      <div>
        <span>Location:</span>
        {education.location && <span>{education.location}</span>}
      </div>
    </div>
  );
}

export default EducationSection;
