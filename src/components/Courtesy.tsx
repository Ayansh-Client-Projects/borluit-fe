import { RiExternalLinkLine } from "react-icons/ri";
function Courtesy() {
  return (
    <div className="flex w-full items-center justify-center py-3">
      Carefullly crafted by{" "}
      <a
        href="https://embraystechnologies.com/?ref=borluitte"
        target="_blank"
        className="bg-neonbg ml-2 flex items-center justify-center rounded-md px-2 text-black"
      >
        Embrays Technologies <RiExternalLinkLine className="ml-1" />
      </a>
    </div>
  );
}

export default Courtesy;
