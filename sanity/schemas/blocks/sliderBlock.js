// sanity/schemas/blocks/sliderBlock.js
export default {
  name: "sliderBlock",
  title: "Slider Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slides",
      title: "Slaytlar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "img", type: "image", title: "Görsel", options: { hotspot: true } },
            { name: "caption", type: "string", title: "Başlık" },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "slides.0.img",
    },
  },
};
