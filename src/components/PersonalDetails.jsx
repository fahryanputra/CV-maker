import InputGroup from "./InputGroup";

function PersonalDetails({ personalDetails, setPersonalDetails }) {
  function handlePersonalDetailsChange(inputName, e) {
    setPersonalDetails({ ...personalDetails, [inputName]: e.target.value });
  }

  return (
    <form className="personal-details">
      <h2>Personal Details</h2>
      <InputGroup
        id="full-name"
        labelText="Full Name"
        type="text"
        placeholder="First and last name"
        onChange={(e) => handlePersonalDetailsChange("fullName", e)}
        value={personalDetails.fullName}
      />
      <InputGroup
        id="email"
        labelText="Email"
        type="email"
        placeholder="Email address"
        onChange={(e) => handlePersonalDetailsChange("email", e)}
        value={personalDetails.email}
      />
      <InputGroup
        id="phone"
        labelText="Phone number"
        type="tel"
        placeholder="Phone number"
        onChange={(e) => handlePersonalDetailsChange("phone", e)}
        value={personalDetails.phone}
      />
      <InputGroup
        id="address"
        labelText="Address"
        type="textarea"
        placeholder="Home address"
        onChange={(e) => handlePersonalDetailsChange("address", e)}
        value={personalDetails.address}
      />
    </form>
  );
}

export default PersonalDetails;
