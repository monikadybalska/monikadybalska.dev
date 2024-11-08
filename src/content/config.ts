import Image from "astro/components/Image.astro";
import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    preview: z.object({
      thumbnail: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      description: z.string(),
      tags: z.array(z.string()).optional(),
    }),
  }),
});

export const collections = {
  projects: projectsCollection,
};
