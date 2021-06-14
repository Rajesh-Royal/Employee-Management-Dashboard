const colorsArray = ["purple", "blue", "green"];
const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
export const projectTheme = {
  background: `bg-${color}-500` || "bg-purple-500",
  borderColor: `border-${color}-500` || "border-purple-500",
  textColor: `text-${color}-500` || "text-purple-500",
  closeXButtonColor: `text-${color}-500` || "text-purple-400",
};
