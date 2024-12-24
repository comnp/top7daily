import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Specify the branch for your Git repository
  clientId: "b47a2869-291d-41c2-90a0-a91d5c1f04c2", // Replace with TinaCMS client ID
  token: "026891f0124de72604ee0491c070691fca3acc8c", // Replace with TinaCMS API token
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      publicFolder: "static",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "content/posts",
        fields: [
          { name: "title", label: "Title", type: "string" },
          { name: "date", label: "Date", type: "datetime" },
          { name: "body", label: "Body", type: "rich-text" },
        ],
      },
    ],
  },
});