import InputGroup from "../InputGroup";

function PersonalDetails({ data, setData }) {
  function handleChange(e, inputName) {
    setData({
      ...data,
      personalDetails: { ...data.personalDetails, [inputName]: e.target.value },
    });
  }

  return (
    <form className="personal-details form-section">
      <h2>
        <span className="material-symbols-outlined">person</span>Personal
        Details
      </h2>
      <div>
        <InputGroup
          id="full-name"
          labelText="Full Name"
          type="text"
          placeholder="First and last name"
          onChange={(e) => handleChange(e, "fullName")}
          value={data.personalDetails.fullName}
        />
        <InputGroup
          id="email"
          labelText="Email"
          type="email"
          placeholder="Email address"
          onChange={(e) => handleChange(e, "email")}
          value={data.personalDetails.email}
        />
        <InputGroup
          id="phone"
          labelText="Phone number"
          type="tel"
          placeholder="Phone number"
          onChange={(e) => handleChange(e, "phone")}
          value={data.personalDetails.phone}
        />
        <InputGroup
          id="address"
          labelText="Address"
          type="textarea"
          placeholder="City, country"
          onChange={(e) => handleChange(e, "address")}
          value={data.personalDetails.address}
        />
        <InputGroup
          id="profile"
          labelText="Self Description (optional)"
          type="textarea"
          placeholder="Short summary about yourself"
          onChange={(e) => handleChange(e, "profile")}
        />
      </div>
    </form>
  );
}

export default PersonalDetails;
