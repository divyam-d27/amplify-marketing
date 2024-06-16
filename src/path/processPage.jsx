import React from "react";
import Timeline from "../components/Timeline";
import { useParams } from "react-router-dom";
import { servicesContent } from "../content/servicesContent";

const ServiceProcess = () => {
  const params = useParams();
  const service = params.service;
  return (
    <Timeline
      array={servicesContent[service].process}
      title={servicesContent[service].title}
    />
  );
};
export default ServiceProcess;
