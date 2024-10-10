export interface TelegramApiResponse<T> {
    ok: boolean;
    result: T;
}

export interface UserProfilePhotos {
    total_count: number;
    photos: Array<Array<PhotoSize>>;
}

export interface PhotoSize {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    file_size?: number;
}

export interface File {
    file_id: string;
    file_unique_id: string;
    file_size?: number;
    file_path?: string;
}
