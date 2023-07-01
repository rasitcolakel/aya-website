import { wrapper } from "../_shared/wrapper.ts";
import {
  type PeopleListResult,
  type ProfileList,
} from "@types/people-list-result.ts";

wrapper(async (_req, { supabase }) => {
  const profileQueryResponse = await supabase
    .from("Profile")
    .select("*")
    .eq("type", "Individual")
    .is("deletedAt", null);

  const result: PeopleListResult = {
    payload: profileQueryResponse.data as ProfileList,
  };

  return result;
});
