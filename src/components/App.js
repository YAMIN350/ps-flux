import React from 'react';
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import Header from './common/Header'
import CoursesPage from './CoursesPage'
import {Route, Switch} from 'react-router-dom'
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
}

export default App;