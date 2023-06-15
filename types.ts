

// types.ts
export interface IPost {
	content: string;
	meta: {
	  slug: string;
	  excerpt: string;
	  title: string;
	  tags: string[];
	  date: string;
	  image: string;
	};
  }
  