import { JestIcon } from "../assets/icons/JestIcon";
import { KarmaIcon } from "../assets/icons/KarmaIcon";
import { MockitoIcon } from "../assets/icons/MockitoIcon";
import { PhpIcon } from "../assets/icons/PhpIcon";
import type { ITechComponent } from "../components/interfaces/ITechComponent";

export const TestingIcons: ITechComponent[] = [
    {
        section: "Herramientas de testing",
        tools: [
            { name: "Jest", Icon: JestIcon },
            { name: "Karma", Icon: KarmaIcon },
            { name: "Mockito", Icon: MockitoIcon },
            { name: "PHPUnit", Icon: PhpIcon },
        ]
    },
];