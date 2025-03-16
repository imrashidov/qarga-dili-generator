import Link from "next/link";

const BuyMeACoffee = () => {
  return (
    <Link
      href="https://www.buymeacoffee.com/imrashidov"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-black dark:text-black dark:hover:text-black text-sm font-medium fixed bottom-2 right-2 bg-amber-600 dark:bg-amber-400 px-2 py-1 rounded-sm flex items-center justify-center"
    >
      🐦‍⬛ Qarğa al
    </Link>
  );
};

export default BuyMeACoffee;
