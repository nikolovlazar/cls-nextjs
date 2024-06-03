import { Separator } from "@/components/ui/separator";
import { wait } from "@/lib/utils";

export const OrderDetails = async () => {
  await wait(1500);
  return (
    <div className="grid gap-3">
      <div className="font-semibold">Order Details</div>
      <ul className="grid gap-3">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Glimmer Lamps x <span>2</span>
          </span>
          <span>$250.00</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Aqua Filters x <span>1</span>
          </span>
          <span>$49.00</span>
        </li>
      </ul>
      <Separator className="my-2" />
      <ul className="grid gap-3">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>$299.00</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>$5.00</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>$25.00</span>
        </li>
        <li className="flex items-center justify-between font-semibold">
          <span className="text-muted-foreground">Total</span>
          <span>$329.00</span>
        </li>
      </ul>
    </div>
  );
};
