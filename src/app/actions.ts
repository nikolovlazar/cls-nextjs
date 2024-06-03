"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const dismissDiscoverOrders = async () => {
  const cookieStore = cookies();
  ("use server");
  cookieStore.set("dismissedDiscoverOrders", "true");
  revalidatePath("/");
};
