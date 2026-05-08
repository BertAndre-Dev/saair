const ordinal = (n: number): string => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

/** Formats an ISO date like "April 29th, 2026 at 11:50PM" (local time). */
export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;

  const month = d.toLocaleString("en-US", { month: "long" });
  const day = ordinal(d.getDate());
  const year = d.getFullYear();
  const time = d
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/\s/g, "")
    .toUpperCase();

  return `${month} ${day}, ${year} at ${time}`;
}
