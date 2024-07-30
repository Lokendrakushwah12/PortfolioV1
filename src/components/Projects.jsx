import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-start xm:px-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-3 pt-6">
            <Card
              title="Project 1"
              description="This is a project"
              url="https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card
              title="Project 2"
              description="This is a project"
              url="https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card
              title="Project 3"
              description="This is a project"
              url="https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
