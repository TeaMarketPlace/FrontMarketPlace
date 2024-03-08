import Sidebar from "@/components/Sidebar/Sidebar";

export const Main = () => {
  return (
    <div className="mx-auto px-8 flex  gap-5">
      <Sidebar />
      <div className="w-1/2">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aliquam maiores blanditiis nemo mollitia fugit cumque pariatur eius
          nam! Maxime laborum perspiciatis dolorum eligendi odio blanditiis
          error alias aliquid quo.
        </span>
      </div>
    </div>
  );
};
