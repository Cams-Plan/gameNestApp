import React from "react";

function useOutsideClick(callback) {
    const ref = React.useRef();
  
    React.useEffect(() => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
        
      };
  
      document.addEventListener('click', handleClick);

      // clean up
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
};

export default useOutsideClick;
