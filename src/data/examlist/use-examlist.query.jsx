import { useQuery } from "react-query";
// import ExamList from "../../repositories/examlist";
import http from "@utils/api/http";

const fetchExamlist = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const {
    page,
    text,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params;
  const url = `examlist?search=${text}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await http.get(url);
  return { examlist: { data, ...rest } };
};

const useExamlistQuery = (options) => {
  return useQuery(["examlist", options], fetchExamlist, {
    keepPreviousData: true,
  });
};

export { useExamlistQuery, fetchExamlist };
