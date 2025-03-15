"use client";

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [suffix, setSuffix] = useState("ba");
  const [customInput, setCustomInput] = useState("");

  const isConsonant = (char: string): boolean => {
    if (!char || char.length !== 1) return false;
    const consonants = "bcçdfgğhjklmnpqrsştvxyzBCÇDFGĞHJKLMNPQRSŞTVXYZ";
    return consonants.includes(char);
  };

  const completeConsonant = (
    consonant: string,
    isHardVowel: boolean = true
  ): string => {
    return isHardVowel ? consonant + "a" : consonant + "ə";
  };

  const handleSuffixChange = (value: string) => {
    setCustomInput(value);
    setSuffix(value);
  };

  const convertToQargaDili = () => {
    if (!inputText) return;

    const hardVowels = ["a", "o", "u", "A", "O", "U"];
    const softVowels = ["e", "ə", "i", "ö", "ü", "E", "Ə", "İ", "Ö", "Ü"];
    const allVowels = [...hardVowels, ...softVowels];

    const getSoftSuffix = (sfx: string): string => {
      return sfx.replace(/a/g, "ə");
    };

    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      result += inputText[i];

      if (allVowels.includes(inputText[i])) {
        let currentSuffix = suffix;

        if (currentSuffix.length === 1 && isConsonant(currentSuffix)) {
          currentSuffix = softVowels.includes(inputText[i])
            ? completeConsonant(currentSuffix, false)
            : completeConsonant(currentSuffix, true);
        } else if (softVowels.includes(inputText[i])) {
          currentSuffix = getSoftSuffix(currentSuffix);
        }

        result += currentSuffix;
      }
    }

    setOutputText(result);
  };

  const handleVariantSelect = (variant: string) => {
    setSuffix(variant);
    setCustomInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black dark:from-black dark:to-gray-900 p-6 flex flex-col items-center">
      <header className="my-8 text-center">
        <h1 className="text-4xl font-bold text-amber-500 dark:text-amber-400 mb-2">
          Qarğa Dili Generator 🐦‍⬛
        </h1>
        <p className="text-gray-300 dark:text-gray-400 max-w-md mx-auto">
          Qarğa dili hər saitdən sonra seçilmiş hecayı əlavə edən əyləncəli bir
          dil oyunudur.
        </p>
      </header>

      <main className="w-full max-w-2xl bg-gray-900 dark:bg-black rounded-lg shadow-xl p-6 md:p-8 border border-gray-700">
        <div className="mb-6">
          <label
            htmlFor="suffix"
            className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2"
          >
            Hansı variantı istifadə etmək istərdiniz?
          </label>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => handleVariantSelect("ba")}
              className={`px-4 py-2 rounded-full text-sm ${
                suffix === "ba" && customInput === ""
                  ? "bg-amber-600 text-white"
                  : "bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-300"
              }`}
            >
              &quot;ba/bə&quot; variantı
            </button>
            <button
              onClick={() => handleVariantSelect("ga")}
              className={`px-4 py-2 rounded-full text-sm ${
                suffix === "ga" && customInput === ""
                  ? "bg-amber-600 text-white"
                  : "bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-300"
              }`}
            >
              &quot;ga/gə&quot; variantı
            </button>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Öz variantınız..."
                  className="px-4 py-2 rounded-full text-sm bg-gray-800 dark:bg-gray-900 text-gray-200 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={customInput}
                  onChange={(e) => handleSuffixChange(e.target.value)}
                  maxLength={5}
                />
              </div>
              {customInput && (
                <button
                  onClick={() => {
                    setCustomInput("");
                    handleVariantSelect("ba");
                  }}
                  className="px-2 py-2 rounded-full bg-gray-700 dark:bg-gray-800 text-gray-200 dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
                  title="Öz variantı sil"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="input-text"
            className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2"
          >
            Normal mətn daxil edin:
          </label>
          <textarea
            id="input-text"
            className="w-full p-3 border border-gray-600 dark:border-gray-700 rounded-lg bg-gray-800 dark:bg-gray-900 text-gray-200 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[120px]"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Məsələn: Salam, necəsən?"
          />
        </div>

        <button
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          onClick={convertToQargaDili}
        >
          Çevir
        </button>

        {outputText && (
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-200 dark:text-gray-300 mb-2">
              Qarğa dilində nəticə:
            </h2>
            <div className="p-4 bg-gray-800/50 dark:bg-black/50 rounded-lg border border-gray-700">
              <p className="text-gray-200 dark:text-gray-300 whitespace-pre-wrap">
                {outputText}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="text-amber-500 hover:text-amber-400 dark:text-amber-400 dark:hover:text-amber-300 text-sm font-medium"
                onClick={() => {
                  navigator.clipboard.writeText(outputText);
                }}
              >
                Kopyala
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-8 text-center text-gray-400 dark:text-gray-500 text-sm">
        <p>Qarğa Dili Generator &copy; {new Date().getFullYear()}</p>
        <p>
          Powered by{" "}
          <a
            href="https://github.com/imrashidov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400 dark:text-amber-400 dark:hover:text-amber-300"
          >
            Farid Rashidov
          </a>
        </p>
      </footer>
    </div>
  );
}
