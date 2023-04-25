import "./App.css";
import Films from "./Films";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

// Создаем клиента
const queryClient = new QueryClient();

function App() {
    // console.log(useQuery);

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
