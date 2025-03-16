export default function Offline() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md mx-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          İnternet bağlantısı yoxdur
        </h1>
        <p className="text-gray-600 mb-4">
          Zəhmət olmasa internet bağlantınızı yoxlayın və yenidən cəhd edin.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Yenilə
        </button>
      </div>
    </div>
  );
}
