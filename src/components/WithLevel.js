import React from 'react';

export const levelContext = React.createContext(0);

export const LevelProvider = props => {
  return (
    <levelContext.Provider value={props.level}>
      {props.children}
    </levelContext.Provider>
  )
}
export default LevelProvider;

export function withLevel(Component) {
  return function WrapperComponent(props) {
    return (
      <levelContext.Consumer>
        {state => <Component {...props} level={state} />}
      </levelContext.Consumer>
    )
  }
}