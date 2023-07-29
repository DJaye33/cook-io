import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import logoLight from "/logo-light.svg";

const TopNavigation = () => {
  return (
    <div className="flex items-center justify-center xl:justify-between py-6 border-b-2">
      {/* {FIXME: CONVERT TO REACT ROUTER LINK & MAY NEED TO BE OWN COMPONENT FOR DARK AND LIGHT THEME VERSIONS OF LOGO} */}
      <a href="">
        <img src={logoLight} alt="cook.io home" />
      </a>
      <nav className="hidden xl:block">
        <a href="">Home</a>
        <a href="">Recipes</a>
      </nav>
      <button
        type="button"
        className="hidden xl:inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <BookmarkSquareIcon
          className="hidden xl:block -ml-0.5 h-5 w-5"
          aria-hidden="true"
        />
        Button text
      </button>
    </div>
  );
};

export default TopNavigation;
