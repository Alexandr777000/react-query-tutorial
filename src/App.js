import "./App.css";
import {Films} from "./Films";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {useState} from "react";

// Создаем клиента
export const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Films/>
            </div>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
}

export default App;
