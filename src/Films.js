import React from "react";
import {useQuery} from "react-query";

const Films = () => {
    const {data: {results = []} = {}, ...otherData} = useQuery("key", () => {
        return fetch("https://swapi.dev/api/films").then(res => res && res.json());
    });
    // console.log(res);
    console.log(otherData);

    return (
        <div>
            {results.map(film => {
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