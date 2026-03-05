export type ArticleReview = {
  gameplay: number;
  visuals: number;
  audio: number;
  concept: number;
  value: number;
};

export type ArticleReadInfo = {
  wordcount: string;
  time: string;
};

export type Article = {
  article_id: number;
  article_subtitle: string;
  article_title: string;
  author_id: number;
  cover_image_or_video: string;
  markdown_data: string;
  published_date: string;
  section: string;
  is_hidden: boolean;
  series_id: number | null;
  is_review: boolean;
  review: ArticleReview | null;
  read: ArticleReadInfo;
};
