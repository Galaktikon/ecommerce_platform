// lib/sanity.ts
import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'your_project_id',
  dataset: 'production',
  apiVersion: '2023-08-16',
  useCdn: true,
})
