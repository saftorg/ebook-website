import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/libs/database.types";
import { useValidatedQuery, z } from "h3-zod";

export default defineEventHandler(async (event) => {
  const query = await useValidatedQuery(
    event,
    z.object({ name: z.string(), email: z.string().email() }),
  );
  const client = serverSupabaseClient<Database>(event);
  const { error } = await client.from("submissions").insert([query]).select();

  if (error) {
    console.error(error);
    throw createError(JSON.stringify(error, null, 2));
  }

  return sendRedirect(event, "/thank-you", 302);
});
