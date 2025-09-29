---
to: app/projects/<%= h.changeCase.paramCase(slug) %>/page.mdx
---

export const data = {
  title: "<%= name %>",
  date: "<%= date %>",
  type: "<%= type %>",
  medium: "<%= medium %>",
  description: "<%= description %>",
  link: "<%= link %>",
  linkTitle: "Link to Prototype",
};

<ProjectSection videos={[{ url: "./demo.mp4"}]}>
## What it is

Describe <%= name %> here…
</ProjectSection>
