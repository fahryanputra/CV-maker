import InputGroup from "../InputGroup";

function PersonalDetails({ data, setData, isActive, onShow }) {
  function handlePersonalDetailsChange(inputName, e) {
    setData({
      ...data,
      personalDetails: { ...data.personalDetails, [inputName]: e.target.value },
    });
  }

  const children = (
    <div>
      <InputGroup
        id="full-name"
        labelText="Full Name"
        type="text"
        placeholder="First and last name"
        onChange={(e) => handlePersonalDetailsChange("fullName", e)}
        value={data.personalDetails.fullName}
      />
      <InputGroup
        id="email"
        labelText="Email"
        type="email"
        placeholder="Email address"
        onChange={(e) => handlePersonalDetailsChange("email", e)}
        value={data.personalDetails.email}
      />
      <InputGroup
        id="phone"
        labelText="Phone number"
        type="tel"
        placeholder="Phone number"
        onChange={(e) => handlePersonalDetailsChange("phone", e)}
        value={data.personalDetails.phone}
      />
      <InputGroup
        id="address"
        labelText="Address"
        type="textarea"
        placeholder="Home address"
        onChange={(e) => handlePersonalDetailsChange("address", e)}
        value={data.personalDetails.address}
      />
      <InputGroup
        id="profile"
        labelText="Personal profile"
        type="textarea"
        placeholder="Short summary about yourself"
        onChange={(e) => handlePersonalDetailsChange("profile", e)}
      />
    </div>
  );

  return (
    <form className="personal-details">
      <h2 onClick={onShow}>Personal Details</h2>
      {isActive && children}
    </form>
  );
}

export default PersonalDetails;
