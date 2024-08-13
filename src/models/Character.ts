import { z } from 'zod';

export const CharacterSchema = z.object({
  created: z.string(),
  episode: z.array(z.string()),
  gender: z.string(),
  id: z.number(),
  image: z.string(),
  location: z.object({
    name: z.string(),
    url: z.string(),
  }),
  name: z.string(),
  origin: z.object({
    name: z.string(),
    url: z.string(),
  }),
  species: z.string(),
  status: z.string(),
  type: z.string(),
  url: z.string(),
});

export const CharacterResponseSchema = z.object({
  characters: z.array(CharacterSchema),
});

export type Character = z.infer<typeof CharacterSchema>;
export type CharacterResponse = z.infer<typeof CharacterResponseSchema>;
