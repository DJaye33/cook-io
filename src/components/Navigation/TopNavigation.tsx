import { Link, NavLink } from "react-router-dom";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import logoLight from "/logo-light.svg";

const TopNavigation = () => {
  return (
    <div className="flex items-center justify-center xl:justify-between py-6 lg:px-9 max-w-[1280px] lg:mx-auto">
      <img src={logoLight} alt="cook.io home" />
      <nav className="hidden xl:flex items-center justify-between w-40">
        <NavLink
          to="/"
          className="aria-[current=page]:text-orange-600 aria-[current=page]:font-bold"
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className="aria-[current=page]:text-orange-600 aria-[current=page]:font-bold"
        >
          Recipes
        </NavLink>
      </nav>
      <Link
        to="/saved-recipes"
        type="button"
        className="hidden xl:inline-flex items-center ml-4 gap-x-2 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      >
        <BookmarkSquareIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Saved Recipes
      </Link>
    </div>
  );
};

export default TopNavigation;
