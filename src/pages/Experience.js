import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1995 - 1998"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University College Chester UK
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree in computer science & biology 
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1998 - 2001"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Analyst / Programmer - Morgan Computing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          North Wales- UK
          </h4>
          <p>Maintain and create new software for a bespoke database system in C</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2001 - 2006"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Joiner and Electrician
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            North Wales - UK 
          </h4>
          <p>
            Self employed doing domestic work in various locations
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2007"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Brake Technician
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            North Wales - UK 
          </h4>
          <p>
            Brake engineering - Mostly scanning brake parts and making 3d exploded photos  
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2007 - 2016"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Founder and Technician ACS-WEB
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            North Wales - UK 
          </h4>
          <p>
            Fullfilling all requirements to run a small business in a addition to computer repairs, programming and business installations
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            English Teacher
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Indonesia and Vietnam 
          </h4>
          <p>
            Teaching English and Science to foreign students from ages 4 to adult
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Thai Restaurant Manager and Technician
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            North Wales - UK 
          </h4>
          <p>
            Running a Restaurant and takaway business. My duties also involved computer and industrial machinery repair and installation
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - current"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Living in Thailand but customer base global 
          </h4>
          <p>
            Creating web apps for existing clients and new clients on freelance websites
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
