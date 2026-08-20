import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "3o6ku5ch",
  dataset: "production",
  apiVersion: "2026-08-20",
  useCdn: false,
});
