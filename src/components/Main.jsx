import bellSVG from "../../public/bell.svg";
import Image from "next/image";

function Ring({ children, ...props }) {
  return (
    <div
      className={`${props.className} rounded-full p-px bg-gradient-to-b from-[#CE722C] to-[#5E181A]`}
    >
      <div className={"bg-black rounded-full p-4"}>{children}</div>
    </div>
  );
}

export default function Main() {
  return (
    <Ring className="motion-safe:animate-pulse">
      <Ring>
        <Ring>
          <Ring>
            <div
              className={
                "rounded-full p-3 bg-gradient-to-t from-[#9D0D3D00] from-[-23%] via-[#DF512BC2] via-[45%] to-[#BF8C2C] to-[103%]"
              }
            >
              <Image src={bellSVG} alt="Bell icon" />
            </div>
          </Ring>
        </Ring>
      </Ring>
    </Ring>
  );
}
