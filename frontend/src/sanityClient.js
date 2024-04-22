import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "uo38qkhv",
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: false,
});
export default client;
