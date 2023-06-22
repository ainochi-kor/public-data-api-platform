import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full h-13 flex justify-between items-center p-2 border-b-2 border-b-blue-200">
      <button
        className="bg-blue-200 text-blue-600 px-3 py-2 rounded-lg"
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </button>

      <button
        className="bg-blue-200 text-blue-600 px-3 py-2 rounded-lg"
        onClick={() => {
          router.push("/");
        }}
      >
        Go Home
      </button>
      <button
        className="bg-blue-200 text-blue-600 px-3 py-2 rounded-lg"
        onClick={() => {
          if (router.forward) {
            router.forward();
          }
        }}
      >
        Go Forward
      </button>
    </div>
  );
};

export default Header;
