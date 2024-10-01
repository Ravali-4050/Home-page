import React from "react";
import { FaGraduationCap, FaRegLightbulb, FaIndustry } from "react-icons/fa";
import {FaPerson} from 'react-icons/fa6'
import Card from "./Card.jsx";

const CardGrid = () => {
  return (
    <div className="px-16 py-16 flex justify-between">
      <Card
        icon={<FaGraduationCap color="white" size={30} />}
        title="12500+ Hrs of Learning"
        description="We have already crossed 12500+ Hrs of learning on this platform"
      />
      <Card
        icon={<FaRegLightbulb color="white" size={30} />}
        title="500+ Projects"
        description="BAOIAM has excelled in 500+ real-time Corporate and Client projects."
      />
      <Card
        icon={<FaPerson color="white" size={30} />}
        title="75000+ Students"
        description="75000+ students learning from all over the world anytime."
      />
      <Card
        icon={<FaIndustry color="white" size={30} />}
        title="350+ Industrial Experts"
        description="We have courses mentored by more than 350+ industrial experts."
      />
    </div>
  );
};

export default CardGrid;
