import { useInfiniteQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance"

//2) useInfiniteQuery: 무한 페이지 로딩
// const useFetch = (url) => {
//     const fetchData = async ({pageParam = 1}) => {
//         if (url) {
//             const response = await axiosInstance.get(url, {
//                 params: {
//                     page: pageParam
//                 },
//             });
//             return response.data;
//         } else {
//             console.log("url 없음")
//         }
//     };

//     const {
//         data,
//         isLoading,
//         isError,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//     } = useInfiniteQuery({
//         queryKey: ["fetchData", url],
//         queryFn: fetchData,
//         getNextPageParam: (lastPage) => {
//             console.log("lastPage: ", lastPage);
//             const nextPage = lastPage.page + 1; // 다음 페이지 계산
//             return nextPage <= lastPage.total_pages ? nextPage : undefined; // 총 페이지 수와 비교
//         },
//         retry: 1,
//     });

//     return {
//         data,
//         isLoading,
//         isError,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//     };

// };

//2) Pagination
const useFetch = (url="", page=1, genreId=null) => {
    const fetchData = async () => {
        if (url) {
            const response = await axiosInstance.get(url, {
                params: {
                    page,
                    genreId,
                },
            });
            return {
                data: response.data.results || response.data,
                totalPages: response.data.total_pages,
            };
        } else {
            console.log("url 없음")
        }
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ["fetchData", url, page],
        queryFn: fetchData,
        enabled: !!url || !url,
        retry: 1,
    });

    return { data: data?.data, totalPages: data?.totalPages, isLoading, error };
        
}

export default useFetch;