import { useValidatedQuery, z } from "h3-zod";
import { Database } from "../../libs/database.types";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const query = await useValidatedQuery(event, z.object({ id: z.string() }));
  const client = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );

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
