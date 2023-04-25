import React from "react";
import {useQuery} from "react-query";

const useGetFilm = (url) => {
    const {data} = useQuery(["film", url], () =>
        fetch(url).then(res => res.json())
    );
    return {data};
};

const FilmPAge = ({url}) => {
    const {data} = useGetFilm(url);

    return (
        <div>
            <h1>{data?.title}</h1>
            <span>
                <strong>episode: </strong>
                {data?.episode_id}
            </span>
            <strong>description:</strong>
            <p>{data?.opening_crawl}</p>
        </div>
    );
};

export default FilmPAge;