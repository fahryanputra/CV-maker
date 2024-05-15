import "../../styles/EducationSection.css";

function EducationSection({ data }) {
  return (
    <div>
      <h2>Education</h2>
      <hr />
      <div className="resume-school">
        <div>
          {data.educations[0].school ? (
            <p>{data.educations[0].school}</p>
          ) : (
            <p>School</p>
          )}
        </div>
        <div className="school-location">
          {data.educations[0].location ? (
            <p>{data.educations[0].location}</p>
          ) : (
            <p>Location</p>
          )}
        </div>
      </div>
      <div className="resume-degree">
        <div>
          {data.educations[0].degree ? (
            <p>{data.educations[0].degree}</p>
          ) : (
            <p>Degree</p>
          )}
        </div>
        <div className="degree-date">
          <p>
            {data.educations[0].startDate ? (
              <span>{data.educations[0].startDate}</span>
            ) : (
              <span>Start Date</span>
            )}
            <span> - </span>
            {data.educations[0].endDate ? (
              <span>{data.educations[0].endDate}</span>
            ) : (
              <span>End Date</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
