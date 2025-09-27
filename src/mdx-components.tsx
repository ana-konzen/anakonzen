import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2 className="text-sm uppercase font-bold mt-4 mb-2" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
