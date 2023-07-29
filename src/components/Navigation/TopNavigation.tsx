import { useMediaQuery } from "react-responsive";

import logoLight from "/logo-light.svg";

const TopNavigation = () => {
  const isTabletOrMobile = useMediaQuery({ minWidth: 768 });
  return (
    <div className="flex items-center justify-center py-6 border-b-2">
      {/* {FIXME: Convert to react router link} */}
      {!isTabletOrMobile && (
        <a href="">
          <img src={logoLight} alt="cook.io home" />
        </a>
      )}
      {isTabletOrMobile && <p>show at screen size greater than 768</p>}
    </div>
  );
};

export default TopNavigation;
