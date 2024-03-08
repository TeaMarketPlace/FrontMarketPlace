import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductImage from "@/image/product.png";
import { Button } from "../ui/button";

const ProductCard = () => {
  return (
    <div className="container mx-auto my-10 ">
      <Card className="w-[178px]">
        <CardHeader className="relative p-0">
          <div className=" bg-[#f2f2f2] rounded-[10px] flex justify-center items-center  overflow-hidden">
            <img
              src={ProductImage}
              alt="Product Image"
              className="object-cover object-center px-[49px] py-[35px]"
            />
          </div>
          <div className="absolute left-[8px] m-h-[18px] bg-[#0c62b1] rounded-[20px]  px-[6px] py-[2px] text-white text-[12px] font-normal">
            знижка
          </div>
          <div className="absolute ] right-[8px] m-h-[18px] bg-white rounded-[20px]  px-[6px] py-[2px] text-black text-[12px] font-normal border-[0.5px] border-[#a2a2a2]">
            техніка
          </div>
        </CardHeader>
        <CardContent className="flex mt-[6px] pl-2 pr-[10px] pb-0 mb-[5px]  items-start">
          <CardTitle className="text-[12px] font-bold text-foreground text-start">
            Apple iPhone 11 64GB Black 
          </CardTitle>
          <svg
            width={20}
            height={20}
            className="stroke-foreground fill-foreground"
          >
            <use xlinkHref={`./icon-sprite.svg#heart-card`} />
          </svg>
        </CardContent>
        <CardFooter className="px-2 pb-[11px] items-end justify-between">
          <Button className="bg-foreground text-background py-[5px] px-[23px] rounded-full font-normal text-[12px] max-h-6">
            Купити
          </Button>

          <div className="">
            <p className="text-[12px] font-[300] text-muted-secondary text-start line-through leading-[14px] text-end">
              19 500 ₴
            </p>
            <p className="text-[14px] font-bold text-foreground text-start leading-4 text-end">
              21 999 ₴
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
