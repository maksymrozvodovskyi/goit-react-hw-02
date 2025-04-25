import { useState } from "react";
import сss from "./App.module.css";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeeedback = () => {
    setFeedback();
  };

  return (
    <div>
      <Description />
      <Options onUpdate={handleFeeedback} />
      <Feedback value={feedback} />
    </div>
  );
}
