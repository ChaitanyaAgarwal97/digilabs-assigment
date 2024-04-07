import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div
      className={
        "flex justify-evenly items-center flex-col h-screen w-full lg:w-1/3 mx-auto px-1"
      }
    >
      <Heading />
      <Main />
      <Button>Send Notifications</Button>
    </div>
  );
}
