import { serverSupabaseClient } from "#supabase/server";
import { Database } from "~/libs/database.types";
import { useValidatedQuery, z } from "h3-zod";

export default defineEventHandler(async (event) => {
  const query = await useValidatedQuery(
    event,
    z.object({ name: z.string(), email: z.string().email() }),
  );
  const client = serverSupabaseClient<Database>(event);
  const { data, error: submissionsError } = await client
    .from("submissions")
    .insert([query])
    .select();

  if (submissionsError) {
    console.error(submissionsError);
    throw createError(JSON.stringify(submissionsError, null, 2));
  }

  const { error: activeDownloadUsersError } = await client
    .from("active_download_users")
    .insert([{ submission_id: data[0].id }]);

  if (!!activeDownloadUsersError) {
    console.error(submissionsError);
    throw createError(JSON.stringify(submissionsError, null, 2));
  }

  return sendRedirect(event, "/thank-you", 302);
});
