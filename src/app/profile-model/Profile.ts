export interface Profile{
    total_count?: string;
    items?: items[];
}

export interface items{
    name?:string;
    id?:string;
    login?:string;
    avatar_url?:string;
    repos_url?:string;
    html_url?:string;
    url?:string;
}