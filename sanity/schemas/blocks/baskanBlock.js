// sanity/schemas/blocks/baskanBlock.js
export default {
  name: "baskanBlock",
  title: "Başkan Bloku",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Ad Soyad",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Fotoğraf",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "message",
      title: "Mesaj",
      type: "text",
    },
    {
      name: "position",
      title: "Görev",
      type: "string",
    },
    {
      name: "social",
      title: "Sosyal Medya Linkleri",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
