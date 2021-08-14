import React from "react";
import getAllPost from "../Packages/api/getAllPost";
import { useQuery } from "react-query";

const AllPost = () => {

    const { isLoading, isError, data, error } = useQuery('allPost', getAllPost);

    if(isLoading){
        return <p>Loading....</p>
    }
    if(isError){
        return <p>{error.message}</p>
    }
    return (
        <div className="h-screen">
            <p className="text-xl border-b border-gray-100">Post</p>
            <div className="overflow-scroll py-5">
                {data.map(item => {
                    return (
                    <div className="bg-gray-50 w-2/5 p-2 m-4 border border-gray-100 rounded-md shadow-sm cursor-pointer" >
                        <p>
                        Title:{" "}
                        <span className="overflow-ellipsis">{item.title}</span>
                        </p>
                        <p>
                        Body:{" "}
                        <span className="overflow-ellipsis">{item.body}</span>
                        </p>
                    </div>
                    );
                })}
            </div>
        </div>
    )
};
export default AllPost;
