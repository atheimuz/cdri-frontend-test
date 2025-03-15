import { useInfiniteQuery } from "@tanstack/react-query";
import { getBooksAPI } from "@/lib/remote/book";

export const BOOKS_QUERY_KEY = "books";

export const useBooks = ({
    keyword,
    target,
    size
}: {
    keyword: string;
    target?: string;
    size: number;
}) => {
    return useInfiniteQuery({
        queryKey: [BOOKS_QUERY_KEY, keyword, target],
        queryFn: async ({ pageParam }) => getBooksAPI({ keyword, target, page: pageParam, size }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, _, lastPageParam) => {
            if (!lastPage || "error" in lastPage) return null;
            const itemCounts = lastPageParam + lastPage.documents?.length;
            const totalCounts = lastPage.meta?.total_count;
            return itemCounts < totalCounts ? lastPageParam + lastPage.documents?.length : null;
        }
    });
};
