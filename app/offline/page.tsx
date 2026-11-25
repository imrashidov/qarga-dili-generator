"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

function subscribe(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export default function Offline() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );

  return (
    <div className="min-h-screen px-5 py-16">
      <div className="mx-auto max-w-xl">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">
          {isOnline ? "Yenidən onlaynsınız" : "İnternet bağlantısı yoxdur"}
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          {isOnline
            ? "Əsas səhifəyə qayıtmaq üçün aşağıdakı düyməni basın."
            : "Bağlantınızı yoxlayıb yenidən cəhd edin."}
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-accent px-4 py-2 text-sm text-accent-ink"
        >
          {isOnline ? "Əsas səhifəyə qayıt" : "Yenilə"}
        </Link>
      </div>
    </div>
  );
}
