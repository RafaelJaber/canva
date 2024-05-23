import { Title } from "@/components/shared/title";

export function Experiencia() {
  return (
    <div className={"scrollbar-thin p-2"}>
      <Title title={"Experiências mais importantes"} />

      <ul className="list-disc pl-4">
        <li>Desenvolvimento de um software para gestão de massiva</li>
        <li>Gestão de equipes</li>
        <li>Planejamento técnico</li>
      </ul>
    </div>
  );
}