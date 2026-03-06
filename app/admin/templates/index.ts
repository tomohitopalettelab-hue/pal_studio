export type { Template, TemplateVariant } from './types';
import type { Template, TemplateVariant } from './types';
import { modernTemplate } from './modern';
import { elegantTemplate } from './elegant';
import { corporateTemplate } from './corporate';
import { popTemplate } from './pop';
import { minimalTemplate } from './minimal';
import { darkTemplate } from './dark';
import { naturalTemplate } from './natural';
import { japaneseTemplate } from './japanese';
import { japaneseAboutTemplate } from './japanese/about';
import { japaneseBlogTemplate } from './japanese/blog';
import { japaneseBlogPageTemplate } from './japanese/blog-page';
import { japaneseContactTemplate } from './japanese/contact';
import { japaneseNewsTemplate } from './japanese/news';
import { japaneseNewsPageTemplate } from './japanese/news-page';
import { portfolioTemplate } from './portfolio';
import { lpTemplate } from './lp';
import { modernNewsTemplate } from './modern/news';
import { modernBlogTemplate } from './modern/blog';
import { modernNewsPageTemplate } from './modern/news-page';
import { modernBlogPageTemplate } from './modern/blog-page';
import { elegantNewsTemplate } from './elegant/news';
import { elegantBlogTemplate } from './elegant/blog';
import { elegantNewsPageTemplate } from './elegant/news-page';
import { elegantBlogPageTemplate } from './elegant/blog-page';
import { corporateNewsTemplate } from './corporate/news';
import { corporateBlogTemplate } from './corporate/blog';
import { corporateNewsPageTemplate } from './corporate/news-page';
import { corporateBlogPageTemplate } from './corporate/blog-page';
import { popNewsTemplate } from './pop/news';
import { popBlogTemplate } from './pop/blog';
import { popNewsPageTemplate } from './pop/news-page';
import { popBlogPageTemplate } from './pop/blog-page';
import { minimalNewsTemplate } from './minimal/news';
import { minimalBlogTemplate } from './minimal/blog';
import { minimalNewsPageTemplate } from './minimal/news-page';
import { minimalBlogPageTemplate } from './minimal/blog-page';
import { darkNewsTemplate } from './dark/news';
import { darkBlogTemplate } from './dark/blog';
import { darkNewsPageTemplate } from './dark/news-page';
import { darkBlogPageTemplate } from './dark/blog-page';
import { naturalNewsTemplate } from './natural/news';
import { naturalBlogTemplate } from './natural/blog';
import { naturalNewsPageTemplate } from './natural/news-page';
import { naturalBlogPageTemplate } from './natural/blog-page';
import { portfolioNewsTemplate } from './portfolio/news';
import { portfolioBlogTemplate } from './portfolio/blog';
import { portfolioNewsPageTemplate } from './portfolio/news-page';
import { portfolioBlogPageTemplate } from './portfolio/blog-page';
import { lpNewsTemplate } from './lp/news';
import { lpBlogTemplate } from './lp/blog';
import { lpNewsPageTemplate } from './lp/news-page';
import { lpBlogPageTemplate } from './lp/blog-page';

const REQUIRED_SECTION_IDS = ['top', 'concept', 'features', 'service', 'works', 'company'] as const;

export const templates: Template[] = [
  modernTemplate,
  elegantTemplate,
  corporateTemplate,
  popTemplate,
  minimalTemplate,
  darkTemplate,
  naturalTemplate,
  japaneseTemplate,
  portfolioTemplate,
  lpTemplate,
];

export const templateVariants: TemplateVariant[] = [
  modernNewsTemplate,
  modernBlogTemplate,
  modernNewsPageTemplate,
  modernBlogPageTemplate,
  elegantNewsTemplate,
  elegantBlogTemplate,
  elegantNewsPageTemplate,
  elegantBlogPageTemplate,
  corporateNewsTemplate,
  corporateBlogTemplate,
  corporateNewsPageTemplate,
  corporateBlogPageTemplate,
  popNewsTemplate,
  popBlogTemplate,
  popNewsPageTemplate,
  popBlogPageTemplate,
  minimalNewsTemplate,
  minimalBlogTemplate,
  minimalNewsPageTemplate,
  minimalBlogPageTemplate,
  darkNewsTemplate,
  darkBlogTemplate,
  darkNewsPageTemplate,
  darkBlogPageTemplate,
  naturalNewsTemplate,
  naturalBlogTemplate,
  naturalNewsPageTemplate,
  naturalBlogPageTemplate,
  japaneseAboutTemplate,
  japaneseNewsTemplate,
  japaneseBlogTemplate,
  japaneseNewsPageTemplate,
  japaneseBlogPageTemplate,
  japaneseContactTemplate,
  portfolioNewsTemplate,
  portfolioBlogTemplate,
  portfolioNewsPageTemplate,
  portfolioBlogPageTemplate,
  lpNewsTemplate,
  lpBlogTemplate,
  lpNewsPageTemplate,
  lpBlogPageTemplate,
];

export const TEMPLATE_DEFAULT_ID = templates[0]?.id ?? '';

const templateMap = new Map(templates.map((template) => [template.id, template] as const));
const templateVariantMap = new Map(templateVariants.map((variant) => [variant.id, variant] as const));

export const hasTemplateId = (id?: string | null): id is string => {
  if (!id) return false;
  return templateMap.has(String(id));
};

export const hasTemplateVariantId = (id?: string | null): id is string => {
  if (!id) return false;
  return templateVariantMap.has(String(id));
};

export const normalizeTemplateId = (id?: string | null): string => {
  if (hasTemplateId(id)) return id;
  return TEMPLATE_DEFAULT_ID;
};

export const getTemplateById = (id?: string | null): Template => {
  const resolvedId = normalizeTemplateId(id);
  const template = templateMap.get(resolvedId);
  return template ?? templates[0];
};

export const getTemplateVariantById = (id?: string | null): TemplateVariant | undefined => {
  if (!id) return undefined;
  return templateVariantMap.get(String(id));
};

if (process.env.NODE_ENV !== 'production') {
  const duplicateIds = templates
    .map((template) => template.id)
    .filter((id, index, all) => all.indexOf(id) !== index);

  if (duplicateIds.length > 0) {
    console.warn('[templates] Duplicate template ids detected:', Array.from(new Set(duplicateIds)).join(', '));
  }

  templates.forEach((template) => {
    if (!template.html || !template.name || template.tags.length === 0) {
      console.warn(`[templates] Template metadata is incomplete: ${template.id}`);
      return;
    }

    const missingSections = REQUIRED_SECTION_IDS.filter(
      (sectionId) => !template.html.includes(`id="${sectionId}"`),
    );

    if (missingSections.length > 0) {
      console.warn(
        `[templates] Template ${template.id} is missing recommended sections: ${missingSections.join(', ')}`,
      );
    }
  });
}
