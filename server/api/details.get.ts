import { createClient } from "@supabase/supabase-js";
import { Database } from "~/libs/database.types";
import { useValidatedQuery, z } from "h3-zod";

export default defineEventHandler(async (event) => {
  const query = await useValidatedQuery(
    event,
    z.object({
      first_name: z.string(),
      last_name: z.string().optional(),
      email: z.string().email(),
    }),
  );

  const client = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );
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
