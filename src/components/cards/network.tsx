import { Title } from "@/components/shared/title";

export function Network() {
  return (
    <div className={"p-2·scrollbar-thin"}>
      <Title title={"Networking"} />

      <ul className="list-disc pl-4">
        <li>Desenvolvedores que trabalham remoto</li>
        <li>Amigos que trabalham para o exterior</li>
      </ul>
    </div>
  );
}
