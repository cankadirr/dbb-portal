// sanity/schemas/blocks/projeBlock.js
export default {
  name: "projeBlock",
  title: "Proje Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "summary",
      title: "Özet",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Görsel",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
