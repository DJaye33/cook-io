type MainContainerProps = {
  children?: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <main className="p-4 xl:w-[1280px] xl:mx-auto">{children}</main>;
};

export default MainContainer;
