import React from "react";
import {useQuery} from "react-query";

const Films = () => {
    const {
        data: {results = []} = {},
        isLoading,
        isError,
        error,
        // теперь есть индикатор на экране когда данные обновляются
        isFetching,
    } = useQuery("key", async () => {
            return fetch("https://swapi.dev/api/films").then(res => res.json());
        },
        {
            // refetchOnWindowFocus: false
            // scaleTime: 6000, -- свежие данные 6 сек будут
            // scaleTime: Infinity -- данные всегда будут свежие(обновлять будем вречную)

        },
    );

    return (
        <div>
            {isLoading
                ? "Loading..."
                : isError
                    ? error.message
                    : results.map(film => {
                        return (
                            <div key={film.title}>
                                {film.title}
                            </div>);
                    })}
            <br/>
            {/*теперь есть индикатор на экране когда данные обновляются*/}
            {isFetching ? "Обновление..." : null}
        </div>
    );
};

export default Films;

/*
обернули в провайдер сделали запрос вывели в консоль осмотрели что пришло в data
 объекте нам
res.json() - тут все данные











 */