import { IBook } from "@/models/book";

const STORAGE_NAME = "cdri-like-books";
const likedBooks = new Map<string, IBook>();

const getLikedBooks = () => {
    const stored = localStorage.getItem(STORAGE_NAME);
    if (!stored) return;

    const likedList: IBook[] = JSON.parse(stored);
    likedList.forEach((book) => {
        likedBooks.set(book.url, book);
    });
};

getLikedBooks();

const listeners = new Map<string, Set<() => void>>();
export const BookLikeStore = {
    getSnapshot: (url: string) => likedBooks.has(url),

    subscribe: (url: string, callback: () => void) => {
        if (!listeners.has(url)) {
            listeners.set(url, new Set());
        }
        listeners.get(url)!.add(callback);

        return () => {
            listeners.get(url)!.delete(callback);
            if (listeners.get(url)!.size === 0) {
                listeners.delete(url);
            }
        };
    },

    toggleLike: (book: IBook) => {
        if (likedBooks.has(book.url)) {
            likedBooks.delete(book.url);
        } else {
            likedBooks.set(book.url, book);
        }

        const newLikedList = Array.from(likedBooks.values());
        localStorage.setItem(STORAGE_NAME, JSON.stringify(newLikedList));

        if (listeners.has(book.url)) {
            listeners.get(book.url)!.forEach((callback) => callback());
        }
    }
};
