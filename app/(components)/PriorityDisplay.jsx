import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faFire} className="text-red-600"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFire} className="text-red-600"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFire} className="text-red-600"></FontAwesomeIcon>
    </div>
  );
};

export default PriorityDisplay;
