import { 
    ClaudeIcon,
    GithubIcon, 
    GitIcon, 
    IntelliJIDEAIcon, 
    PostmanIcon, 
    VSCodeIcon, 
    ZedIcon 
} from '../assets/icons';
import type { ITechComponent } from '../components/interfaces/ITechComponent';

export const toolsIcons: ITechComponent[] = [
    {
        section: "IDE'S",
        tools: [
            { name: "VsCode", Icon: VSCodeIcon },
            { name: "Zed", Icon: ZedIcon },
            { name: "IntelliJ IDEA", Icon: IntelliJIDEAIcon },
        ]
    },
    {
        section: "Versionamiento",
        tools: [
            { name: "Git", Icon: GitIcon },
            { name: "GitHub", Icon: GithubIcon },
        ]
    },
    {
        section: "Consumo de REST API's",
        tools: [
            { name: "Postman", Icon: PostmanIcon },
        ]
    },
    {
        section: "IA",
        tools: [
            { name: "Claude Code", Icon: ClaudeIcon },
        ]
    },
];