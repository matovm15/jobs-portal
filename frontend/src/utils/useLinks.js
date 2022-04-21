const useLinks = (location) => {
  return [
    {
      id: 1,
      name: "Home",
      path: "/",
      current: location.pathname === "/" ? "current" : "",
    },
    {
      id: 2,
      name: "Jobs",
      path: "/jobs",
      current: location.pathname === "/jobs" ? "current" : "",
    },
    {
      id: 3,
      name: "Employers",
      path: "/employers",
      current: location.pathname === "/employers" ? "current" : "",
    },
    {
      id: 4,
      name: "About",
      path: "/about",
      current: location.pathname === "/about" ? "current" : "",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
      current: location.pathname === "/contact" ? "current" : "",
    },
  ];
};


export default useLinks