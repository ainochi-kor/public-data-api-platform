import { useRouter } from "next/router";
import Button from "../Button";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full h-13 flex justify-between items-center p-2 border-b-2 border-b-blue-200">
      <Button
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </Button>

      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        Go Home
      </Button>
      <Button
        onClick={() => {
          if (router.forward) {
            router.forward();
          }
        }}
      >
        Go Forward
      </Button>
    </div>
  );
};

export default Header;
