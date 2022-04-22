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
      path: "/user/dashboard/profile",
      active: pathname === "/user/dashboard/profile" ? "active" : "",
    },
    {
      id: "resume",
      name: "My Resume",
      icon: "la la-file-invoice",
      path: "/user/dashboard/resume",
      active: pathname === "/user/dashboard/resume" ? "active" : "",
    },
    {
      id: "applied-job",
      name: "Applied Jobs",
      icon: "la la-briefcase",
      path: "/user/dashboard/applied-job",
      active: pathname === "/user/dashboard/applied-job" ? "active" : "",
    },
    {
      id: "cv-manager",
      name: "CV Manager",
      icon: "la la-file-invoice",
      path: "/user/dashboard/cv-manager",
      active: pathname === "/user/dashboard/cv-manager" ? "active" : "",
    },
    {
      id: "job-alerts",
      name: "Job Alerts",
      icon: "la la-bell",
      path: "/user/dashboard/job-alerts",
      active: pathname === "/user/dashboard/job-alerts" ? "active" : "",
    },
    {
      id: "shortlisted-resume",
      name: "Shortlisted Jobs",
      icon: "la la-bookmark-o",
      path: "/user/dashboard/shortlisted-resume",
      active: pathname === "/user/dashboard/shortlisted-resume" ? "active" : "",
    },
    {
      id: "change-password",
      name: "Change Password",
      icon: "la la-lock",
      path: "/user/dashboard/change-password",
      active: pathname === "/user/dashboard/change-password" ? "active" : "",
    },
    {
      id: "logout",
      name: "Logout",
      icon: "la la-sign-out",
      path: "/user/dashboard/logout",
      active: pathname === "/user/dashboard/logout" ? "active" : "",
    },
  ];
};

export default useSideLinks;