interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
}
export default function Button(props: Props) {
  return (
    <button
      className={`bg-black border-2 border-black px-3 py-2 text-white hover:bg-zinc-800
    ${
      props.type === "secondary" &&
      "bg-white border-2 border-black px-3 py-2 text-red-950 hover:text-white"
    }
    ${props.className}`}
    >
      {props.text}
    </button>
  );
}
