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
import { japaneseNewsTemplate } from './japanese/news';
import { japaneseContactTemplate } from './japanese/contact';
import { portfolioTemplate } from './portfolio';
import { lpTemplate } from './lp';

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
  japaneseAboutTemplate,
  japaneseNewsTemplate,
  japaneseContactTemplate,
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
