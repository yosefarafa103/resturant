"use client";
import { Button } from "@/components/ui/button";
import { Order, orderList } from "@/data/orders";
import { useLocaleStorage } from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

const EditingForm = ({
  orderId,
  setIsEdit,
}: {
  orderId: string;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}) => {
  const order = useMemo(
    () => orderList.find((el) => el.orderId === orderId),
    [orderId]
  );
  const { updateItem, getItem } = useLocaleStorage();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const handelUpdate = useCallback(() => {
    const cartItems: Order[] = getItem("cartList");
    const currentObj = (getItem("cartList") as Order[]).find(
      (item) => item.orderId === orderId
    );
    currentObj!.price = +price;
    currentObj!.title = title;
    const idx = cartItems.findIndex((item) => item.orderId === orderId);
    updateItem("cartList", cartItems.with(idx, currentObj!));
    setIsEdit((prev) => !prev);
  }, [orderId, price, title]);

  return (
    <>
      <EditInput
        handelChangeFn={(e) => setTitle(e.target.value)}
        title={order?.title}
      />
      <EditInput
        handelChangeFn={(e) => setPrice(e.target.value)}
        type="number"
        title={order?.price.toString()}
      />
      <Button variant="orange" onClick={handelUpdate}>
        Save
      </Button>
    </>
  );
};
function EditInput({
  title,
  type = "text",
  handelChangeFn,
}: {
  title: string | undefined;
  type?: "text" | "number";
  handelChangeFn?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      defaultValue={title}
      onChange={handelChangeFn}
      className="border-2 border-orange-400 px-2 py-1 rounded-lg mt-1 w-full"
    />
  );
}
export default EditingForm;
