// sanity/schemas/page.js
export default {
  name: "page",
  title: "Sayfa",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required(),
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
    {
      name: "content",
      title: "İçerik Blokları",
      type: "array",
      of: [
        { type: "haberBlock" },
        { type: "duyuruBlock" },
        { type: "galeriBlock" },
        { type: "etkinlikBlock" },
        { type: "sliderBlock" },
        { type: "projeBlock" },
        { type: "ihaleBlock" },
        { type: "sssBlock" },
        { type: "sosyalBlock" },
        { type: "twitterEmbedBlock" },
        // Diğer bloklar buraya eklenebilir
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: "/" + subtitle,
      };
    },
  },
};
