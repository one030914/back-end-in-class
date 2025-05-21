"use server";

import { signIn, signOut } from "@/auth";

export async function signInAction(formData) {
    const provider = formData.get("provider");
    await signIn(provider);
}

export async function signOutAction() {
    await signOut();
}