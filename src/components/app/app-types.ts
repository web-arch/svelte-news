export interface NewsResponse {
    meta: Meta;
    data?: (DataEntity)[] | null;
  }

  export interface Meta {
    found: number;
    returned: number;
    limit: number;
    page: number;
  }

  export interface DataEntity {
    uuid: string;
    title: string;
    description: string;
    keywords: string;
    snippet: string;
    url: string;
    image_url: string;
    language: string;
    published_at: string;
    source: string;
    categories?: (string)[] | null;
    relevance_score?: null;
    locale: string;
  }
  