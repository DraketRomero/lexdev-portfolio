import { ReactIcon } from '../assets/icons/ReactIcon';
import { AngularIcon } from '../assets/icons/AngularIcon';
import { TailwindIcon } from '../assets/icons/TailwindIcon';
import { BoostrapIcon } from '../assets/icons/BoostrapIcon';
import { ZustandIcon } from '../assets/icons/ZustandIcon';
import { ReduxIcon } from '../assets/icons/ReduxIcon';
import type { ITechComponent } from '../components/interfaces/ITechComponent';
import { NextJsIcon } from '../assets/icons/NextJsIcon';
import { CSSIcon } from '../assets/icons/CSSIcon';
import { MaterialUIIcon } from '../assets/icons/MaterialUIIcon';


export const frontendIcons: ITechComponent[] = [
    {
        key: "0",
        section: "Frameworks",
        tools: [
            { name: "React", Icon: ReactIcon },
            { name: "Angular", Icon: AngularIcon },
            { name: "NextJs", Icon: NextJsIcon },
        ]
    },
    {
        key: "1",
        section: "CSS",
        tools: [
            { name: "Tailwind", Icon: TailwindIcon },
            { name: "Boostrap", Icon: BoostrapIcon },
            { name: "CSS 3", Icon: CSSIcon },
            { name: "Material UI", Icon: MaterialUIIcon },
        ]
    },
    {
        key: "2",
        section: "Gestion de estado",
        tools: [
            { name: "Redux", Icon: ReduxIcon },
            { name: "Zustand", Icon: ZustandIcon },
        ]
    },
];