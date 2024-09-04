import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { AppRouter } from "./providers";
import "./styles/index.scss";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
