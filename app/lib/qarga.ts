const HARD_VOWELS = "aıouAIOU";
const SOFT_VOWELS = "eəiöüEƏİÖÜ";
const CONSONANTS = "bcçdfgğhjkxlmnpqrsştvyzBCÇDFGĞHJKXLMNPQRSŞTVYZ";

const TO_SOFT: Record<string, string> = { a: "ə", o: "ö", u: "ü", ı: "i" };
const TO_HARD: Record<string, string> = { ə: "a", e: "a", ö: "o", ü: "u", i: "ı" };

export const DEFAULT_SUFFIX = "ba";

const isHardVowel = (c: string) => HARD_VOWELS.includes(c);
const isSoftVowel = (c: string) => SOFT_VOWELS.includes(c);
const isVowel = (c: string) => isHardVowel(c) || isSoftVowel(c);
const isConsonant = (c: string) => CONSONANTS.includes(c);

const isUpper = (c: string | undefined) =>
  !!c && c !== c.toLocaleLowerCase("az") && c === c.toLocaleUpperCase("az");

/** Əlavəni saitin qalınlığına/incəliyinə uyğunlaşdırır (səs uyğunluğu). */
function harmonize(suffix: string, soft: boolean): string {
  if (suffix.length === 1 && isConsonant(suffix)) {
    return suffix + (soft ? "ə" : "a");
  }
  const map = soft ? TO_SOFT : TO_HARD;
  return Array.from(suffix, (c) => map[c] ?? c).join("");
}

export function convertToQarga(text: string, rawSuffix: string): string {
  const suffix = rawSuffix.replace(/\s+/g, "") || DEFAULT_SUFFIX;
  const chars = Array.from(text);

  let result = "";
  chars.forEach((char, i) => {
    result += char;
    if (!isVowel(char)) return;

    let extra = harmonize(suffix, isSoftVowel(char));
    // Böyük hərflə yazılmış sözdə (SALAM) əlavə də böyük olsun
    if (isUpper(char) && (isUpper(chars[i - 1]) || isUpper(chars[i + 1]))) {
      extra = extra.toLocaleUpperCase("az");
    }
    result += extra;
  });
  return result;
}

/** Qarğa dilindəki mətni geri, normal Azərbaycan dilinə çevirir. */
export function convertFromQarga(text: string, rawSuffix: string): string {
  const suffix = rawSuffix.replace(/\s+/g, "") || DEFAULT_SUFFIX;
  const lower = (s: string) => s.toLocaleLowerCase("az");
  const chars = Array.from(text);

  let result = "";
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    result += char;
    if (!isVowel(char)) continue;

    const expected = Array.from(harmonize(suffix, isSoftVowel(char)));
    const candidate = chars.slice(i + 1, i + 1 + expected.length);
    if (
      candidate.length === expected.length &&
      lower(candidate.join("")) === lower(expected.join(""))
    ) {
      i += expected.length;
    }
  }
  return result;
}
