export interface CardHobbieProps {
    lightMode: boolean;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children?: React.ReactNode;
    hobbieTitle: string;
    hobbieDescription: string;
    hobbieImages: string[];
} 