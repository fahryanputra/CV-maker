function PersonalDetailsSection({ personalDetails }) {
  return (
    <div>
      <h2>Personal Details</h2>
      <div>
        <span>Name:</span>
        {personalDetails.fullName && <span>{personalDetails.fullName}</span>}
      </div>
      <div>
        <span>Email:</span>
        {personalDetails.email && <span>{personalDetails.email}</span>}
      </div>
      <div>
        <span>Phone Number:</span>
        {personalDetails.phone && <span>{personalDetails.phone}</span>}
      </div>
      <div>
        <span>Address:</span>
        {personalDetails.address && <span>{personalDetails.address}</span>}
      </div>
    </div>
  );
}

export default PersonalDetailsSection;
