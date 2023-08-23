export default function Footer() {
  let currentDate = new Date();
  return (
    <footer>
      <p>
        Built by{" "}
        <a href="https://www.linkedin.com/in/mustafa-mustafa-ba2119106/">
          Mustafa
        </a>
        {" ©" + currentDate.getFullYear()}
      </p>
    </footer>
  );
}
