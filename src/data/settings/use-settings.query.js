import { useQuery } from "react-query";
import { CoreApi } from "@utils/api/core.api";
// import { API_ENDPOINTS } from "@utils/api/endpoints";
// import { useQuery } from "react-query";

const SettingsService = new CoreApi("settings");

export const fetchSettings = async () => {
  const { data } = await SettingsService.findAll();
  return { settings: data };
};

export const useSettingsQuery = () => {
  return useQuery({ queryKey: ["settings"], queryFn: fetchSettings });
  // return useQuery({"settings", fetchSettings});
};
