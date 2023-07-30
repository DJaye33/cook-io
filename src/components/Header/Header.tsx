import HeaderInputGroup from "../HeaderInputGroup.tsx/HeaderInputGroup";

const Header = () => {
  return (
    <header className="p-5 bg-[url('../src/assets/hero-banner-small.jpg')] bg-cover bg-no-repeat bg-center h-[480px] md:bg-[url('../src/assets/hero-banner-medium.jpg')] xl:bg-[url('../src/assets/hero-banner-large.jpg')]">
      <HeaderInputGroup />
    </header>
  );
};

export default Header;
