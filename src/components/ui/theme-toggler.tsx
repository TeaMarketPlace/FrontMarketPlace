import { useTheme } from "@/providers/theme-provider";

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();

  const onClickHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={onClickHandler} className="w-[45px] h-[45px] p-[7px] flex">
      <svg className="fill-transparent h-full dark:w-full w-0">
        <use xlinkHref={`./icon-sprite.svg#sun`} />
      </svg>

      <svg className="fill-transparent h-full w-full dark:w-0">
        <use xlinkHref={`./icon-sprite.svg#moon`} />
      </svg>
    </button>
  );
};

export default ThemeToggler;
