import { Button } from "@/component/ui/Button";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { CiDark, CiLight } from "react-icons/ci";

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <Button
        variant="light"
        className="rounded-full shadow-md dark:bg-black hover:bg-gray-500 hover:text-white"
        onClick={toggleDarkMode}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <CiLight className="text-2xl text-white" />
        ) : (
          <CiDark className="text-2xl " />
        )}
      </Button>
    </>
  );
};

export default DarkModeButton;
