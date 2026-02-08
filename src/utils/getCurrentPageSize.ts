export const getCurrentPageSize = (viewport: string) => {
  switch (viewport) {
    case "Desktop":
      return "w-full";
    case "Tablet":
      return "w-[768px]";
    case "Mobile":
      return "w-[375px]";
    default:
      return "w-full";
  }
};
