import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
  title?: string;
  variant?: "info" | "warning" | "success";
};

const tone: Record<NonNullable<CalloutProps["variant"]>, string> = {
  info: "border-l-[#0B4F6C] bg-[#E8F4F8] text-gray-800",
  warning: "border-l-amber-500 bg-amber-50 text-amber-950",
  success: "border-l-emerald-600 bg-emerald-50 text-emerald-950",
};

const Callout = ({
  children,
  title,
  variant = "info",
}: Readonly<CalloutProps>) => {
  return (
    <aside
      className={`my-8 rounded-r-xl border-l-4 px-5 py-4 text-[17px] leading-relaxed ${tone[variant]}`}
      role="note"
    >
      {title ? (
        <p className="mb-2 font-bold text-gray-900">{title}</p>
      ) : null}
      <div className="space-y-3 text-gray-700 [&_p]:mb-3 [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
};

export default Callout;
