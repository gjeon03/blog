"use server";

import { neon } from "@neondatabase/serverless";
import { unstable_noStore as noStore } from "next/cache";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  const rows = await sql("SELECT slug, count FROM views");

  return rows.map((row) => ({
    slug: row.slug,
    count: row.count,
  }));
}
