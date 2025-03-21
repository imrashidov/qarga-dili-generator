import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 text-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-100">
            404
          </h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-800 dark:text-gray-100">
            Səhifə tapılmadı
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Axtardığınız səhifə mövcud deyil və ya başqa ünvana köçürülüb.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Ana səhifəyə qayıt
          </Link>
        </div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Qarğa Dili Generator - Əyləncəli dil oyunu
        </div>
      </div>
    </div>
  );
}
