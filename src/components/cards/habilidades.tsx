import { Title } from "@/components/shared/title";

export function Habilidades() {
  return (
    <div className={"scrollbar-thin p-2"}>
      <Title title={"Habilidades técnicas principais"} />

      <ul className="list-disc pl-4">
        <li>Java</li>
        <li>Python</li>
        <li>.NET</li>
        <li>Swagger</li>
        <li>RestAPIs</li>
        <li>Django</li>
        <li>Django RestFramework</li>
        <li>React</li>
        <li>React Native</li>
        <li>Spring Boot</li>
        <li>Nest JS</li>
        <li>Tailwind</li>
      </ul>
    </div>
  );
}
