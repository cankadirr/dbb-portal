// sanity/schemas/blocks/basvuruBlock.js
export default {
  name: "basvuruBlock",
  title: "Başvuru Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "formFields",
      title: "Form Alanları",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
