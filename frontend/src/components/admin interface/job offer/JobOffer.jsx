import React from "react";
import AllJob from "../../job/all job/AllJob";
import JobOfferCSS from "./JobOffer.module.css";

const JobOffer = () => {
  return <div className={JobOfferCSS.joboffer}><AllJob/></div>;
};

export default JobOffer;
