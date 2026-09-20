# ALMA — review and continuation workflow

Reviewed 2026-09-20 (UTC). Baseline: `9438ea1692ddcbd8695f7e7ddd50e24bf41c532b` on `main`.
Repository: j7821b-commits/rapid-slate-quiet-spring.

## Start here tomorrow

Read this document, `AGENTS.md`, and `ALMA-handoff-for-gemini.md`. Fetch the latest branch and compare it with the baseline above before editing. Preserve ALMA's name, paper-and-plaster design, noncommercial purpose, fictional households, human visit, and no-cash-at-the-door boundary. Build on the existing app.

**Next implementation task:** make the demo distinguish a completed visit from confirmed assistance. Start with task 1 below. Do not begin by migrating hosting.

Copy-ready restart instruction:

> Continue ALMA from docs/ALMA-CONTINUATION.md. Inspect the current branch and changes since its recorded baseline. Implement the first unfinished task, preserve the original handoff constraints, verify the affected behavior, and update the checkpoint before stopping. Do not infer government approval, payment, a stopped deadline, or Azure access from the demo.

## What exists — observations

ALMA means Assistance Ledger for Mutual Aid. It demonstrates an office and a promotora helping fictional households navigate existing assistance. Its strength is the human process: make time, confirm the tenant, explain the help, and return paperwork through the office.

The source uses React 19, TanStack Start, TypeScript, Vite, and Zustand. The application route mounts the ALMA interface; its case state lives in `src/lib/swarm/store.ts`. The old internal directory name does not require changing ALMA's public identity.

The current implementation is an in-memory simulation. Timers imitate program lookup, application preparation, travel, submission, and stabilization. The inspected case flow makes no agency or payment request. There is no implemented encrypted household vault in that flow, despite log copy describing one. The displayed fund is initialized to a constant. Neither a funding reservation nor a disbursement is demonstrated.

The deployment configuration in `vite.config.ts` explicitly selects Nitro's Vercel preset. Generated Vercel output is tracked in the repository. This is not evidence of Azure deployment.

The original handoff is preserved. This review proposes improvements; it does not silently revise the author's text.

## Review findings, prioritized

| Priority | Evidence | Improvement and completion condition |
| --- | --- | --- |
| P0 | `store.ts: collectAnalog` schedules submitted at 1.8 seconds and stabilized/resolved at 2.8 seconds. It logs a paused eviction clock or lights staying on without receiving confirmation. | Separate visit complete, office received, agency received, decision, payment confirmed, and outcome verified. Timers may animate a clearly labeled simulation but cannot serve as real evidence. |
| P0 | `store.ts: deploySwarm` describes checking portals, an encrypted PII vault, and a cleared CAM cooldown; values are scripted. | Label these steps as simulated. Show candidate assistance rather than verified eligibility. No claim of encryption, integration, approval, or reserved money without its implementation and evidence. |
| P0 | `catalog.ts` embeds a 2026 poverty figure, eligibility labels and notice language; `store.ts` embeds a $3,500 maximum and a 12-month CAM rule. | Treat these as unverified demo assumptions. Maintain a dated source record for each rule before real use. Distinguish household size, annual/monthly units, FPL versus program-specific rules, availability, and agency decision. |
| P1 | `printPacket` advances to printed, opens a dialog, and says “Packet printed.” | Rename the existing action to “Open demo packet,” or add a real print view. Opening a dialog or invoking print is not proof paper was printed. Record preparation separately from operator confirmation. |
| P1 | `hydrate` initializes a new 18-hour countdown. State is not persisted; logs are capped at 80; reset clears everything. | Clearly mark the demo clock and reset behavior. A real deadline needs source, timestamp, time zone, and verification; real case history needs durable storage and corrections rather than destructive reset. |
| P1 | Field desk shows `tasks[0]`, but `submitFieldNote` attaches a note to `selected`. These are independent state values. | Pass an explicit case ID when submitting; display the target household beside the note. Reproduce with A active and B selected. A note must not silently attach to the wrong household. |
| P1 | Unit A's delayed match completion sets liaison status to preparing unconditionally. Unit B's path preserves on-site/en-route status. | Guard shared liaison state consistently. Reproduce overlapping matches/visits with controlled timers. Neither household's match may release an occupied liaison. |
| P1 | Signature completion is represented by a click; there are no decline, not-home, missing-document, rejected, or unavailable-program branches. | Add honest pending and exception states. Make refusal possible without recording consent or payment. Identify the next responsible person and follow-up date. |
| P2 | `LiveClock` formats time in America/Chicago but date in the browser's default zone. | Use America/Chicago for both. Check near midnight from a different browser time zone. |
| P2 | `BASE_TRAJECTORY` is hard-coded; the user-facing scenario can look like measured impact. | Label the chart as illustrative assumptions and explain its inputs. Do not report it as measured savings. |
| P2 | Generated deployment bundles are tracked alongside source; no GitHub Actions workflow appears in the reviewed tree. | Discuss removal of generated bundles in a separate cleanup change. Establish reproducible checks before deployment automation. Preserve platform helpers and branding contracts. |

