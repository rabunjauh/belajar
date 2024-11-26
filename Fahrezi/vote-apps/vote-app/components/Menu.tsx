import Button from "./Button";

export default function Menu() {
  return (
    <div className="flex justify-between py-3">
      {/* Image menu logo */}
      <h1 className="text-2xl font-bold">Jujurly</h1>
      <Button text="Login" />
    </div>
  );
}
