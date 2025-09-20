export type DestinationImage = {
    Preview_Id__s: string;
    File_Name__s: string;
    Description__s?: string | null;
    Size__s?: number;
    Sequence_Number__s?: number;
    State__s?: string | null;
    Modified_By__s?: {
        name: string;
        id: string;
        email: string;
    };
    Created_By__s?: {
        name: string;
        id: string;
        email: string;
    };
    Created_Time__s?: string;
    Modified_Time__s?: string;
    id: string;
    Owner__s?: {
        name: string;
        id: string;
        email: string;
    };
    File_Id__s: string;
};

export type Destination = {
    id: string;
    Name: string;
    Destination_Description: string;
    Destination_Images?: DestinationImage[];
    Featured?: boolean;
    Type?: string;
};

export type Package = {
    id: string;
    Name: string;
    Package_Description?: string;
    Package_Image_URL?: string;
};

export type ApiResponse<T> = {
    success: boolean;
    data: T;
    error?: string;
};