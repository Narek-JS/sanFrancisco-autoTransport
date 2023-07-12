import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useRenderRout() {
    const router = useRouter();
    const [_, s] = useState<any>();

    useEffect(() => {
        s(Math.random());
    }, [router]);
};
