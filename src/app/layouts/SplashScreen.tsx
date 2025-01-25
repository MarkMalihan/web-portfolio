import { APP_CONSTANTS } from "../config/config";

const SplashScreen = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
        <div className="flex flex-col justify-center items-center gap-10 p-10">
          <div className="relative">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-0"
              style={{
                width: "400px",
                height: "400px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <path
                fill="#1447E6"
                d="M42.7,-69.4C49.4,-62.1,44.9,-40.2,51.5,-24C58.2,-7.8,76,2.9,81.4,16.4C86.7,30,79.7,46.4,64.6,46.3C49.6,46.2,26.7,29.4,10.8,31.9C-5.1,34.3,-13.9,55.9,-20.3,58.7C-26.7,61.6,-30.6,45.8,-42.5,35.1C-54.3,24.4,-74.1,19,-75.3,10.8C-76.5,2.7,-59,-8.1,-49.1,-19.3C-39.2,-30.5,-36.8,-42.1,-29.9,-49.3C-23,-56.5,-11.5,-59.4,3.2,-64.4C18,-69.4,35.9,-76.7,42.7,-69.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIHtjiDW2S71V5fOPQ7PqVECxXaYvtMKmCya7Kj-pHJ-wQ7kVqD=s288-c-no"
              alt={APP_CONSTANTS.APP_TITLE}
              className="size-48 p-5 relative z-10 rounded-full"
            />
          </div>
          <h1 className="font-bold text-primary dark:text-white text-2xl">
            {APP_CONSTANTS.APP_TITLE}
          </h1>
          <p className="text-black dark:text-white font-medium">
            <span
              className="inline-block ml-1"
              style={{ animation: "ellipsis 2s infinite steps(4, end)" }}
            >
              {" "}
            </span>
          </p>
        </div>
        <style>
          {`
  @keyframes ellipsis {
    0% {
      content: " ";
    }
    25% {
      content: "▪";
    }
    50% {
      content: "▪ ▪";
    }
    75% {
      content: "▪ ▪ ▪";
    }
    100% {
      content: " ";
    }
  }

  span::after {
    content: " ";
    animation: ellipsis 2s infinite steps(4, end);
  }
`}
        </style>
      </div>
    </>
  );
};

export default SplashScreen;
