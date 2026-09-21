import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Cugoa8uv.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as ChevronRight, v as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as hasReadBrief, r as markBriefRead, t as Button } from "./brief-gate-DIBAAljG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DOkVLMAO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAMPHLET = [
	{
		kicker: "A brief",
		title: "ALMA",
		body: "Assistance Ledger for Mutual Aid. Help the city already funded, held on one book, walked to the door through the office."
	},
	{
		kicker: "What this is",
		title: "Not a charity. Not cash at the door.",
		body: "ALMA finds programs San Antonio and Bexar County already pay for. It holds the match on one ledger so nobody has to trust a stranger with money. A real person goes to sit with the household. The signed paper goes back through the people who already talk to them about the property."
	},
	{
		kicker: "The goal",
		title: "The building stands. The household stays.",
		body: "Lights on. Rent current. People still home. The complex does better because the residents are okay — not instead of them. Same side. Office, household, this tool."
	},
	{
		kicker: "How the money moves",
		title: "In. Ledger. Out.",
		points: [
			"In — city and county programs first. Ministry next. A neighbor pool only if those fall through.",
			"Ledger — matched once. Held so nobody at the door has to ask for cash.",
			"Out — rent to the office. Lights to the utility. Never a middleman. Never a hand at the door."
		]
	},
	{
		kicker: "How it is used",
		title: "Notice. Match. Visit. Paper.",
		points: [
			"See the friction early — a notice to vacate, a shutoff.",
			"Match the household to a program that already exists.",
			"Send someone who made time. Confirm it is the tenant. Sit with them. Describe the help.",
			"They sign together. The paper goes through the office. That is the whole walk."
		]
	},
	{
		kicker: "At the door",
		title: "Make time. Confirm. Describe.",
		points: [
			"Go see them. Do not send a stranger.",
			"Talk to the person on the folder. Make sure it is them.",
			"Say what this is: city help, paid through the office. Nobody here asks for cash."
		]
	},
	{
		kicker: "If a step falls through",
		title: "That is a design problem.",
		body: "Something in the process was never made easy enough. It is not proof that someone did not care. Do not set the tenant against the office, or the office against this tool. Fix the process until people can actually do it."
	},
	{
		kicker: "The demo",
		title: "118 Perez Ave · Eastside",
		body: "Two open folders on one duplex. The Garcias have a three-day notice. The Washingtons have a CPS disconnect. Three hundred and eleven duplexes share the ledger. The families are fictional. The process is the point."
	}
];
function Pamphlet() {
	const navigate = useNavigate();
	const [i, setI] = (0, import_react.useState)(0);
	const [farthest, setFarthest] = (0, import_react.useState)(0);
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	const last = PAMPHLET.length - 1;
	const slide = PAMPHLET[i];
	const onLast = i === last;
	(0, import_react.useEffect)(() => {
		setUnlocked(hasReadBrief());
	}, []);
	const openDesk = (0, import_react.useCallback)(() => {
		markBriefRead();
		setUnlocked(true);
		navigate({ to: "/desk" });
	}, [navigate]);
	const go = (0, import_react.useCallback)((dir) => {
		if (dir === 1 && i === last) {
			openDesk();
			return;
		}
		setI((n) => {
			const next = Math.min(last, Math.max(0, n + dir));
			setFarthest((f) => Math.max(f, next));
			return next;
		});
	}, [
		i,
		last,
		openDesk
	]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "ArrowRight" || e.key === " ") {
				e.preventDefault();
				go(1);
			}
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				go(-1);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [go]);
	const [touchX, setTouchX] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-xl flex-col px-4 py-6 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-primary uppercase",
					children: "ALMA · a brief"
				}), unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/desk",
						children: "Open the desk"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: "Read through to open the desk"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "sheet relative flex flex-1 flex-col overflow-hidden p-6 sm:p-8",
				onTouchStart: (e) => setTouchX(e.changedTouches[0]?.clientX ?? null),
				onTouchEnd: (e) => {
					const end = e.changedTouches[0]?.clientX;
					if (touchX == null || end == null) return;
					const d = end - touchX;
					if (d < -40) go(1);
					if (d > 40) go(-1);
					setTouchX(null);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.16em] text-primary uppercase",
						children: slide.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl leading-tight text-fg sm:text-4xl",
						children: slide.title
					}),
					"body" in slide && slide.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted",
						children: slide.body
					}) : null,
					"points" in slide && slide.points ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 space-y-3",
						children: slide.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-primary/30 pl-3 text-base leading-relaxed text-muted",
							children: p
						}, p))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto pt-8 text-xs text-subtle",
						children: "The building stands and the household stays. Same side."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-5 flex items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						size: "sm",
						disabled: i === 0,
						onClick: () => go(-1),
						"aria-label": "Previous page",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Back"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex gap-1.5",
						"aria-label": "Pages",
						children: PAMPHLET.map((s, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Page ${n + 1}: ${s.kicker}`,
							"aria-current": n === i ? "page" : void 0,
							disabled: n > farthest,
							onClick: () => setI(n),
							className: cn("block size-2.5 rounded-full", n === i ? "bg-primary" : "bg-border", n > farthest && "opacity-40")
						}) }, s.title))
					}),
					onLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "default",
						size: "sm",
						onClick: openDesk,
						children: ["Open the desk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "default",
						size: "sm",
						onClick: () => go(1),
						"aria-label": "Next page",
						children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-center text-xs text-subtle",
				children: [
					i + 1,
					" / ",
					PAMPHLET.length,
					onLast ? " · then the desk" : " · swipe or next"
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pamphlet, {});
}
//#endregion
export { Home as component };
