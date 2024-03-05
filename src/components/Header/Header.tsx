import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ThemeToggler from "../ui/theme-toggler";

export const Header = () => {
  // handler for searching
  const handleSearch = () => {};

  const menuLinks: { iconPath: string; href: string }[] = [
    {
      href: "/basket",
      iconPath: "basket",
    },
    {
      href: "/favourite",
      iconPath: "heart",
    },
    {
      href: "/message",
      iconPath: "emaill",
    },
  ];

  return (
    <header className="flex items-center justify-between w-full mb-5">
      {/* Logo */}
      <Link
        to={"/"}
        className="text-secondary font-bold text-[40px] font-inter"
      >
        choice<span className="text-primary">.</span>
      </Link>

      {/* Searchbar */}
      <div className="flex items-center h-[40px] gap-[18px]">
        <div className="border-b-secondary border-b-[1px] text-muted py-[4px] w-[304px] flex items-center gap-1">
          <svg width={25} height={25} className="fill-secondary">
            <use xlinkHref={`./icon-sprite.svg#search`} />
          </svg>
          <input
            placeholder="Пошук..."
            className="w-full outline-none placeholder:text-muted bg-transparent"
            type="text"
          />
        </div>
        <Button onClick={handleSearch} className="rounded-[25px]">
          <svg width={"18px"} height={"11px"}>
            <use xlinkHref={`./icon-sprite.svg#search-arrow`} />
          </svg>
        </Button>
      </div>

      {/* Actions */}
      <nav className="flex gap-[20px] items-center">
        {menuLinks.map((m, i) => (
          <Link className="w-[43px] h-[43px]" key={i + m.href} to={m.href}>
            <svg className="fill-transparent h-full w-full">
              <use xlinkHref={`./icon-sprite.svg#${m.iconPath}`} />
            </svg>
          </Link>
        ))}

        <Button className="rounded-2xl">
          <Link className="" to={"/mail"}>
            Log in
          </Link>
        </Button>

        <ThemeToggler />
      </nav>
    </header>
  );
};
