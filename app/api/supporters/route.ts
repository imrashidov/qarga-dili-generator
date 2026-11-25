import { NextResponse } from "next/server";
import { SUPPORTERS } from "@/app/lib/supporters";

// Nəticə 1 saat keşlənir ki, Buy Me a Coffee API-sinə hər ziyarətdə sorğu getməsin
export const revalidate = 3600;

const API_URL = "https://developers.buymeacoffee.com/api/v1/supporters";

type RawSupporter = {
  supporter_name?: string | null;
  is_refunded?: boolean | null;
  support_visibility?: number | null;
};

export async function GET() {
  const token = process.env.BMC_ACCESS_TOKEN;
  const names = new Set<string>(SUPPORTERS);

  if (token) {
    try {
      const res = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 3600 },
      });
      if (res.ok) {
        const json: { data?: RawSupporter[] } = await res.json();
        for (const s of json.data ?? []) {
          const name = s.supporter_name?.trim();
          // Geri qaytarılmış və adı olmayan ("Someone") ödənişləri atırıq
          if (!name || s.is_refunded || name.toLowerCase() === "someone") continue;
          names.add(name);
        }
      }
    } catch {
      // API əlçatmazdırsa, yalnız əl ilə yazılmış siyahı göstərilir
    }
  }

  return NextResponse.json({ supporters: [...names] });
}
