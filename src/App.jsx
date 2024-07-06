import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// const NotFound = React.lazy(() => import("./components/NotFound"));
function App() {
	return (
		<>
			<Suspense fallback={<h1>Loading</h1>}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
