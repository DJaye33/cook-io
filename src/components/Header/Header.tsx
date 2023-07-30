import HeaderInputGroup from "../HeaderInputGroup.tsx/HeaderInputGroup";

const Header = () => {
  return (
    <header className="flex justify-center items-center p-5 md:p-14 bg-[url('../src/assets/hero-banner-small.jpg')] bg-cover bg-no-repeat bg-center h-[480px] md:bg-[url('../src/assets/hero-banner-medium.jpg')] xl:bg-[url('../src/assets/hero-banner-large.jpg')] rounded-lg">
      <HeaderInputGroup />
    </header>
  );
};

export default Header;
