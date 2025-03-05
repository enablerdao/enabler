
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MotionBox } from "@/components/ui/motion-box";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full">
        <MotionBox>
          <div className="text-center">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <div className="mt-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">ページが見つかりません</h2>
              <p className="text-gray-600">
                アクセスされたページは存在しないか、移動された可能性があります。
              </p>
            </div>
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-enabler-600 text-white font-medium transition-all duration-200 hover:bg-enabler-700 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              ホームに戻る
            </a>
          </div>
        </MotionBox>
      </div>
    </div>
  );
};

export default NotFound;
