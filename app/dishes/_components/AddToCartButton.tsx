"use client";
import { Button } from "@/components/ui/button";
import { Store } from "lucide-react";
import { useCallback } from "react";
interface Props {
  id: string;
}
const AddToCartButton = ({ id }: Props) => {
  const handelAddToCart = useCallback(() => {
    console.log(id);
  }, [id]);
  return (
    <Button
      variant="ghost"
      className="rounded-full absolute top-3 right-3 isolate z-999"
      size="icon-lg"
      onClick={handelAddToCart}
    >
      <Store />
    </Button>
  );
};

export default AddToCartButton;
