import { DockerIcon } from "../assets/icons/DockerIcon";
import { JenkinsIcon } from "../assets/icons/JenkinsIcon";
import { KafkaIcon } from "../assets/icons/KafkaIcon";
import { KubernetesIcon } from "../assets/icons/KubernetesIcon";
import { LinuxIcon } from "../assets/icons/LinuxIcon";
import type { ITechComponent } from "../components/interfaces/ITechComponent";

export const DevOpsIcons: ITechComponent[] = [
    {
        section: "",
        tools: [
            { name: "Jenkins", Icon: JenkinsIcon },
            { name: "Kafka", Icon: KafkaIcon },
            { name: "Linux", Icon: LinuxIcon },
            { name: "Docker", Icon: DockerIcon },
            { name: "Kubernetes", Icon: KubernetesIcon },
        ]
    },
];