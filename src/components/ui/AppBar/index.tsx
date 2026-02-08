import { FC, useState } from "react";
import Button from "../Button";
import DevicesBg from "../Icons/devicesBg";
import Laptop from "../Icons/Laptop";
import Phone from "../Icons/Phone";
import Setting from "../Icons/Setting";
import Tablet from "../Icons/Tablet";
import BurgerMenu from "../Icons/BurgerMenu";

interface IAppBarProps {
  onClick?: () => void;
}

const AppBar:FC<IAppBarProps> = ({onClick}) => {
  const [isActiveSetting, setIsActiveSetting] = useState(false);
  const [activeDevice, setActiveDevice] = useState<
    "phone" | "tablet" | "laptop" | null
  >(null);
  return (
    <div className="md:w-72 w-[95%] max-md:rounded-lg max-md:border border-neutral-600 h-16 md:h-[50px] flex z-20 md:pb-1 items-center max-md:flex-row-reverse justify-between max-md:px-5 md:justify-center md:absolute top-0 max-md:bg-state-200 mb-3">
      <DevicesBg className="absolute -z-10 w-80 h-full -top-1 max-md:hidden" />
      <Button
        onClick={() => setIsActiveSetting(!isActiveSetting)}
        className="rounded-none mr-5 md:px-4 md:pb-1 h-[80%] md:border-l border-neutral-400 flex items-center justify-center"
      >
        <Setting color={`${isActiveSetting ? "#03DC8E" : "#E7E7E7"}`} />
      </Button>
      <div className="md:w-2/3 max-md:h-[80%] rounded-lg max-md:bg-state-100 h-full md:pb-1 md:pr-2 flex justify-center md:justify-start items-center max-md:gap-7 max-md:px-4">
        <Button
          onClick={() => setActiveDevice("phone")}
          className="md:w-1/4 w-1/5 h-full"
        >
          <Phone
            color={`${activeDevice === "phone" ? "#03DC8E" : "#E7E7E7"}`}
            size={30}
          />
        </Button>
        <Button
          onClick={() => setActiveDevice("tablet")}
          className="md:w-1/4 w-1/5 h-full"
        >
          <Tablet
            color={`${activeDevice === "tablet" ? "#03DC8E" : "#E7E7E7"}`}
            size={30}
          />
        </Button>
        <Button
          onClick={() => setActiveDevice("laptop")}
          className="md:w-1/3 w-1/4 h-full"
        >
          <Laptop
            color={`${activeDevice === "laptop" ? "#03DC8E" : "#E7E7E7"}`}
            size={45}
          />
        </Button>
      </div>
      <Button onClick={onClick} className="md:hidden">
        <BurgerMenu color="#e7e7e7" size={35} />
      </Button>
    </div>
  );
};

export default AppBar;
