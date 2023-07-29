type AppContainerProps = {
  children?: React.ReactNode;
};

const appContainer = ({ children }: AppContainerProps) => {
  return <div className="xl:w-[1280px] xl:mx-auto">{children}</div>;
};

export default appContainer;
