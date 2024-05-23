import { Title } from "@/components/shared/title";

export function Objetivos() {
  return (
    <div className={"p-2·scrollbar-thin"}>
      <Title title={"Objetivos"} />

      <h2 className="mb-2 mt-4 text-lg font-semibold">Habilidades Técnicas:</h2>
      <ul className="list-disc pl-4">
        <li>Linguagens de Programação: Java, JavaScript, Python, TypeScript</li>
        <li>Frameworks: React, Django, Node.js, NestJS</li>
        <li>Bancos de Dados: PostgreSQL, MongoDB</li>
        <li>Práticas DevOps: AWS, Docker, Kubernetes</li>
        <li>Metodologias Ágeis: Scrum, Kanban</li>
        <li>Test-Driven Development (TDD)</li>
        <li>Escrita de Documentação Técnica</li>
      </ul>

      <h2 className="mb-2 mt-4 text-lg font-semibold">
        Habilidades Interpessoais:
      </h2>
      <ul className="list-disc pl-4">
        <li>Comunicação em inglês</li>
        <li>Comunicação Eficaz</li>
        <li>Habilidades de Liderança</li>
        <li>Colaboração em Equipe</li>
        <li>Autonomia e Adaptabilidade</li>
      </ul>

      <h2 className="mb-2 mt-4 text-lg font-semibold">Pilha Tecnológica:</h2>
      <ul className="list-disc pl-4">
        <li>Frontend: React, Next.js, TypeScript, Tailwind</li>
        <li>Backend: Django, Node.js, NestJS, Python</li>
        <li>Bancos de Dados: PostgreSQL, MongoDB</li>
        <li>Serviços em Nuvem: AWS</li>
        <li>Ferramentas DevOps: Docker, Kubernetes</li>
      </ul>
    </div>
  );
}
