import Image from "next/image";

export default function About() {
  return (
    <div className="w-250 h-150 flex">
      <Image
        src="/toronto.jpg"
        alt="tronto"
        width={512}
        height={512}
        className="object-cover"
      />
    </div>
  );
}
