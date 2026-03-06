export type Template = {
  id: string;
  name: string;
  tags: string[];
  description: string;
  html: string;
};

export type TemplateVariant = {
  id: string;
  templateId: string;
  name: string;
  pageSlug: string;
  html: string;
  description?: string;
};
