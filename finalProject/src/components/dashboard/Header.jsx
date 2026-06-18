import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className="h-14 bg-white border-b border-border flex items-center justify-end px-6 shrink-0">
      <UserMenu />
    </header>
  );
}
