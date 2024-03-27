import { useQuery } from "react-query";
// import ExamList from "../../repositories/examlist";
import http from "@utils/api/http";

const fetchExamTaken = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const {
    page,
    text,
    limit = 15,
    orderBy = "updated_at",
    sortedBy = "DESC",
  } = params;
  const url = `examtaken?search=${text}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;
  const {
    data: { data, ...rest },
  } = await http.get(url);
  return { data, ...rest };
};

const useExamTakenQuery = (options) => {
  return useQuery(["examlist", options], fetchExamTaken, {
    keepPreviousData: true,
  });
};

export { useExamTakenQuery, fetchExamTaken };
