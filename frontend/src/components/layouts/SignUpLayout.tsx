import { LogoIcon } from "../icons"

export const SignUpLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-2 py-6 bg-[#1e1e2f] text-white">
    <div className="mx-auto w-full min-w-[360px] space-y-6 max-w-md">
      <div className="flex items-center space-x-2 justify-center">
        <div className="flex size-9 items-center justify-center p-1">
          <div className="flex size-7 items-center justify-center rounded-md border border-white text-white">
            <LogoIcon />
          </div>
        </div>
        <span className="font-extrabold text-white">Acme</span>
      </div>
      <div className="rounded-xl border border-gray-300 shadow bg-white text-gray-900">
        {children}
      </div>
    </div>
  </div>
);
