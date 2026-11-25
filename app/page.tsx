"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { convertFromQarga, convertToQarga, DEFAULT_SUFFIX } from "./lib/qarga";

type Variant = "ba" | "ga" | "custom";
type Mode = "encode" | "decode";

const VARIANTS: { id: Variant; label: string }[] = [
  { id: "ba", label: "ba / bə" },
  { id: "ga", label: "ga / gə" },
  { id: "custom", label: "Özün seç" },
];

export default function Home() {
  const [mode, setMode] = useState<Mode>("encode");
  const [inputText, setInputText] = useState("");
  const [variant, setVariant] = useState<Variant>("ba");
  const [customSuffix, setCustomSuffix] = useState("");
  const [supporters, setSupporters] = useState<string[]>([]);
  const [copyState, setCopyState] = useState<"idle" | "done" | "error">("idle");

  useEffect(() => {
    fetch("/api/supporters")
      .then((r) => r.json())
      .then((d) => setSupporters(d.supporters ?? []))
      .catch(() => {});
  }, []);

  const suffix =
    variant === "custom" ? customSuffix.trim() || DEFAULT_SUFFIX : variant;

  const outputText = useMemo(
    () =>
      mode === "encode"
        ? convertToQarga(inputText, suffix)
        : convertFromQarga(inputText, suffix),
    [inputText, suffix, mode],
  );

  const encode = mode === "encode";

  const handleSwap = () => {
    setInputText(outputText);
    setMode(encode ? "decode" : "encode");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopyState("done");
    } catch {
      setCopyState("error");
    }
    setTimeout(() => setCopyState("idle"), 1500);
  };

  return (
    <div className="min-h-screen px-5 pt-10 pb-24 sm:pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-10 max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight">
            Qarğa dili generator
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Qarğa dili kodlaşdırılmış danışıq üsuludur: hər saitdən sonra bir
            hece əlavə olunur ki, yalnız bu oyunu bilənlər sözü anlasın.{" "}
            <span className="text-ink">Salam</span> sözü{" "}
            <span className="text-ink">Sabalabam</span> olur.
          </p>
        </header>

        <main>
          <fieldset className="mb-8">
            <legend className="mb-3 text-sm font-medium">
              Əlavə olunan hece
            </legend>
            <div className="flex flex-wrap items-center gap-2">
              {VARIANTS.map(({ id, label }) => (
                <label
                  key={id}
                  className={`cursor-pointer rounded-md border px-3.5 py-2 text-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                    variant === id
                      ? "border-accent bg-accent text-accent-ink"
                      : "border-line hover:border-muted"
                  }`}
                >
                  <input
                    type="radio"
                    name="variant"
                    value={id}
                    checked={variant === id}
                    onChange={() => setVariant(id)}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
              {variant === "custom" && (
                <input
                  type="text"
                  aria-label="Öz hecanız"
                  placeholder="məs. ta"
                  value={customSuffix}
                  onChange={(e) => setCustomSuffix(e.target.value)}
                  maxLength={5}
                  autoFocus
                  className="w-28 rounded-md border border-line bg-surface px-3 py-2 text-sm"
                />
              )}
            </div>
          </fieldset>

          <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-4">
            <div className="flex flex-col">
              <label htmlFor="input-text" className="mb-2 text-sm font-medium">
                {encode ? "Normal mətn" : "Qarğa dilində mətn"}
              </label>
              <textarea
                id="input-text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  encode ? "Məsələn: Salam, necəsən?" : "Məsələn: Sabalabam"
                }
                className="min-h-[180px] flex-1 resize-y rounded-md border border-line bg-surface p-3 leading-relaxed"
              />
            </div>

            <button
              type="button"
              onClick={handleSwap}
              aria-label="İstiqaməti dəyiş"
              title="İstiqaməti dəyiş"
              className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-accent hover:border-muted md:mt-7"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 rotate-90 md:rotate-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 8h15m0 0l-4-4m4 4l-4 4M20 16H5m0 0l4-4m-4 4l4 4" />
              </svg>
            </button>

            <div className="flex flex-col">
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="output-text" className="text-sm font-medium">
                  {encode ? "Qarğa dilində" : "Azərbaycanca"}
                </label>
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={!outputText}
                  className="text-sm text-accent underline-offset-4 hover:underline disabled:cursor-not-allowed disabled:text-muted disabled:no-underline"
                >
                  {copyState === "done"
                    ? "Köçürüldü"
                    : copyState === "error"
                      ? "Köçürmək alınmadı"
                      : "Köçür"}
                </button>
              </div>
              <textarea
                id="output-text"
                readOnly
                value={outputText}
                placeholder="Nəticə burada görünəcək"
                className="min-h-[180px] flex-1 resize-y rounded-md border border-line bg-paper p-3 leading-relaxed"
              />
            </div>
          </div>
        </main>

        <section className="mt-16 max-w-xl" aria-labelledby="how">
          <h2 id="how" className="font-serif text-2xl font-semibold">
            Qarğa dili necə işləyir?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Qarğa dilində hər saitdən (a, ı, o, u, e, ə, i, ö, ü) sonra “ba”
            və ya “ga” kimi bir hece əlavə olunur. Əlavə hecanın saiti sözün
            səsinə uyğunlaşır: qalın saitdən sonra “ba”, incə saitdən sonra
            “bə” gəlir.
          </p>
          <ul className="mt-4 space-y-1 text-muted">
            <li>
              Salam → <span className="text-ink">Sabalabam</span>
            </li>
            <li>
              Necəsən? → <span className="text-ink">Nebəcəbəsəbən?</span>
            </li>
          </ul>
          <h2 className="mt-8 font-serif text-2xl font-semibold">
            Qarğa dilindən Azərbaycancaya necə çevirmək olar?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Ortadakı oxa basıb istiqaməti dəyişin, Qarğa dilindəki mətni
            yapışdırın və eyni variantı (ba, ga və ya öz hecanızı) seçin.
            Əlavə hecalar silinəcək və normal mətn görünəcək.
          </p>
        </section>

        <footer className="mt-16 border-t border-line pt-6 text-sm text-muted">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              Hazırlayan:{" "}
              <a
                href="https://github.com/imrashidov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-4"
              >
                Farid Rashidov
              </a>
            </span>
            <a
              href="https://github.com/imrashidov/qarga-dili-generator/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-ink"
            >
              Xəta bildir
            </a>
            <a
              href="https://www.buymeacoffee.com/imrashidov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-ink"
            >
              Qəhvə ısmarla
            </a>
          </div>
        </footer>
      </div>
      {supporters.length > 0 && (
        <section
          aria-label="Mənə qəhvə ısmarlayanlar"
          className="fixed inset-x-0 bottom-0 z-10 flex w-full items-center overflow-hidden border-t border-line bg-surface py-3 text-sm"
        >
          <span className="flex shrink-0 items-center gap-2 bg-surface px-4 font-medium text-ink">
            <Image
              src="/images/bmc-logo.svg"
              alt=""
              width={35}
              height={50}
              unoptimized
              className="h-7 w-auto rounded bg-white px-1 py-0.5"
            />
            Qəhvə ısmarlayanlar:
          </span>
          <div className="marquee-mask min-w-0 flex-1 overflow-hidden">
            <div className="marquee-track flex w-max text-muted">
              {[0, 1].map((n) => (
                <ul
                  key={n}
                  aria-hidden={n === 1}
                  className="flex shrink-0 items-center"
                >
                  {Array.from({ length: 6 }, () => supporters)
                    .flat()
                    .map((name, i) => (
                      <li key={i} className="whitespace-nowrap px-6">
                        {name}
                      </li>
                    ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
