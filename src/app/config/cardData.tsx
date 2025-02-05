import { Button } from "@/component/ui/Button";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SKILLS } from "./config";

export const cardData = [
  {
    content: (
      <div className="flex flex-col sm:flex-row items-center p-4 sm:p-6">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocIHtjiDW2S71V5fOPQ7PqVECxXaYvtMKmCya7Kj-pHJ-wQ7kVqD=s288-c-no"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full mb-4 sm:mb-0 sm:mr-6"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            MARK ANGELO MALIHAN
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Front-End Developer | UI/UX Designer
          </p>
          <p className="mt-2 text-sm md:text-base dark:text-gray-300">
            Crafting intuitive user interfaces and seamless web experiences with
            a focus on performance and accessibility.
          </p>
        </div>
      </div>
    ),
    filter: "Argel",
    className: "col-span-1 md:col-span-4 dark:text-white",
  },
  {
    content: (
      <>
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Skills</h2>
        <div className="flex gap-5 flex-wrap text-gray-800 dark:text-gray-300">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-lg bg-gray-100 dark:bg-black border rounded-full px-3 py-1"
            >
              <skill.icon />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </>
    ),
    filter: "Skills",
    className: "col-span-1 md:col-span-4 dark:text-white",
  },
  {
    content: (
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-semibold">
          Front-End Developer | UI/UX Designer at TSI
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Oct 2023 - Present
        </p>
        <p className="text-sm mt-1 leading-7 dark:text-gray-300">
          • Designed and developed the UI and frontend architecture for the help
          desk and booking portal of a collaborative project management
          application, enhancing user experience and aligning with company
          objectives. <br /> • Designed UI and developed the frontend for a
          specialized web application, including a farm-to-table system, POS,
          and Hub (inventory management), tailored to meet the unique needs of a
          specific government department, improving their operational
          efficiency. <br /> • Designed UI and developed the frontend of a
          Booking/Appointment and Queue Management system for a government
          healthcare facility, streamlining the patient appointment process and
          reducing wait times.
          <br /> • Collaborated with backend teams to ensure seamless
          integration of frontend designs with system functionalities,
          delivering user friendly and responsive web applications
        </p>
      </div>
    ),
    filter: "Experiences",
    className: "col-span-1 md:col-span-4 text-5xl dark:text-white",
  },
  {
    content: (
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-semibold">
          Intern Supervisor at UNLAD Foundation
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">2024</p>
        <p className="text-sm mt-1 leading-7 dark:text-gray-300">
          •Taught interns in foundational frontend development concepts,
          including routing, Tailwind CSS, responsive design, and efficient
          folder structure. Provided guidance on assigned tasks by offering
          conceptual direction rather than explicit solutions to foster
          independent problem-solving skills. Encouraged and motivated interns
          through constructive feedback and recognition of their achievements,
          creating a positive and supportive learning environment.
        </p>
      </div>
    ),
    filter: "Experiences",
    className:
      "col-span-1 md:col-span-4 lg:col-span-2 text-5xl dark:text-white",
  },
  {
    content: (
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-semibold ">
          Front-End Developer
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">2024</p>
        <p className="text-sm mt-1 leading-7 dark:text-gray-300">
          • Started the development of the frontend (mockup) of a security-first
          messaging web ap
        </p>
      </div>
    ),
    filter: "Experiences",
    className:
      "col-span-1 md:col-span-4 lg:col-span-2 text-5xl dark:text-white",
  },
  {
    content: (
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-semibold">
          Front-End Developer Intern at PUP Lopez Branch
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          April 2023 - June 2023
        </p>
        <p className="text-sm mt-1 leading-7 dark:text-gray-300">
          • Developed a property management system using Python to track school
          properties, including computers and other equipment, by monitoring
          their locations and users. <br /> • Led the development of the
          frontend for a property management system using Python, focused on
          tracking school properties like computers, including their locations
          and users. <br /> • Self-taught Basic UI Design to create a
          user-friendly interface that streamlined property tracking for school
          staff, ensuring ease of use and efficiency. <br /> • Assisted in
          creating a simple website using Google Sites for program accreditation
          purposes, ensuring the site met required standards and facilitated
          smooth information access
        </p>
      </div>
    ),
    filter: "Experiences",
    className: "col-span-1 md:col-span-4 text-5xl dark:text-white",
  },

  {
    content: (
      <div className="flex flex-col justify-between gap-5">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">Trash UI</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 dark:text-gray-400">
            Built with React, Tailwind CSS, Vite
          </p>{" "}
        </div>
        <Link to="https://trash-ui-dev.web.app/" target="_blank">
          <Button>View Project</Button>
        </Link>
      </div>
    ),
    filter: "Projects",
    className: "dark:text-white",
  },
  {
    content: (
      <div className="flex flex-col justify-between gap-5">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            React Typescript + Tailwind CSS v4 Template
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 dark:text-gray-400">
            Built with React, Tailwind CSS, Vite
          </p>
        </div>
        <Link
          to="https://github.com/MarkMalihan/react-ts-tw-template"
          target="_blank"
        >
          <Button>View Project</Button>
        </Link>
      </div>
    ),
    filter: "Projects",
    className: "dark:text-white",
  },
  {
    content: (
      <div className="flex flex-col justify-between gap-5">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Food Court App Concept
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 dark:text-gray-400">
            Figma, UI/UX
          </p>
        </div>
        <Link
          to="https://www.figma.com/design/MJE9g95jcz2OwlHBlx28CH/food-court-app-concept?node-id=0-1&p=f&t=FIbGhjbFWgiuqHZ2-0"
          target="_blank"
        >
          <Button>View Project</Button>
        </Link>
      </div>
    ),
    filter: "Projects",
    className: "dark:text-white",
  },
  {
    content: (
      <div className="flex flex-col justify-between gap-5">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Bento Layout
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 dark:text-gray-400">
            Figma, UI/UX
          </p>
        </div>
        <Link
          to="https://www.figma.com/design/j8kTqrvg5zpCPy9CeP4ERo/Bento-Portfolio?node-id=0-1&p=f&t=1XjIdoIFeAcfY0X1-0"
          target="_blank"
        >
          <Button>View Project</Button>
        </Link>
      </div>
    ),
    filter: "Projects",
    className: "dark:text-white",
  },
  {
    content: (
      <div className="flex flex-col justify-between gap-5">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Property Transfer
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 dark:text-gray-400">
            Figma, UI/UX
          </p>
        </div>
        <Link
          to="https://www.figma.com/design/zp9lGuf5wNZPVT0gkdk9D7/ptr?node-id=0-1&p=f&t=UZbWvAyXDZpdU0tx-0"
          target="_blank"
        >
          <Button>View Project</Button>
        </Link>
      </div>
    ),
    filter: "Projects",
    className: "dark:text-white",
  },
  {
    content: (
      <section className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-lg md:text-xl font-semibold mb-4 md:mb-0">
          Contact
        </h1>
        <div className="flex items-center gap-3">
          <Link to="https://github.com/MarkMalihan" target="_blank">
            <FaGithub className="text-2xl" />
          </Link>
          <Link to="mailto:markangelolizanomalihan@gmail.com">
            <MdEmail className="text-2xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mark-angelo-malihan/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </section>
    ),
    filter: "Contact",
    className: "col-span-1 md:col-span-3 lg:col-span-4 dark:text-white",
  },
];
