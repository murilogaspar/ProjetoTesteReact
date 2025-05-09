'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NavPrincipalAssistido() {
  const router = useRouter();

  return (
    <div className="flex justify-end items-center gap-x-4">
      <Button
        className="bg-green-900 text-white"
        onClick={() => router.push("/assistido/navprincipal/historico")}
      >
        Histórico
      </Button>
    </div>
  );
}
