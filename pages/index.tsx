import Button from "@/components/Button";
import TravalServices, { axiosServer } from "@/services/traval-kor";
import { GetlocationBasedListParam } from "@/types/traval.type";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { use, useEffect, useMemo, useState } from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-2">
      <Button onClick={() => router.push("/traval")}>
        한국관광공사_국문 관광정보 서비스_GW
      </Button>
      <Button disabled>...다음 프로젝트 데이터</Button>
    </div>
  );
}
