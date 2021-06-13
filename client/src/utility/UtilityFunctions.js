export const reduceSingleLevelObject = (values) => {
  if (Object.values(values)?.length) {
    return Object.values(values).reduce((acc, next) => acc + next);
  } else {
    return null;
  }
};
