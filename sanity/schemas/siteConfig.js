// sanity/schemas/siteConfig.js
export default {
  name: "siteConfig",
  title: "Site Konfigürasyonu",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Başlığı",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Açıklama",
      type: "text",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socialLinks",
      title: "Sosyal Medya Linkleri",
      type: "array",
      of: [{ type: "sosyalBlock" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
