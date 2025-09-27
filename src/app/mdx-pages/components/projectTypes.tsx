export type ProjectDataType = {
  title: string;
  date: string;
  type: string;
  medium: string;
  description: string;
  slug: string;
  heroStyling: string;
  heroIsVideo?: boolean;
};

export type VideoObjectType = {
  url: string;
  controls?: boolean;
  caption?: string;
};

export type ImageObjectType = {
  url: string;
  caption?: string;
};
