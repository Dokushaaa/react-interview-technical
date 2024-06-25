import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { StoreProvider } from "./store/StoreContext";

import PageNotFound from "./components/partials/PageNotFound";
import DashboardHome from "./components/pages/developer/dashboard/DashboardHome";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<StoreProvider>
					<Router>
						<Routes>
							<Route
								path='*'
								element={<DashboardHome />}
							/>
							<Route
								path='/*'
								element={<PageNotFound />}
							/>
						</Routes>
					</Router>
				</StoreProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
