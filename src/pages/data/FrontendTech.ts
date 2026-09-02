import { 
    ReactIcon, 
    AngularIcon, 
    BoostrapIcon, 
    CSSIcon, 
    HTMLIcon,
    MaterialUIIcon, 
    NextJsIcon, 
    ReduxIcon, 
    RxJSIcon, 
    TailwindIcon, 
    ZustandIcon, 
} from "../../assets/icons";
import type { ITechComponent } from "../../components/interfaces/ITechComponent";

export const frontendIcons: ITechComponent[] = [
    {
        section: "Frameworks",
        tools: [
            { name: "HTML", Icon: HTMLIcon },
            { name: "React", Icon: ReactIcon },
            { name: "Angular", Icon: AngularIcon },
            { name: "NextJs", Icon: NextJsIcon },
            { name: "RxJs", Icon: RxJSIcon },
        ]
    },
    {
        section: "CSS",
        tools: [
            { name: "Tailwind", Icon: TailwindIcon },
            { name: "Boostrap", Icon: BoostrapIcon },
            { name: "CSS 3", Icon: CSSIcon },
            { name: "Material UI", Icon: MaterialUIIcon },
        ]
    },
    {
        section: "skills.grid.0.subtitles",
        tools: [
            { name: "Redux", Icon: ReduxIcon },
            { name: "Zustand", Icon: ZustandIcon },
        ]
    },
];