import React from "react";
import {useQuery, useQueryClient} from "react-query";

const FilmPAge = ({url}) => {

    const {data, isLoading, isFetching} = useGetFilm(url);

    return isLoading
        ? <div>"Загрузка..."</div>
        :
        <>
            <div>
                <h1>{data?.title}</h1>
                <span>
                <strong>episode: </strong>
                    {data?.episode_id}
            </span>
                <strong>description:</strong>
                <p>{data?.opening_crawl}</p>
            </div>
            {isFetching ? "Обновление..." : null}
        </>;
};

export default FilmPAge;