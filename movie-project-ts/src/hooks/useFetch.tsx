import { useInfiniteQuery, QueryFunctionContext, InfiniteData } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

interface PaginatedResponse<T> {
  page: number;
  total_pages: number;
  results: T[];
}

interface UseFetchReturn<T> {
  data: InfiniteData<PaginatedResponse<T>> | undefined;
  isLoading: boolean;
  isError: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
}

const useFetch = <T,>(url: string | undefined): UseFetchReturn<T> => {
  const fetchData = async ({
    pageParam = 1,
  }: QueryFunctionContext<[string | undefined]>) => {
    if (!url) {
      throw new Error("URL is missing");
    }

    const response = await axiosInstance.get<PaginatedResponse<T>>(url, {
      params: {
        page: pageParam,
      },
    });

    return response.data;
  };

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<PaginatedResponse<T>, Error>({
    queryKey: ["fetchData", url],
    queryFn: fetchData, // Properly typed fetch function
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
    retry: 1,
  });

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useFetch;
