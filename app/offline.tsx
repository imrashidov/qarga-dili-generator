"use client";

import { useEffect, useState } from "react";

export default function Offline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md mx-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {isOnline ? "Yenidən onlaynsınız!" : "İnternet bağlantısı yoxdur"}
        </h1>
        <p className="text-gray-600 mb-4">
          {isOnline
            ? "Əsas səhifəyə qayıtmaq üçün aşağıdakı düyməni basın."
            : "Zəhmət olmasa internet bağlantınızı yoxlayın və yenidən cəhd edin."}
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          {isOnline ? "Əsas səhifəyə qayıt" : "Yenilə"}
        </button>
      </div>
    </div>
  );
}
