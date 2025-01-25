export interface ResponseType<T> {
    isSuccessful: boolean;
    status: number;
    data: T | null;
    error: string | null;
}