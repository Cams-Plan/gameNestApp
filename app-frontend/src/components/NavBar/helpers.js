import React from "react";
// in the helpers and hooks files, any hooks from React will use a dot notation instead of destructuring at the import i.e. React.useEffect()
// helper files in a component are used for hooks and utilities that will only be used for that component

export function useOutsideHeaderClick(callback) {
    const ref = React.useRef();
  
    React.useEffect(() => {
      const handleClick = (e) => {
        const settingsContainer = document.getElementById("nav-userSettings-container")
        if (ref.current && 
            !ref.current.contains(e.target) &&
            // any elements we don't mind clicking on
            !document.getElementById("nav-parent-container").contains(e.target) &&
            !settingsContainer.contains(e.target)
        ) {
            callback();
        }
        
      };
  
      document.addEventListener('click', handleClick, true);

      // clean up
      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [ref]);
  
    return ref;
};
