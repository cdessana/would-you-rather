import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  
    const { isAuthorized } = restOfProps;
  console.log("this", isAuthorized);

  return (
    <Route
      {...restOfProps}
      render={(props) =>{
        return isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }}
    />
  );
}

export default ProtectedRoute;