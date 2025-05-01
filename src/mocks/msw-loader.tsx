"use client";

import { useEffect } from "react";

export function MSWLoader() {
  useEffect(() => {
    async function enableMsw() {
      if (typeof window === "undefined") {
        return null;
      }

      const { worker } = await import("./browser");

      await worker.start();
    }

    enableMsw();
  }, []);

  return null;
}
