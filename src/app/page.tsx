import { Canais } from "@/components/cards/canais";
import { Experiencia } from "@/components/cards/experiencia";
import { Gaps } from "@/components/cards/gaps";
import { Habilidades } from "@/components/cards/habilidades";
import { Mercado } from "@/components/cards/mercado";
import { Network } from "@/components/cards/network";
import { Objetivos } from "@/components/cards/objetivos";
import { Plano } from "@/components/cards/plano";
import { Valor } from "@/components/cards/valor";

export default function Home() {
  return (
    <div
      className={"flex h-screen w-screen flex-col bg-zinc-800 p-4 text-white"}
    >
      <div className={"row-span-2 gap-1"}>
        <div className={"grid h-full w-full grid-cols-5 gap-1"}>
          <div className={"overflow-y-auto rounded border border-violet-500"}>
            <Objetivos />
          </div>

          <div className={"grid h-full grid-rows-2"}>
            <div className={"overflow-y-auto rounded border border-violet-500"}>
              <Experiencia />
            </div>
            <div className={"overflow-y-auto rounded border border-violet-500"}>
              <Habilidades />
            </div>
          </div>
          <div className={"overflow-y-auto rounded border border-violet-500"}>
            <Valor />
          </div>

          <div className={"grid h-full grid-rows-2"}>
            <div className={"overflow-y-auto rounded border border-violet-500"}>
              <Network />
            </div>
            <div className={"overflow-y-auto rounded border border-violet-500"}>
              <Canais />
            </div>
          </div>

          <div className={"overflow-y-auto rounded border border-violet-500"}>
            <Mercado />
          </div>
        </div>
      </div>
      <div className={"row-span-1 mt-1 h-full"}>
        <div className={"grid h-full grid-cols-2 gap-1"}>
          <div className={"overflow-y-auto rounded border border-violet-500"}>
            <Gaps />
          </div>
          <div className={"overflow-y-auto rounded border border-violet-500"}>
            <Plano />
          </div>
        </div>
      </div>
    </div>
  );
}
