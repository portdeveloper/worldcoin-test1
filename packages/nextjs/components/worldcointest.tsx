import { useCallback } from "react";
import { IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";

export default function WorldCoinTest() {
  const handleProof = useCallback(() => {
    return new Promise<void>(resolve => {
      setTimeout(() => resolve(), 3000);
      // NOTE: Example of how to decline the verification request and show an error message to the user
    });
  }, []);

  const onSuccess = (result: ISuccessResult) => {
    console.log(result);
  };

  return (
    <div>
      <div>
        <IDKitWidget
          action="my_action"
          signal="my_signal"
          onSuccess={onSuccess}
          handleVerify={handleProof}
          app_id="get_this_from_the_dev_portal"
          // walletConnectProjectId="get_this_from_walletconnect_portal"
        >
          {({ open }) => <button onClick={open}>Click me</button>}
        </IDKitWidget>
      </div>
    </div>
  );
}
