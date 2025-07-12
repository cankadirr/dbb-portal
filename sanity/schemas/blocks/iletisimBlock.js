// sanity/schemas/blocks/iletisimBlock.js
export default {
  name: "iletisimBlock",
  title: "İletişim Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
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
