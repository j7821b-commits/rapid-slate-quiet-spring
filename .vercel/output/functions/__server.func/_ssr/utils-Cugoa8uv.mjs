import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-Cugoa8uv.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatUsd(n) {
	const formatted = Math.abs(n).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	});
	return n < 0 ? `-${formatted}` : formatted;
}
function prefersReducedMotion() {
	if (typeof window === "undefined") return true;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
//#endregion
export { formatUsd as n, prefersReducedMotion as r, cn as t };