These findings come from source inspection. Runtime reproduction is still pending.

## Proposed office workflow

This is a proposed operational design, not an approved City, County, CAM, or CPS procedure.

| Step | Responsible party | Evidence to retain | Next state |
| --- | --- | --- | --- |
| Record a request or notice | Authorized office worker with household participation | Case ID, source document reference, received time, reported deadline and verifier | Needs review |
| Check possible programs | Office reviewer | Official source, checked date, rule version, availability, reason for candidate match | Candidate found / needs information |
| Prepare the visit | Office and promotora | Correct household, current packet version, language/access needs, appointment preference | Visit planned |
| Meet and explain | Promotora and household | Identity confirmation outcome, consent or refusal, missing items; minimum necessary detail | Consent recorded / declined / follow-up |
| Return packet to office | Promotora and receiving office worker | Packet ID/version, sender, receiver, handoff time, receipt | Office received |
| Submit via confirmed program channel | Authorized office worker | Submission reference, exact document version, channel, receipt and time | Agency received / submission failed |
| Record the decision | Office reviewer using agency evidence | Decision reference, amount, conditions, date and responsible agency | Approved / denied / more information |
| Verify assistance | Office reviewer using payer/payee evidence | Payment or pledge reference, intended recipient, amount and confirmation; keep pledge distinct from settled payment | Payment pending / confirmed |
| Confirm household outcome | Office and household | Actual tenancy or utility outcome, remaining issue, next follow-up | Outcome verified / unresolved |
| Close with review | Authorized office reviewer | Closure reason, reviewer, supporting evidence, reopen path | Closed |

ALMA records assistance and its evidence; it should not claim to hold program funds merely because it has found a candidate. Keep rent and utility payees distinct. Keep the household's agreement and the property office's role visible, while checking each program's actual accepted submission channel.

A submitted application must not itself change a deadline to “paused.” Record any claimed hold separately with its source, scope, effective date and expiry, and have the responsible office verify it.

Minimum proposed traceability fields: case ID, event ID, actor and role, event time in UTC, prior and next state, reason, document ID/version, receipt/reference, and evidence source. Avoid copying private document contents into general logs. Corrections should preserve the prior event and explain the correction.

## Implementation sequence

### 1. Make the prototype's claims accurate

Scope: store, catalog, packet, header/status copy, and affected components.

- Put the fictional/simulated status near the beginning of the experience.
- Replace unsupported success claims with explicit demo language.
- Separate completion of the visit from confirmation by the office/agency.
- Add pending, declined, unavailable, and needs-information paths.
- Remove claims of a working encrypted vault or live program lookup.
- Keep money controls unavailable to the promotora.

Done when: the A and B walkthroughs never imply a real signature, print, government submission, payment, or stopped deadline occurred.

### 2. Repair case attribution and scheduling

- Bind notes to an explicit visible case ID.
- Track the active visit separately from whichever card is selected.
- Protect the liaison's occupied/returning states from late matching callbacks.
- Fix Central Time date formatting.
- Confirm reset cancels every pending simulation callback.

Done when: A and B can be matched in either order; changing selection does not misfile notes; double-clicks and overlapping timers do not create two active visits.

### 3. Produce a usable demo packet

- Add a print-specific layout with ALMA name, “Demonstration—not an official application,” fictional-data notice, case ID and version.
- Include the office handoff receipt and missing-document checklist.
- Keep the tenant's consent, witness acknowledgment and agency approval distinct.
- Check Letter-paper preview, page breaks, long names and narrow-screen access.
- Do not collect real signatures or sensitive household data in the prototype.

Done when: print preview is legible and packet preparation does not claim printing or signing succeeded.

### 4. Validate the partner process

Record an owner and status for each unanswered question:

