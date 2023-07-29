import {
  BookmarkSquareIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import logoLight from "/logo-light.svg";

const TopNavigation = () => {
  return (
    <div className="flex items-center justify-center xl:justify-between py-6 max-w-[1280px] lg:mx-auto">
      {/* {FIXME: CONVERT ALL A TAGS TO REACT ROUTER LINK & MAY NEED TO BE OWN COMPONENT FOR DARK AND LIGHT THEME VERSIONS OF LOGO} */}
      <a href="">
        <img src={logoLight} alt="cook.io home" />
      </a>
      <nav className="hidden xl:block">
        <a href="">Home</a>
        <a href="">Recipes</a>
      </nav>
      <div className="hidden xl:flex xl:items-center">
        <MoonIcon className="w-6 h-6" />
        <SunIcon className="hidden w-6 h-6" />
        <button
          type="button"
          className="hidden xl:inline-flex items-center ml-4 gap-x-2 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <BookmarkSquareIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Saved Recipes
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;
