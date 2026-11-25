import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen px-5 py-16">
      <div className="mx-auto max-w-xl">
        <p className="text-sm text-muted">404</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">
          Səhifə tapılmadı
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Axtardığınız səhifə mövcud deyil və ya başqa ünvana köçürülüb.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-accent px-4 py-2 text-sm text-accent-ink"
        >
          Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
}
