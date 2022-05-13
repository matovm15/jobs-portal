const useSideLinks = (pathname) => {
  return [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: "la la-home",
      path: "/user/dashboard",
      active: pathname === "/user/dashboard" ? "active" : "",
    },
    {
      id: "profile",
      name: "My Profile",
      icon: "la la-user-tie",
      path: "/user/profile",
      active: pathname === "/user/dashboard/profile" ? "active" : "",
    },
    {
      id: "resume",
      name: "My Resume",
      icon: "la la-file-invoice",
      path: "/user/resume",
      active: pathname === "/user/resume" ? "active" : "",
    },
    {
      id: "applied-job",
      name: "Applied Jobs",
      icon: "la la-briefcase",
      path: "/user/applied-job",
      active: pathname === "/user/applied-job" ? "active" : "",
    },
    {
      id: "cv-manager",
      name: "CV Manager",
      icon: "la la-file-invoice",
      path: "/user/cv-manager",
      active: pathname === "/user/cv-manager" ? "active" : "",
    },
    {
      id: "job-alerts",
      name: "Job Alerts",
      icon: "la la-bell",
      path: "/user/job-alerts",
      active: pathname === "/user/job-alerts" ? "active" : "",
    },
    {
      id: "shortlisted-resume",
      name: "Shortlisted Jobs",
      icon: "la la-bookmark-o",
      path: "/user/shortlisted-resume",
      active: pathname === "/user/shortlisted-resume" ? "active" : "",
    },
    {
      id: "change-password",
      name: "Change Password",
      icon: "la la-lock",
      path: "/user/change-password",
      active: pathname === "/user/change-password" ? "active" : "",
    },
    {
      id: "logout",
      name: "Logout",
      icon: "la la-sign-out",
      path: "/user/dashboard/logout",
      active: pathname === "/user/logout" ? "active" : "",
    },
  ];
};

export default useSideLinks;