import "../../styles/PersonalDetailsSection.css";

function PersonalDetailsSection({ personalDetails }) {
  return (
    <div>
      <div className="personal-section">
        <div className="resume-name">
          {personalDetails.fullName ? (
            <h2>{personalDetails.fullName}</h2>
          ) : (
            <p className="resume-name">Full Name</p>
          )}
        </div>
        <div className="resume-contact">
          <div>
            {personalDetails.email ? (
              <p>{personalDetails.email}</p>
            ) : (
              <p>Email</p>
            )}
          </div>
          <p>|</p>
          <div>
            {personalDetails.phone ? (
              <p>{personalDetails.phone}</p>
            ) : (
              <p>Phone Number</p>
            )}
          </div>
          <p>|</p>
          <div>
            {personalDetails.address ? (
              <p>{personalDetails.address}</p>
            ) : (
              <p>Address</p>
            )}
          </div>
        </div>
      </div>
      <div className="resume-profile">
        {personalDetails.profile ? (
          <p>{personalDetails.profile}</p>
        ) : (
          <p>Self Description</p>
        )}{" "}
      </div>
    </div>
  );
}

export default PersonalDetailsSection;
