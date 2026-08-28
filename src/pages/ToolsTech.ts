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
        section: "skills.grid.4.subtitles.0",
        tools: [
            { name: "VsCode", Icon: VSCodeIcon },
            { name: "Zed", Icon: ZedIcon },
            { name: "IntelliJ IDEA", Icon: IntelliJIDEAIcon },
        ]
    },
    {
        section: "skills.grid.4.subtitles.1",
        tools: [
            { name: "Git", Icon: GitIcon },
            { name: "GitHub", Icon: GithubIcon },
        ]
    },
    {
        section: "skills.grid.4.subtitles.2",
        tools: [
            { name: "Postman", Icon: PostmanIcon },
        ]
    },
    {
        section: "skills.grid.4.subtitles.3",
        tools: [
            { name: "Claude Code", Icon: ClaudeIcon },
        ]
    },
];