- Which City/County program is actually open, and which office administers it?
- Which eligibility rules, amounts, repeat-assistance limits and official forms apply?
- Can property management submit, and what authorization is required?
- Who receives the signed packet, acknowledges receipt, and handles missing information?
- Who may verify a hold, pledge, payment, and case closure?
- What arrangement, if any, is needed for an ALMA pilot and data sharing?
- What language/accessibility support, retention period and correction process are required?

Deliverable: a source register and a partner-reviewed process map. Do not presume there is one universal “city stamp” or that a prototype grants authority. Current assistance and legal claims were not successfully verified during this review.

### 5. Decide the Microsoft scope before integrating

“Microsoft” could mean Word/Excel document handoff, Microsoft 365 storage/workflows, or Azure hosting. “Azure Six” was not identified by the available integrations or repository evidence. Record the intended service before selecting an architecture.

| Need | Proposed next step | Readiness condition |
| --- | --- | --- |
| Office uses Word/Excel | Agree on a packet and case-register format; generate fictional examples for review | Office accepts fields and workflow |
| Office uses SharePoint/Power Automate | Document the tenant, destination, roles, receipt flow and minimum permissions | Connected account and approved organizational process |
| Azure hosting | Make an isolated deployment compatibility branch; evaluate the server build and platform-specific dependencies | Known subscription/resource target and verified build/runtime |
| Real shared case records | Design durable records, role enforcement, consent and evidence retention | Explicit pilot scope; access-control and restoration tests |

No account/login should be added to the current demo merely as a hosting prerequisite. A future real-data pilot is a separate scope requiring its own access design.

Microsoft documents GitHub Actions deployment to App Service and recommends OpenID Connect with short-lived tokens. If Azure hosting is chosen, use a scoped identity and a staging environment; the existing Vercel output cannot simply be assumed compatible.
Source checked 2026-09-20: [Microsoft App Service deployment guidance](https://learn.microsoft.com/en-us/azure/app-service/deploy-github-actions).

Before authoring a live deployment workflow, determine the Azure target, supported Node runtime, actual server entry point, environment variables, health check, rollback artifact and whether Grok-specific bridge/auth/connector dependencies work there. Preserve the existing deployment until the alternative is verified.

### 6. Establish verification and release workflow

Proposed sequence for each code change:

1. Fetch latest changes; read project instructions and this checkpoint.
2. Use a focused branch and one clearly stated completion condition.
3. Install locked dependencies with `npm ci` in an environment with repository/package access.
4. Run `npm run typecheck`, `npm test`, and `npm run build`; review build migration behavior before supplying any database credentials.
5. Run targeted behavior checks from tasks 1–3; run lint and record any pre-existing failures separately.
6. Follow repository browser-QA instructions for desktop/mobile and built output. Check content, console, overflow, keyboard use and print preview.
7. Put exact results and limitations in the PR. Save an immutable tested commit.
8. Deploy only after the target environment and required access are established; verify the deployed version and preserve rollback.
9. Update the checkpoint below before stopping.

A future GitHub Actions check can automate install, typecheck, tests, and build with read-only repository access and no production credentials. This review does not install an untested deployment workflow.

## Checkpoint — 2026-09-20

Completed:
- Confirmed private repository access through GitHub.
- Read root instructions and the original ALMA handoff.
- Inspected case state, catalog, types, packet, field desk, clock, header, application shell, package scripts and Vite deployment configuration.
- Read existing `screenshots/app-builder-built.json`: it reports successful desktop/mobile rendering, no console/page errors and no horizontal overflow. This is historical evidence from the export, not a new test run.
- Created this review, operational workflow, prioritized implementation queue, Microsoft decision path and restart prompt.

Not completed:
- No application source changes, new build, runtime walkthrough, agency submissions, Microsoft integration, production deployment or funding actions.
- Shell clone could not authenticate. GitHub connector source reads succeeded.
- No Azure connector was exposed or found by the integration search; no subscription was inspected.
- Program amounts, eligibility and legal effects remain unverified. Web search returned unrelated results; none were accepted as evidence.
- No usable `.grok/skills/app-data/SKILL.md` was found in the reviewed tree. Retrieve applicable integration instructions before implementing a platform connector.

Next: implement task 1 on a new code branch after reviewing this draft.

At every stopping point append:
- Date and branch/commit:
- Completed task and changed files:
- Verification performed and results:
- Remaining blockers or decisions:
- Exact next action:
- Deployment status and rollback reference, if applicable:
