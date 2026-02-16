"use client";

import { borderColors } from "@/data/rates";
import { CartDropdown, Container } from "../home/components";
const Page = () => {
  console.log();

  return (
    <Container>
      {Object.keys(borderColors).map(() => (
        <CartDropdown.CartItem />
      ))}
    </Container>
  );
};

export default Page;
