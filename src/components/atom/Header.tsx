import Link from "next/link";

function Header() {
  return (
    <div className="bg-yellow-400">
      <div className="flex items-center p-4">
        <Link href="/" className="no-underline">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-24 h-auto"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
