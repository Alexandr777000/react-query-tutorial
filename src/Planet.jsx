import React from "react";
import {useQuery} from "react-query";

const useGetPlanet = (planetURL) => {
    return useQuery(["planet", planetURL], () => {
        return new Promise(resolve =>
            setTimeout(resolve, 3000),
        )
            .then(() =>
                fetch(planetURL)
                    .then(res => res.json()));
    }, {
        // не делать запросы если нет урла планеты...
        enabled: !!planetURL,
        initialData: {
            name: "initial data"
        }
    });
};

const Planet = ({planetURL}) => {
    // подключим наш хук
    const {data, isLoading} = useGetPlanet(planetURL);

    return (
        <div>planet: {isLoading ? "Loading..." : data?.name} {data?.name}</div>
    );
};

export default Planet;