"use client";
import { Button } from "@/components/ui/button";
import { Order } from "@/data/orders";
import { useLocaleStorage } from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";
import { Check, Edit, Pizza, Timer, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
const EditingForm = dynamic(() => import(".").then((mod) => mod.EditingForm));
const CartDropdown = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (open && e.key === "Escape") setOpen(false);
    });
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const { getItem, data } = useLocaleStorage();

  // useEffect(() => {
  //   localStorage.setItem(
  //     "cartList",
  //     JSON.stringify([
  //       {
  //         date: new Date("2025 10 4"),
  //         price: 20,
  //         isCanceled: false,
  //         isCompleted: true,
  //         title: "Order 1",
  //         orderId: "asdasdasdas",
  //       },
  //       {
  //         date: new Date("2022 3 1"),
  //         price: 1040,
  //         isCanceled: true,
  //         isCompleted: false,
  //         title: "Order 2",
  //         orderId: "asdasdasd12125",
  //       },
  //     ]),
  //   );
  // }, []);
  return (
    <div className="relative">
      <Button
        onClick={() => setOpen(!open)}
        variant="borderBlack"
        size="icon-sm"
        className="rounded-full"
      >
        <span
          className={cn(
            !!parseInt(getItem("cart"))
              ? "absolute size-5 flex justify-center items-center bg-orange-400 rounded-2xl -top-2.5 -right-2"
              : "hidden",
          )}
        >
          {data?.cart}
        </span>
        <Pizza />
      </Button>
      {open ? (
        <div className="absolute top-14 sm:left-[-30svh] -left-[45vw] sm:w-[60svh] w-[90vw] bg-orange-50 border border-2 border-black p-2 z-100 rounded-md max-h-96">
          <Button onClick={() => setOpen(!open)} size="icon" asChild>
            <X className="absolute right-2" size={14} />
          </Button>
          <h4 className="font-semibold mt-4">Order List</h4>
          {!getItem("cartList") ? (
            <h4>No Items In Your Cart</h4>
          ) : (
            <>
              <div className="flex flex-col gap-1 mt-5">
                {(getItem("cartList") as Order[]).map((order) => (
                  <CartItem {...order} />
                ))}
              </div>
              <Button variant="orange" className="float-end mt-3" asChild>
                <Link href={{ pathname: "/cart" }}>
                  View Your All Cart Items
                </Link>
              </Button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

function CartItem({
  date,
  isCanceled,
  isCompleted,
  orderId,
  price,
  title,
}: Order) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <section className="flex flex-col gap-1 border-2 border-black rounded-sm p-2 mt-1 mx-1">
      {!isEdit ? (
        <>
          <div className="flex justify-between items-center">
            <h5>{title} Order Pizza small size</h5>
            <div
              className={cn(
                isCanceled ? "bg-red-500" : isCompleted ? "bg-green-600" : "",
                "px-3 py-1.5 rounded-lg text-white text-sm u",
              )}
            >
              {isCanceled
                ? "Canceled Order"
                : isCompleted
                  ? "Completed Order"
                  : ""}
            </div>
          </div>
          <div className="flex items-center gap-1 justify-between ">
            <div className="flex flex-col gap-1">
              <span>{price} $</span>
              <div title={date?.toString()}>
                <Timer />
              </div>
            </div>
            {!isCanceled ? (
              <CartItemActions
                isEdit={isEdit}
                key={orderId}
                setIsEdit={setIsEdit}
                id={orderId}
              />
            ) : null}
          </div>
        </>
      ) : (
        <Suspense fallback={<>loading..</>}>
          <EditingForm setIsEdit={setIsEdit} orderId={orderId} />
        </Suspense>
      )}
    </section>
  );
}

function CartItemActions({
  id,
  isEdit,
  setIsEdit,
}: {
  id: string;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <section className="flex items-center gap-0.5">
      <Button size="icon-sm" variant="destructive" className="text-black">
        <X />
      </Button>
      <Button
        onClick={() => setIsEdit(!isEdit)}
        className="bg-yellow-400 hover:bg-yellow-500 text-black"
        size="icon-sm"
      >
        <Edit />
      </Button>
      <Button
        className="bg-green-400 hover:bg-green-500 text-black"
        size="icon-sm"
      >
        <Check />
      </Button>
    </section>
  );
}
CartDropdown.CartItem = CartItem;

CartItem.EditingForm = EditingForm;

export default CartDropdown;
