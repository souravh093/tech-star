import React from "react";

const Container = ({ children, className }) => {
  const containerClasses = `max-w-[1440px] mx-auto sm:max-2-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] ${className}`;
  return <div className={containerClasses}>{children}</div>;
};

export default Container;
