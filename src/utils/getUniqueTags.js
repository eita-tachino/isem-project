export const getUniqueTags = (posts) => {
  let tags = [];

  // tags = [...tags, ...posts]
  //   .map((tag) => {
  //     return tag;
  //   })
  //   .filter((value, index, self) => self.indexOf(value) === index);

  tags = [...tags, ...posts.map((post) => post.properties.Tags.select.name)]
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);
  return tags;
};
