interface SocialMediaURL {
    name: string;
    url: string;
}


export interface Employ {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    name: string;
    alias: string;
    phone: string;
    location: string;
    email: string;
    social_media: SocialMediaURL[];
}