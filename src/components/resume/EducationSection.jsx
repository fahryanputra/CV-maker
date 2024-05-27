import "../../styles/EducationSection.css";

function EducationPreview(education) {
  return (
    <div className="resume-education" key={education.id}>
      <div className="resume-school">
        <div>
          {education.school ? <p>{education.school}</p> : <p>School</p>}
        </div>
        <div className="school-location">
          {education.location ? <p>{education.location}</p> : <p>Location</p>}
        </div>
      </div>
      <div className="resume-degree">
        <div>
          {education.degree ? <p>{education.degree}</p> : <p>Degree</p>}
        </div>
        <div className="degree-date">
          <p>
            {education.startDate ? (
              <span>{education.startDate}</span>
            ) : (
              <span>Start Date</span>
            )}
            <span> - </span>
            {education.endDate ? (
              <span>{education.endDate}</span>
            ) : (
              <span>End Date</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function EducationSection({ data }) {
  return (
    <div>
      <h2>Educations</h2>
      <hr />
      {data.educations.map((education) => EducationPreview(education))}
    </div>
  );
}

export default EducationSection;
