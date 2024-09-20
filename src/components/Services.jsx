import React from "react";
import Card from "./Card";

function Services() {
  return (
    <div className="pl-[20px]">
        <h1 className="font-bold text-2xl pb-[20px] font-serif text-[#3C5B6F]">Serives being Provided</h1>
        <div className="flex justify-around mt-[10px]">
          <Card service="Autonomous Robots" description="Autonomous robots represent the cutting edge of modern technology, designed to operate independently without human intervention." />
          <Card service="IoT Solutions" description="By connecting everyday objects to the internet and enabling them to communicate and share data, IoT solutions offer unprecedented levels of insight, efficiency, and convenience." />
          <Card service="Mentorship Program" description="In this mentorship program, mentors typically provide guidance, advice, and feedback to mentees based on their own experiences and expertise." />
        </div>
    </div>
  );
}

export default Services;
