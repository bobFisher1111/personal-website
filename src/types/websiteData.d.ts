import { Books } from './books';
import { Articles } from './articals';
import { Authors } from './authors';
import { Series } from './series';

export type WebsiteData = {
  articals: Articles[];
  authors: Authors[];
  books: Books[];
  series: Series[];
};