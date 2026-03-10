"use server";

import { db } from "../../db";
import { revalidatePath } from "next/cache";

export async function reactivateCustomer(customerId: string) {
    await db.customer.update({
        where: { id: customerId },
        data: {
            isActive: true
        }
    });

    revalidatePath("/customers");
    revalidatePath("/dashboard");
}
