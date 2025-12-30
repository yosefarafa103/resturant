const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="sm:w-[85%] mx-auto"> {children} </div>;
};

export default Container;
