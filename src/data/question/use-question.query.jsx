// import { useQuery } from "react-query";
// import http from "@utils/api/http";
// const fetchQuestion = async ({ queryKey }) => {
//   const [_key, params] = queryKey;
//   const {
//     page,
//     text,
//     questionId,
//     limit = 15,
//     orderBy = "question_no",
//     sortedBy = "ASC",
//   } = params;
//   const url = `question?search=${text}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}&question_id=${questionId}`;
//   const {
//     data: { data, ...rest },
//   } = await http.get(url);
//   return { question: { data, ...rest } };
// };

// const useQuestionQuery = (options) => {
//   return useQuery(["question", options], fetchQuestion, {
//     keepPreviousData: true,
//   });
// };

// export { useQuestionQuery, fetchQuestion };

import { CoreApi, ParamsType } from "@utils/api/core.api";
import { useInfiniteQuery } from "react-query";
import { mapPaginatorData } from "@utils/data-mappers";

const QuestionService = new CoreApi("question");

const fetchQuestion = async ({ queryKey, pageParam }) => {
  const [_key, params] = queryKey;
  let fetchedData = {};
  if (pageParam) {
    const response = await QuestionService.fetchUrl(pageParam);
    fetchedData = response.data;
  } else {
    const response = await QuestionService.find(params);
    fetchedData = response.data;
  }
  const { data, ...rest } = fetchedData;
  return { data, paginatorInfo: mapPaginatorData({ ...rest }) };
};

const useQuestionQuery = (params, options) => {
  return useInfiniteQuery(["question", params], fetchQuestion, {
    ...options,
    getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    staleTime: Infinity,
  });
};

export { useQuestionQuery, fetchQuestion };
