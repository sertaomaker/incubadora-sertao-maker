import { noticias } from "./noticias";

export const noticiasShare = Object.values(noticias).map((n) => ({
  slug: n.slug,
  title: n.title,
  description: n.description || "",
  hero: n.hero,
}));