import "./App.css";
import Films from "./Films";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {useState} from "react";

// Создаем клиента
const queryClient = new QueryClient();

function App() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <button onClick={() => setIsOpen(!isOpen)}>
                    click
                </button>
                {isOpen ? <Films/> : null}
            </div>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
}

export default App;
