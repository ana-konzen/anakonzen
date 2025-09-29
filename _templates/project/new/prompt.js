module.exports = [
  {
    type: "input",
    name: "name",
    message: "Project name?",
  },
  {
    type: "input",
    name: "slug",
    message: "Project slug?",
  },
  {
    type: "input",
    name: "date",
    message: "Date?",
    initial: () =>
      new Date().toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
  },
  {
    type: "input",
    name: "type",
    message: "Type?",
  },
  {
    type: "input",
    name: "medium",
    message: "Medium/tools?",
  },
  {
    type: "input",
    name: "description",
    message: "Description?",
  },
  {
    type: "input",
    name: "link",
    message: "Prototype link?",
  },
];
