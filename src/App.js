import "./App.css";
import Films from "./Films";
import {QueryClient, QueryClientProvider} from "react-query";

// Создаем клиента
const queryClient = new QueryClient();

function App() {
    // console.log(useQuery);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Films/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
