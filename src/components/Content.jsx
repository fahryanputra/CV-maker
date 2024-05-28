import "../styles/Content.css";
import "../styles/Button.css";
import Resume from "./resume/Resume";
import InputForm from "./forms/InputForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Content() {
  const [data, setData] = useState({
    personalDetails: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      profile: "",
    },
    experiences: [
      {
        id: uuidv4(),
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ],
    educations: [
      {
        id: uuidv4(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
  });

  return (
    <div className="content">
      <div className="form">
        <InputForm data={data} setData={setData} />
      </div>
      <div className="resume">
        <Resume data={data} />
      </div>
    </div>
  );
}

export default Content;
