import { useState } from "react";
import PersonalDetails from "./PersonalDetails";

function Content() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  return (
    <PersonalDetails
      personalDetails={personalDetails}
      setPersonalDetails={setPersonalDetails}
    />
  );
}

export default Content;
