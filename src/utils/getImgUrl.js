const getImgUrl = (link) => {
  return new URL(`/src/assets/images/${link}`, import.meta.url).href;
};

export { getImgUrl };
