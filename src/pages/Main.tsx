import Sidebar from "@/components/Sidebar/Sidebar";

export const Main = () => {
  return (
    <div className="mx-auto px-8 bg-white flex">
      <Sidebar />
      <div>
        <svg width={43} height={43} className="fill-black">
          <use xlinkHref={`./icon-sprite.svg#heart`} />
        </svg>
      </div>
    </div>
  );
};
