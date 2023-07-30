import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const HeaderInputGroup = () => {
  return (
    <div className="text-white text-center w-full lg:w-[800px] lg:mx-auto">
      <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl">
        Your desired dish?
      </h1>
      <div className="my-4">
        <label htmlFor="search"></label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full bg-orange-50 rounded-none rounded-l-md border-0 pl-5 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="Search recipes..."
            />
          </div>
          <button
            type="button"
            className="bg-orange-600 flex justify-center items-center rounded-r-md px-3 py-2 hover:bg-orange-500 h-10 w-16 md:h-12 md:w-20 lg:h-16 lg:w-28"
          >
            <MagnifyingGlassIcon
              className="-ml-0.5 h-6 w-6 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <p className="text-xs">
        Search any recipe e.g: burger, pizza, sandwich, toast.
      </p>
    </div>
  );
};

export default HeaderInputGroup;
