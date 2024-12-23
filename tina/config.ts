import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Replace with your Git branch
  clientId: "your-client-id", // From your TinaCMS setup
  token: "your-access-token", // From your TinaCMS setup
  build: {
    publicFolder: "public", // Path for public files
    outputFolder: "admin", // Path where TinaCMS builds admin
  },
  schema: {
    collections: [
      // Posts Collection
      {
        name: "posts",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "date",
            label: "Date",
            type: "datetime",
          },
          {
            name: "categories",
            label: "Categories",
            type: "string",
            list: true,
          },
          {
            name: "tags",
            label: "Tags",
            type: "string",
            list: true,
          },
          {
            name: "contentType",
            label: "Content Type",
            type: "string",
            options: ["Product", "Service", "Blog"],
          },
          {
            name: "affiliateLinks",
            label: "Affiliate Links",
            type: "object",
            list: true,
            fields: [
              { name: "platform", label: "Platform", type: "string" },
              { name: "product_id", label: "Product ID", type: "string" },
            ],
          },
          {
            name: "customFields",
            label: "Custom Fields",
            type: "object",
            list: true,
            fields: [
              { name: "key", label: "Field Key", type: "string" },
              { name: "value", label: "Field Value", type: "string" },
            ],
          },
        ],
      },

      // Site Settings Collection
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json", // Storing settings in JSON format
        fields: [
          {
            name: "enableComments",
            label: "Enable Comments",
            type: "boolean",
          },
          {
            name: "enableMailingList",
            label: "Enable Mailing List",
            type: "boolean",
          },
          {
            name: "enableSocialSharing",
            label: "Enable Social Sharing",
            type: "boolean",
          },
          {
            name: "mailingList",
            label: "Mailing List Providers",
            type: "object",
            fields: [
              {
                name: "providers",
                label: "Providers",
                type: "string",
                list: true,
                options: ["mailchimp", "convertkit", "sendinblue"],
              },
              {
                name: "mailchimpAction",
                label: "Mailchimp Action URL",
                type: "string",
              },
              {
                name: "convertkitAction",
                label: "ConvertKit Action URL",
                type: "string",
              },
              {
                name: "sendinblueAction",
                label: "Sendinblue Action URL",
                type: "string",
              },
            ],
          },
          {
            name: "comments",
            label: "Comment Systems",
            type: "object",
            fields: [
              {
                name: "providers",
                label: "Providers",
                type: "string",
                list: true,
                options: ["disqus", "giscus", "facebook", "commento"],
              },
              {
                name: "disqusShortname",
                label: "Disqus Shortname",
                type: "string",
              },
              {
                name: "giscusRepo",
                label: "Giscus Repository",
                type: "string",
              },
              {
                name: "giscusMapping",
                label: "Giscus Mapping",
                type: "string",
              },
              {
                name: "facebookAppID",
                label: "Facebook App ID",
                type: "string",
              },
              {
                name: "commentoURL",
                label: "Commento URL",
                type: "string",
              },
            ],
          },
          {
            name: "socialSharing",
            label: "Social Sharing Platforms",
            type: "object",
            fields: [
              {
                name: "platforms",
                label: "Platforms",
                type: "string",
                list: true,
                options: ["twitter", "facebook", "linkedin", "pinterest", "whatsapp"],
              },
            ],
          },
          {
            name: "analytics",
            label: "Analytics",
            type: "object",
            fields: [
              {
                name: "googleAnalyticsID",
                label: "Google Analytics ID",
                type: "string",
              },
              {
                name: "plausibleURL",
                label: "Plausible Analytics URL",
                type: "string",
              },
            ],
          },
        ],
      },
    ],
  },
});