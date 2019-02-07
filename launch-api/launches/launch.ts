// launch.ts

export interface Launch {
    name: string;
    agency: LaunchUrlData;
    location: LaunchUrlData;
    time: number;
    url: string;
}

export interface LaunchUrlData {
    name: string;
    url: string;
}