import { BookSearchType } from "@/models/book";

export const convertBookSearchType = (type: BookSearchType): string => {
    switch (type) {
        case "title":
            return "제목";
        case "person":
            return "저자명";
        case "publisher":
            return "출판사";
        default:
            return type;
    }
};
