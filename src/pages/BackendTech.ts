import { 
    AWSIcon, 
    AzureIcon, 
    CppIcon, 
    CSharpIcon, 
    ExpressIcon, 
    GoIcon, 
    GraphQLIcon, 
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
    SymfonyIcon, 
    TokioIcon, 
    TypeScriptIcon 
} from '../assets/icons';
import type { ITechComponent } from '../components/interfaces/ITechComponent';


export const backendIcons: ITechComponent[] = [
    {
        section: "Lenguajes",
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
            { name: ".NET", Icon: CSharpIcon },
            { name: "Laravel", Icon: LaravelIcon },
            { name: "Symfony", Icon: SymfonyIcon },
            { name: "Tokio", Icon: TokioIcon },
        ]
    },
    {
        section: "Bases de datos y ORM's",
        tools: [
            { name: "MongoDB", Icon: MongoDBIcon },
            { name: "MySQL", Icon: MySQLIcon },
            { name: "SQLServer", Icon: SQLIcon },
            { name: "Oracle", Icon: SQLIcon },
            { name: "PostgreSQL", Icon: PostgreSQLIcon },
            { name: "Prisma", Icon: PrismaIcon },
            { name: "Hibernate", Icon: JavaIcon },
        ]
    },
    {
        section: "Clouds",
        tools: [
            { name: "Azure", Icon: AzureIcon },
            { name: "AWS", Icon: AWSIcon },
        ]
    },
];