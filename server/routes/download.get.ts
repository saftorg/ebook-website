import { useValidatedQuery, z } from "h3-zod";
import { Database } from "../../libs/database.types";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const query = await useValidatedQuery(event, z.object({ id: z.string() }));
  const client = serverSupabaseClient<Database>(event);

  const { data, error } = await client
    .from("active_download_users")
    .select()
    .eq("submission_id", query.id);

  if (error || data === null || data.length === 0) {
    throw createError({
      statusCode: 400,
      message:
        "Data does not exist. Either your link has expired or it is invalid.",
    });
  }

  await client.from("active_download_users").delete().eq("id", data[0].id);

  return sendRedirect(
    event,
    "https://drive.google.com/uc?export=download&id=1xVzscEMQ68KvxpbfQdJoz4tQACmOHmG8",
    302,
  );
});
