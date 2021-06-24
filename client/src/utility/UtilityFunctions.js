export const reduceSingleLevelObject = (values) => {
  if (Object.values(values)?.length) {
    return Object.values(values).reduce((acc, next, index) => {
      if (index === 1) {
        return acc.value + next.value;
      } else {
        return acc + next.value;
      }
    });
  } else {
    return null;
  }

  // with foreach
  // if (Object.values(values)?.length) {
  //   let sum = Object.values(values).map((item) => {
  //     console.log(item.meta_key, "====", item.value);
  //     return item.value;
  //   });
  //   return sum.reduce((acc, next) => acc + next);
  // } else {
  //   return null;
  // }
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// capitalize first letter of words
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1) || "";

// capatilize first letter and split it
export const makeWords = (s) =>
  s && (s.charAt(0)?.toUpperCase() + s.slice(1))?.split("_")?.join(" ");

// eslint-disable-next-line no-extend-native
// String.prototype.capitalize = function () {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };
