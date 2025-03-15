import axios from "axios";
import { IBookListResponse } from "@/models/book";

export const getBooksAPI = async ({
    keyword,
    target,
    page,
    size
}: {
    keyword: string;
    target?: string;
    page: number;
    size: number;
}) => {
    try {
        const { data } = await axios.get<IBookListResponse>(
            "https://dapi.kakao.com/v3/search/book",
            {
                params: {
                    query: keyword,
                    page,
                    target,
                    size
                },
                headers: {
                    Authorization: `KakaoAK ${import.meta.env.VITE_API_KEY}`
                }
            }
        );

        return data;
    } catch (e) {
        console.log("e::", e);
        return null;
    }
};
