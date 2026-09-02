import { 
    AWSIcon, 
    AzureIcon, 
    CppIcon, 
    CSharpIcon, 
    DotNetIcon,
    ExpressIcon, 
    GoIcon, 
    GraphQLIcon, 
    HibernateIcon,
    JavaIcon, 
    JWTIcon, 
    LaravelIcon, 
    MongoDBIcon, 
    MySQLIcon, 
    NestJsIcon, 
    NodeJsIcon, 
    PhpIcon, 
    PostgreSQLIcon, 
    PrismaIcon, 
    PythonIcon, 
    RestApisIcon, 
    RustIcon, 
    SpringBootIcon, 
    SQLIcon, 
    SQLServerIcon,
    SymfonyIcon, 
    TokioIcon, 
    TypeScriptIcon,
} from '../../assets/icons';
import type { ITechComponent } from '../../components/interfaces/ITechComponent';


export const backendIcons: ITechComponent[] = [
    {
        section: "skills.grid.1.subtitles.0",
        tools: [
            { name: "Java", Icon: JavaIcon },
            { name: "TypeScript", Icon: TypeScriptIcon },
            { name: "Go", Icon: GoIcon },
            { name: "C#", Icon: CSharpIcon },
            { name: "Rust", Icon: RustIcon },
            { name: "PHP", Icon: PhpIcon },
            { name: "C++", Icon: CppIcon },
            { name: "Python", Icon: PythonIcon },
        ]
    },
    {
        section: "Frameworks",
        tools: [
            { name: "REST API's", Icon: RestApisIcon },
            { name: "GraphQL", Icon: GraphQLIcon },
            { name: "JWT", Icon: JWTIcon },
            { name: "Spring Boot", Icon: SpringBootIcon },
            { name: "NodeJs", Icon: NodeJsIcon },
            { name: "Express", Icon: ExpressIcon },
            { name: "NestJs", Icon: NestJsIcon },
            { name: ".NET", Icon: DotNetIcon },
            { name: "Laravel", Icon: LaravelIcon },
            { name: "Symfony", Icon: SymfonyIcon },
            { name: "Tokio", Icon: TokioIcon },
        ]
    },
    {
        section: "skills.grid.1.subtitles.1",
        tools: [
            { name: "MongoDB", Icon: MongoDBIcon },
            { name: "MySQL", Icon: MySQLIcon },
            { name: "SQLServer", Icon: SQLServerIcon },
            { name: "Oracle", Icon: SQLIcon },
            { name: "PostgreSQL", Icon: PostgreSQLIcon },
            { name: "Prisma", Icon: PrismaIcon },
            { name: "Hibernate", Icon: HibernateIcon },
        ]
    },
    {
        section: "skills.grid.1.subtitles.2",
        tools: [
            { name: "Azure", Icon: AzureIcon },
            { name: "AWS", Icon: AWSIcon },
        ]
    },
];