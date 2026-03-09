"use server";

import { db } from "../db";
import { revalidatePath } from "next/cache";

export async function createCustomer(formData: FormData) {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    if (!name || !phone) {
        throw new Error("Name and phone are required");
    }

    const customer = await db.customer.create({
        data: {
            name,
            phone,
            address,
        },
    });

    revalidatePath("/customers");
    revalidatePath("/dashboard");
}
