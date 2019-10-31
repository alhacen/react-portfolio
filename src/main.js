import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import LoadingScreen from './screens/loading.screen';
import Screen from './components/screen';
import Footer from './components/footer';
import Nav from './components/nav';
import NotFoundScreen from './screens/404.screen';

import {COMMON_ROUTES} from './constants/routes/main.routes.constant';

const Main = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main>
        <div id="main" className="grey lighten-4">
          <Nav />
          <div>
          <div className="container" style={{marginTop:"30px"}}>
            <div id="container-card" className="card" style={{marginLeft:"auto",marginRight:"auto"}}>
              <Switch>
                {COMMON_ROUTES.map((route, index) => (
                  <Route
                    exact={route.exact === undefined ? true : route.exact}
                    path={route.path}
                    component={() => <Screen title={route.title} screen={route.screen} />}
                    key={index.toString()}
                  />
                ))}
                <Route component={NotFoundScreen} />
              </Switch>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </Suspense>
  );
};

export default Main;
