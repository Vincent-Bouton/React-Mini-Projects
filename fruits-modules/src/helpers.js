const choice = items => {
  const random = Math.floor(Math.random() * items.length);
  const item = items[random];
  return item;
};
const remove = (items, item) => {
  let index;
  while ((index = items.indexOf(item)) > -1) {
    items.splice(index, 1);
  }
};

export { choice, remove };
