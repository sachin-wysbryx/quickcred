"use server";

import { db } from "../../db";
import { revalidatePath } from "next/cache";

export async function deactivateCustomer(customerId: string) {
    await db.customer.update({
        where: { id: customerId },
        data: {
            isActive: false
        }
    });

    revalidatePath("/customers");
    revalidatePath("/dashboard");
}
