import { Dialog } from "@headlessui/react";
import { useConnect } from "wagmi";

interface ConnectWalletDailogProps {
  isOpen: boolean;
  onClose(): void;
}
const ConnectWalletDialog = ({ isOpen, onClose }: ConnectWalletDailogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30 z-20" aria-hidden="true" />
      <div className="fixed inset-0 z-30 flex flex-col items-center justify-start p-4">
        <Dialog.Panel className="bg-green-200 rounded-full">
          <div className="flex items-center justify-between"></div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConnectWalletDialog;
