import { DockerIcon, JenkinsIcon, KafkaIcon, KubernetesIcon, LinuxIcon, SonarqubeIcon, TerraformIcon } from "../../assets/icons";
import type { ITechComponent } from "../../components/interfaces/ITechComponent";

export const DevOpsIcons: ITechComponent[] = [
    {
        section: "",
        tools: [
            { name: "Jenkins", Icon: JenkinsIcon },
            { name: "Kafka", Icon: KafkaIcon },
            { name: "Linux", Icon: LinuxIcon },
            { name: "Docker", Icon: DockerIcon },
            { name: "Kubernetes", Icon: KubernetesIcon },
            { name: "Sonarqube", Icon: SonarqubeIcon },
            { name: "Terraform", Icon: TerraformIcon },
        ]
    },
];