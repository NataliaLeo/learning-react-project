import { getUserAuthData } from "entities/User";
import { Suspense, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";

const AppRouter = () => {
	const isAuth = useSelector(getUserAuthData);

	const routes = useMemo(() => {
		return Object.values(routeConfig).filter((route) => {
			if (route.authOnly && !isAuth) {
				return false;
			}
			return true;
		});
	}, [isAuth]);

	return (
		<Routes>
			{routes.map(({ element, path }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">{element}</div>
						</Suspense>
					}
				/>
			))}
			{/* Достаем массив значений */}
		</Routes>
	);
};

export default memo(AppRouter);
