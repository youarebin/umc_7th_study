import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance"

//2) Pagination
const useFetch = (url, page=1) => {
    const fetchData = async () => {
        if (url) {
            const response = await axiosInstance.get(url, {
                params: {
                    page: page
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