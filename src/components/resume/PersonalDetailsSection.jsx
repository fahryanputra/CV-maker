import "../../styles/PersonalDetailsSection.css";

function PersonalDetailsSection({ data }) {
  return (
    <div>
      <div className="personal-section">
        <div className="resume-name">
          {data.personalDetails.fullName ? (
            <h2>{data.personalDetails.fullName}</h2>
          ) : (
            <p className="resume-name">Full Name</p>
          )}
        </div>
        <div className="resume-contact">
          <div>
            {data.personalDetails.email ? (
              <p>{data.personalDetails.email}</p>
            ) : (
              <p>Email</p>
            )}
          </div>
          <p>|</p>
          <div>
            {data.personalDetails.phone ? (
              <p>{data.personalDetails.phone}</p>
            ) : (
              <p>Phone Number</p>
            )}
          </div>
          <p>|</p>
          <div>
            {data.personalDetails.address ? (
              <p>{data.personalDetails.address}</p>
            ) : (
              <p>Address</p>
            )}
          </div>
        </div>
      </div>
      <div className="resume-profile">
        {data.personalDetails.profile ? (
          <p>{data.personalDetails.profile}</p>
        ) : (
          <p>Self Description</p>
        )}{" "}
      </div>
    </div>
  );
}

export default PersonalDetailsSection;
