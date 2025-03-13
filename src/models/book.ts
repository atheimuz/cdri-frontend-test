export interface IBook {
    title: string;
    contents: string;
    url: string;
    isbn: string;
    datetime: string;
    authors: string[];
    publisher: string;
    translators: string[];
    price: number;
    sale_price: number;
    thumbnail: string;
    status: string;
}

export type BookSearchType = "title" | "person" | "publisher";

export interface IBookListResponse {
    documents: IBook[];
    meta: {
        is_end: boolean;
        pageable_count: number;
        total_count: number;
    };
}
