import React from "react";
import {useQuery} from "react-query";

const Films = () => {
    const {data: {results = []} = {}, isLoading} = useQuery("key", async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return fetch("https://swapi.dev/api/films").then(res => res && res.json());
    });
    // console.log(res);
    // console.log(otherData);

    return (
        <div>
            {isLoading
                ? "Loading..."
                : results.map(film => {
                    return (
                        <div key={film.title}>
                            {film.title}
                        </div>);
                })}
        </div>
    );
};

export default Films;

/*
обернули в провайдер сделали запрос вывели в консоль осмотрели что пришло в data
 объекте нам
res.json() - тут все данные











 */