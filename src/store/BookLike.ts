import { IBook } from "@/models/book";

const STORAGE_NAME = "cdri-like-books";
const likedBooks = new Map<string, IBook>();

const getLikedBooks = () => {
    const stored = localStorage.getItem(STORAGE_NAME);
    if (!stored) return;

    const likedList: IBook[] = JSON.parse(stored);
    likedList.forEach((book) => {
        likedBooks.set(book.title, book);
    });
};

getLikedBooks();

const listeners = new Map<string, Set<() => void>>();
export const BookLikeStore = {
    getSnapshot: (title: string) => likedBooks.has(title),

    subscribe: (title: string, callback: () => void) => {
        if (!listeners.has(title)) {
            listeners.set(title, new Set());
        }
        listeners.get(title)!.add(callback);

        return () => {
            listeners.get(title)!.delete(callback);
            if (listeners.get(title)!.size === 0) {
                listeners.delete(title);
            }
        };
    },

    toggleLike: (book: IBook) => {
        if (likedBooks.has(book.title)) {
            likedBooks.delete(book.title);
        } else {
            likedBooks.set(book.title, book);
        }

        const newLikedList = Array.from(likedBooks.values());
        localStorage.setItem(STORAGE_NAME, JSON.stringify(newLikedList));

        if (listeners.has(book.title)) {
            listeners.get(book.title)!.forEach((callback) => callback());
        }
    }
};
