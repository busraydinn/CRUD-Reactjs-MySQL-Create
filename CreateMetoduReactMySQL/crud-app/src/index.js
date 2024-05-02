import ReactDOM from "react-dom/client";
import App from "./App";
function Index(){
    return(
        <App/>
    )
}
export default Index;
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Index/>)