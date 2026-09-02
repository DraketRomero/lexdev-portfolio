import { JestIcon, KarmaIcon, MockitoIcon, PhpIcon } from "../../assets/icons";
import type { ITechComponent } from "../../components/interfaces/ITechComponent";

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