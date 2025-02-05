import { APP_CONSTANTS } from "@/config/config";
import { useDarkMode } from "@/contexts/DarkModeContext";
import AM_LOGO from "../../assets/am-logo.png";
import AM_LOGO_2 from "../../assets/am-logo2.png";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <footer className="p-4 z-10">
      <div className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            {isDarkMode ? (
              <img
                src={AM_LOGO_2}
                alt={APP_CONSTANTS.APP_TITLE}
                className="size-10"
              />
            ) : (
              <img
                src={AM_LOGO}
                alt={APP_CONSTANTS.APP_TITLE}
                className="size-10"
              />
            )}
            <h1 className="font-bold text-blue-400 dark:text-blue-300">
              {APP_CONSTANTS.APP_TITLE}
            </h1>
          </div>
          <div className="text-center text-sm">
            <p className="text-gray-400">
              {APP_CONSTANTS.BUILT_WITH}
              {APP_CONSTANTS.TRASH_UI}
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
