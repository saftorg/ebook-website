import { useValidatedQuery, z } from "h3-zod";
import { Database } from "../../libs/database.types";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const query = await useValidatedQuery(event, z.object({ id: z.string() }));
  const client = serverSupabaseClient<Database>(event);

  const { data, error } = await client
    .from("active_download_users")
    .select()
    .eq("uid", query.id);

  if (error || data === null || data.length === 0) {
    throw createError({
      statusCode: 400,
      message:
        "Data does not exist. Either your link has expired or it is invalid.",
      stack: undefined,
    });
  }

  await client.from("active_download_users").delete().eq("uid", query.id);

  return sendRedirect(
    event,
    "https://drive.google.com/uc?export=download&id=1PpWjUhe4SSeII5uusm5gAE60YPfFbw3B",
    302,
  );
});
