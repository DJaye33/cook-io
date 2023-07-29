type AppContainerProps = {
  children?: React.ReactNode;
};

const appContainer = ({ children }: AppContainerProps) => {
  return <div>{children}</div>;
};

export default appContainer;
