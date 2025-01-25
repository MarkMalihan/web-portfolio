import { APP_CONSTANTS } from "@/config/config";

const Footer = () => {
  return (
    <footer className="p-4 z-10">
      <div className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="font-bold text-blue-400 dark:text-blue-300">
            {APP_CONSTANTS.APP_TITLE}
          </h1>

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
