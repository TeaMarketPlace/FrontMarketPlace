import ProductCard from "@/components/ProductCard/ProductCard";
import Sidebar from "@/components/Sidebar/Sidebar";

export const Main = () => {
  return (
    <div className="mx-auto px-8 flex  gap-5">
      <Sidebar />
      <div className="w-1/2">
        <ProductCard />
      </div>
    </div>
  );
};
