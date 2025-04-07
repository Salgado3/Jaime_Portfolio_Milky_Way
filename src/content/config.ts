import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage1: z.object({
      url: z.string().nullable(),
      alt: z.string().nullable(),
    }),
    worksImage2: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    platform: z.string(),
    stack: z.string(),
    website: z.string().nullable(),
    github: z
      .object({
        label: z.string(),
        url: z.string().url(),
      })
      .nullable()
      .optional(),
    chrome: z
      .object({
        label: z.string(),
        url: z.string().url(),
      })
      .nullable()
      .optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
