export type TemplateFeatures = {
  hasBlog: boolean;
  hasNews: boolean;
  blogSectionId: string;   // ブログが入るセクションID ('blog' | 'works')
  newsSectionId: string;   // ニュースセクションID ('news')
};

export type FooterDefaults = {
  companyName: string;
  address: string;
  tel: string;
  links: { label: string; href: string }[];
};

export type Template = {
  id: string;
  name: string;
  tags: string[];
  description: string;
  html: string;
  features: TemplateFeatures;
  // ブログ/ニュース用HTMLテンプレート（{{title}}, {{date}}, {{image}}, {{href}}, {{excerpt}}）
  postCardTemplate: string;
  postListWrapper: string;
  newsItemTemplate: string;
  newsListWrapper: string;
  topNewsSectionTemplate: string;
  topBlogSectionTemplate: string;
  footerDefaults: FooterDefaults;
};

export type TemplateVariant = {
  id: string;
  templateId: string;
  name: string;
  pageSlug: string;
  html: string;
  description?: string;
};
