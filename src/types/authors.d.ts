export type Author = {
  author_id: number;
  author_name: string;
  avatar_image: string;
  biography: string;
  blue_sky: string;
  date: string | null;
  email: string;
  is_hidden: boolean;
  personal_site: string;
  titles: string;
  twitter: string;
  you_tube: string;
};

// Back-compat alias
export type Authors = Author;
