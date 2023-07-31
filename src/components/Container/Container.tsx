type MainContainerProps = {
  children?: React.ReactNode;
  isInnerContainer?: boolean;
};

const MainContainer = ({ children, isInnerContainer }: MainContainerProps) => {
  if (isInnerContainer) {
    return (
      <section className="p-4 xl:w-[1128px] xl:mx-auto">{children}</section>
    );
  }
  return <main className="p-4 xl:w-[1280px] xl:mx-auto">{children}</main>;
};

export default MainContainer;
