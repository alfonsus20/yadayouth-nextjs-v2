import { useEffect } from "react";

function useEffectOnce(cb: React.EffectCallback) {
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default useEffectOnce;
