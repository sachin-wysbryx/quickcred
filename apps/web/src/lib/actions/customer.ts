"use server";

import { db } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCustomer(formData: FormData) {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    if (!name || !phone) {
        throw new Error("Name and phone are required");
    }

    // FIX 5: Prevent New Customer Duplication
    const existingCustomer = await db.customer.findUnique({
        where: { phone }
    });

    if (existingCustomer) {
        throw new Error("Customer already exists. Please use the existing record.");
    }

    const customer = await db.customer.create({
        data: {
            name,
            phone,
            address,
            isActive: true,
        },
    });

    revalidatePath("/customers");
    revalidatePath("/dashboard");
}

export async function updateCustomer(id: string, formData: FormData) {
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    const existing = await db.customer.findFirst({
        where: {
            phone,
            id: { not: id }
        }
    });

    if (existing) {
        throw new Error("This phone number is already registered to another customer.");
    }

    await db.customer.update({
        where: { id },
        data: {
            phone,
            address,
        },
    });

    revalidatePath("/customers");
    revalidatePath("/dashboard");
    redirect("/customers");
}

export async function deleteCustomer(id: string) {
    const customer = await db.customer.findUnique({
        where: { id },
    });

    if (!customer) {
        throw new Error("Customer not found");
    }

    // Soft delete: Feature 1
    await db.customer.update({
        where: { id },
        data: {
            isActive: false
        }
    });

    revalidatePath("/customers");
    revalidatePath("/dashboard");
}
