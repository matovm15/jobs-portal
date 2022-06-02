const useCSideLinks = (pathname) => {
  return [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: "la la-home",
      path: "/company/dashboard",
      active: pathname === "/company/dashboard" ? "active" : "",
    },
    {
      id: "profile",
      name: "Company Profile",
      icon: "la la-company-tie",
      path: "/company/profile",
      active: pathname === "/company/profile" ? "active" : "",
    },
    {
      id: "add-job",
      name: "Post a Job",
      icon: "la la-paper-plane",
      path: "/company/add-job",
      active: pathname === "/company/add-job" ? "active" : "",
    },
    {
      id: "applicants",
      name: "All Applicants",
      icon: "la la-file-invoice",
      path: "/company/applicants",
      active: pathname === "/company/applicants" ? "active" : "",
    },
    {
      id: "manage-jobs",
      name: "Manage Jobs",
      icon: "la la-briefcase",
      path: "/company/manage-jobs",
      active: pathname === "/company/manage-jobs" ? "active" : "",
    },
    {
      id: "shortlisted-resume",
      name: "Shortlisted Jobs",
      icon: "la la-bookmark-o",
      path: "/company/shortlisted-resume",
      active: pathname === "/company/shortlisted-resume" ? "active" : "",
    },
    {
      id: "change-password",
      name: "Change Password",
      icon: "la la-lock",
      path: "/company/change-password",
      active: pathname === "/company/change-password" ? "active" : "",
    },
    {
      id: "logout",
      name: "Logout",
      icon: "la la-sign-out",
      path: "/company/dashboard/logout",
      active: pathname === "/company/logout" ? "active" : "",
    },
    {
      id: "delete-profile",
      name: "Delete Profile",
      icon: "la la-trash",
      path: "/company/delete-profile",
      active: pathname === "/company/delete-profile" ? "active" : "",
    },
  ];
};

export default useCSideLinks
