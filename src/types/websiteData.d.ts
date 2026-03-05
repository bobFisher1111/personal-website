import type { Article } from "./articals";
import type { Author } from "./authors";
import type { Series } from "./series";

export type WebsiteData = {
  articles: Article[];
  authors: Author[];
  series: Series[];
};
