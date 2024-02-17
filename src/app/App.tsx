import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userActions } from "entities/User";
import { getUserMounted } from "entities/User/model/selectors/getUserMounted/getUserAuthData";

const App = () => {
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app")}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                {mounted && <AppRouter />}
            </div>
        </div>
    );
};
export default App;
