import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { AppRouter } from "./providers";
import "./styles/index.scss";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
