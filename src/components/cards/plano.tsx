import { Title } from "@/components/shared/title";

export function Plano() {
  return (
    <div className={"scrollbar-thin p-2"}>
      <Title title={"Plano"} />

      <ul className="list-disc pl-4">
        <li>Utilizar as férias para evoluir as minhas habilidades</li>
        <li>
          Criar o hábito de ler artigos sobre novas tecnologias todos os dias
        </li>
        <li>Evoluir minha marca pessoal</li>
      </ul>
    </div>
  );
}
