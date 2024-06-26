import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Addbook from "./components/Addbook";
import Showbook from "./components/Showbook";
import Updatebook from "./components/Updatebook";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<Addbook />} />
					<Route path="/:id" element={<Updatebook />} exact />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
