import { useState } from "react";
import { Card } from "@/component/ui/Card";
import BentoLayout from "@/layouts/BentoLayout";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { Button } from "@/component/ui/Button";
import { CiDark } from "react-icons/ci";

const Homepage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const navItems = [
    "All",
    "Argel",
    "Skills",
    "Experiences",
    "Projects",
    "Contact",
  ];

  const cardData = [
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
            <p className="text-gray-500">
              Front-End Developer | UI/UX Designer
            </p>
            <p className="mt-2 text-sm md:text-base">
              Crafting intuitive user interfaces and seamless web experiences
              with a focus on performance and accessibility.
            </p>
          </div>
        </div>
      ),
      filter: "Argel",
      className: "col-span-1 md:col-span-3 lg:row-span-2",
    },
    {
      content: (
        <div className="">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Skills</h2>
          <ul className="flex gap-5 flex-wrap">
            <li>Vite</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>Front-End</li>
            <li>Git</li>
            <li>Figma</li>
            <li>UI/UX</li>
          </ul>
        </div>
      ),
      filter: "Skills",
      className: "col-span-1 lg:row-span-2",
    },
    {
      content: (
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Front-End Developer | UI/UX Designer at TSI
          </h3>
          <p className="text-sm text-gray-500">Oct 2023 - Present</p>
          <p className="text-sm mt-1 leading-7">
            • Designed and developed the UI and frontend architecture for the
            help desk and booking portal of a collaborative project management
            application, enhancing user experience and aligning with company
            objectives. <br /> • Designed UI and developed the frontend for a
            specialized web application, including a farm-to-table system, POS,
            and Hub (inventory management), tailored to meet the unique needs of
            a specific government department, improving their operational
            efficiency. <br /> • Designed UI and developed the frontend of a
            Booking/Appointment and Queue Management system for a government
            healthcare facility, streamlining the patient appointment process
            and reducing wait times.
            <br /> • Collaborated with backend teams to ensure seamless
            integration of frontend designs with system functionalities,
            delivering user friendly and responsive web applications
          </p>
        </div>
      ),
      filter: "Experiences",
      className: "col-span-1 md:col-span-4 text-5xl",
    },
    {
      content: (
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Intern Supervisor at UNLAD Foundation
          </h3>
          <p className="text-sm text-gray-500">2024</p>
          <p className="text-sm mt-1 leading-7">
            • Supervise and teach interns basic lessons about front-end,
            ensuring project goals are met using Agile Methodology. Also
            facilitate collaboration, task management, and iterative development
            for successful project outcomes.
          </p>
        </div>
      ),
      filter: "Experiences",
      className: "col-span-1 md:col-span-2 text-5xl h-fit",
    },
    {
      content: (
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Front-End Developer
          </h3>
          <p className="text-sm text-gray-500">2024</p>
          <p className="text-sm mt-1 leading-7">
            • Started the development of the frontend (mockup) of a
            security-first messaging web ap
          </p>
        </div>
      ),
      filter: "Experiences",
      className: "col-span-1 md:col-span-2 text-5xl h-fit",
    },
    {
      content: (
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Front-End Developer Intern at PUP Lopez Branch
          </h3>
          <p className="text-sm text-gray-500">April 2023 - June 2023</p>
          <p className="text-sm mt-1 leading-7">
            • Developed a property management system using Python to track
            school properties, including computers and other equipment, by
            monitoring their locations and users. <br /> • Led the development
            of the frontend for a property management system using Python,
            focused on tracking school properties like computers, including
            their locations and users. <br /> • Self-taught Basic UI Design to
            create a user-friendly interface that streamlined property tracking
            for school staff, ensuring ease of use and efficiency. <br /> •
            Assisted in creating a simple website using Google Sites for program
            accreditation purposes, ensuring the site met required standards and
            facilitated smooth information access
          </p>
        </div>
      ),
      filter: "Experiences",
      className: "col-span-1 md:col-span-4 text-5xl",
    },

    {
      content: (
        <div className="flex flex-col justify-between gap-5">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Trash UI
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Built with React, Tailwind CSS, Vite
            </p>{" "}
          </div>
          <Link to="https://trash-ui-dev.web.app/" target="_blank">
            <Button>View Project</Button>
          </Link>
        </div>
      ),
      filter: "Projects",
    },
    {
      content: (
        <div className="flex flex-col justify-between gap-5">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              React Typescript + Tailwind CSS v4 Template
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
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
    },
    {
      content: (
        <div className="flex flex-col justify-between gap-5">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Food Court App Concept
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
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
      className: "col-span-1 md:col-span-3 lg:col-span-4",
    },
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-3 p-4">
        {navItems.map((item) => (
          <Button
            key={item}
            onClick={() => setActiveFilter(item)}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md transition-all duration-300 cursor-pointer ${
              activeFilter === item
                ? "bg-blue-500 text-white scale-105 shadow-lg"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {item}
          </Button>
        ))}
        <Button className="bg-white text-gray-800 rounded-full shadow-md hover:text-white">
          <CiDark />
        </Button>
      </nav>

      {/* Layout */}
      <BentoLayout>
        {cardData.map((card, index) => (
          <Card
            key={index}
            className={`${
              activeFilter === card.filter
                ? "border-2 border-blue-500 shadow-lg scale-y-105"
                : activeFilter === "All"
                  ? ""
                  : "opacity-50 scale-90"
            } ${card.className}`}
          >
            {card.content}
          </Card>
        ))}
      </BentoLayout>
    </div>
  );
};

export default Homepage;
