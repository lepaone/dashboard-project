# Business Requirements Document (BRD)
## Almosafer Travel — DMC Operations Dashboard

| Field | Value |
|---|---|
| Document Title | BRD — DMC Operations Dashboard (Almosafer Travel) |
| Owner | Saudi Arabia Ministry of Tourism (issuer) / Almosafer Travel (consumer) |
| Version | 1.0 |
| Date | 2026-05-05 |
| Status | Draft |
| Source File | `dashboard-dmc.html` |

---

## 1. Executive Summary

The DMC Operations Dashboard is a **single-tenant, partner-scoped variant** of the Ministry of Tourism's Visa-by-Package dashboard. It is delivered to a Destination Management Company (DMC) — in this instance **Almosafer Travel** (`DMC_RECORDID = 11`) — and exposes only the data that belongs to that DMC.

It enables DMC operators to monitor their own package submissions, visa and insurance issuance, fee settlement, traveler movement, and overstay compliance, without exposing peer or ministry-wide comparative data.

## 2. Business Objectives

1. Give each DMC a real-time operational view of **its own** packages, visas, and revenue.
2. Surface overstay alerts so the DMC can act on regulatory exposure quickly.
3. Provide bilingual (EN / AR) self-service operational visibility.
4. Reuse the ministry dashboard's look and brand while removing peer-comparison content.
5. Reduce ministry support load by giving DMCs first-line access to their own data.

## 3. Scope

### 3.1 In Scope
- Filtered KPIs and charts for a single DMC (server-enforced `DMC_RECORDID` scoping).
- Four operational tabs: Overview, Packages & Financials, Visa & Insurance, Entry & Cancellations.
- Recent Package Submissions table (single-DMC).
- Overstay Alerts table with CSV / Excel export.
- VCC card status (own DMC only).
- Bilingual EN / AR UI with full RTL support.

### 3.2 Out of Scope (explicitly removed vs. ministry view)
- DMC Performance tab.
- DMC leaderboard, completion-rate-by-DMC, revenue-contribution-by-DMC charts.
- Active / Inactive DMC registry tables.
- DMC / OTA filter in the global filter bar.
- Active / Inactive DMC count KPIs.
- Any peer-comparison, ranking, or cross-DMC analytics.

## 4. Stakeholders

| Stakeholder | Role |
|---|---|
| DMC Operations Team (Almosafer) | Primary daily user |
| DMC Compliance Officer | Overstay monitoring & export |
| DMC Finance | Fee collection & revenue tracking |
| DMC Account Manager (Ministry side) | Onboarding & support |
| Ministry of Tourism IT | Platform owner, security, integrations |

## 5. User Personas

- **DMC Operator** — monitors live package submission & visa flow.
- **DMC Compliance Officer** — exports overstay reports, monitors expirations.
- **DMC Finance Analyst** — reconciles fees, revenue, and VCC card status.

## 6. Functional Requirements

### 6.1 Identity & Scoping
- FR-1: All queries MUST be filtered by the authenticated DMC's `DMC_RECORDID` server-side. Front-end filtering is not sufficient.
- FR-2: The dashboard header MUST display the DMC's name (e.g., "Almosafer Travel — DMC Operations Dashboard").
- FR-3: A user authenticated as DMC X MUST NOT be able to see any data belonging to DMC Y, including via direct API calls or URL manipulation.

### 6.2 Navigation & Layout
- FR-4: Four tabs only: **Overview**, **Packages & Financials**, **Visa & Insurance**, **Entry & Cancellations**.
- FR-5: Persistent header with DMC name, live clock, language toggle (EN / العربي).
- FR-6: Full RTL layout when Arabic is selected.

### 6.3 Global Filters
- FR-7: Date Range (From / To).
- FR-8: Package Status: All, Received, Validated, Fees Paid, Processing, Completed, Rejected, Cancelled.
- FR-9: Nationality: All, Indian, Pakistani, Indonesian, Egyptian, British, American (extensible).
- FR-10: DMC / OTA filter MUST be removed (single-DMC context).

### 6.4 Overview Tab
- FR-11: KPI cards — Total Packages Submitted, Total Visas Issued, Total Fees Collected (SAR), Insurance Policies Issued, My DMC Account, Cancellation Rate, Packages Pending, Packages Rejected.
- FR-12: Charts — Timeline (packages by date), Packages by City of Stay, Status Pipeline.

### 6.5 Packages & Financials Tab
- FR-13: KPI cards — Average Package Value, Total Package Value, Government Fees, Accommodation Value, Flight Value, Other Services Value, Active VCC Cards.
- FR-14: Charts — Monthly Package Value Composition (stacked, SAR), Package Breakdown (status funnel), Monthly Revenue Trend, Fee Breakdown, Packages by Hotel, Packages by Carrier, Daily Submission Volume.
- FR-15: Recent Package Submissions table with columns: Package ID, DMC, Travelers, Nationality, City, Hotel, Days, Departure Carrier, Arrival Carrier, Insurer, Hotel Price, Flight Price, Visa Fees, Processing Fees, Insurance Fees.
- FR-16: Government Fees table: Fee Type, Per, Collected (SAR), Source.

### 6.6 Visa & Insurance Tab
- FR-17: KPI cards — Visas Issued (MOFA), Visa Issuance Pending, Insurance Policies (IA), Average Cancellation Time, Overall Cancellation Rate.
- FR-18: Charts — Rejection Reasons, Monthly Visa Issuance, Visa Duration Distribution, Insurance Policies by Insurer.

### 6.7 Entry & Cancellations Tab
- FR-19: KPI cards — Travelers Entered KSA, Travelers Exited KSA, Currently In-Country, Overstay Alerts.
- FR-20: Charts — Entry by Port, Weekly Entry vs Exit.
- FR-21: Overstay Alerts table — Traveler Name, Nationality, Passport No., Traveler ID, Entry Date, Visa Expiry Date, Days Overstayed.
- FR-22: Export Overstay Alerts as **CSV** and **Excel**.

### 6.8 Localization
- FR-23: Full EN ↔ AR translation including labels, tooltips, and chart legends.
- FR-24: Typography: IBM Plex Sans (EN), Noto Sans Arabic (AR).

## 7. Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-1 | Performance | First contentful paint < 3 s; filter re-render < 1 s |
| NFR-2 | Availability | 99.5% during business hours |
| NFR-3 | Security | Tenant isolation via `DMC_RECORDID`; JWT contains DMC claim; row-level security at the DB / API layer |
| NFR-4 | Authorization | API MUST reject any request whose payload references a `DMC_RECORDID` other than the caller's |
| NFR-5 | Auditability | Every export and login is logged in `OTA_ACCESS_LOG` |
| NFR-6 | Compliance | KSA data residency; PII redaction on shared exports |
| NFR-7 | Accessibility | WCAG 2.1 AA; RTL parity |
| NFR-8 | Branding | Ministry of Tourism palette: greens (#0C4B3A, #1A6854, #2E8B72), teal, purple accents |
| NFR-9 | Browsers | Latest Chrome, Edge, Safari, Firefox |

## 8. Data Sources & Scoping

### 8.1 Authoritative Source
All data is sourced from the **MTOTAeVisa** databases (`OTAEVisa_ESB`, `OTAEVisa_App_Attachments`, `OTAEVisa_ESB_Logs`). The DMC dashboard issues the same queries as the ministry view but with an enforced predicate:

```
WHERE PACKAGE_MASTER.DMC_RECORDID = :authenticated_dmc_id
```

### 8.2 Field → Database Column Mapping (DMC-relevant subset)

| Dashboard Object | Source |
|---|---|
| Package ID | `PACKAGE_MASTER.PACKAGE_ID` |
| Package Status | `PACKAGE_MASTER.PACKAGE_STATUS` |
| Travelers | `PACKAGE_MASTER.TOTAL_TRAVELERS_COUNT` |
| DMC Identity | `DMC.DMC_NAME_EN` via `PACKAGE_MASTER.DMC_RECORDID` |
| Nationality | `VISA_APP_PERSONALDETAILS.NATIONALITY` → `NATIONALITY.NATIONALITY_NAME` |
| City | `VISA_APP_ACCOMMODATION_DATA.CITY` → `CITY.CITY_NAME` |
| Hotel | `HOTEL.HOTEL_NAME` (via `LICENSE_NO`) |
| Hotel Price | `VISA_APP_ACCOMMODATION_DATA.HOTEL_PRICE` |
| Flight Price | `VISA_APP_FLIGHT_DATA.FLIGHT_PRICE` |
| Carriers | `DEPARTURE_CARRIER.CARRIER_NAME`, `ARRIVAL_CARRIER.CARRIER_NAME` |
| Visa Fees | `TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT` (SERVICE_TYPE = visa issuance/processing) |
| Insurance Fees | `TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT` (SERVICE_TYPE = insurance policy) |
| Insurance Provider | `VISA_APP_INSURANCE` |
| Visa Status / Expiry | `VISA_APP_MOFA.VISA_USAGE_STATUS`, `VISA_APP_MOFA.VISA_EXPIRYDATE` |
| Cancellation Reason | `VISA_APP_CANCELLATION.CANCELLATIONREASON` |
| Entry Date | `VISA_APP_FLIGHT_DATA.ARRIVAL_FLIGHT_DATE` |
| Passport | `VISA_APP_PASSPORTRAVEL.PASSPORTNUMBER` |
| VCC Card Status | `OTA_DMC_CREDITCARDDETAILS.STATUS`, `EXPIRY_DATE` (own DMC only) |

## 9. Key Metrics (KPI Catalog) — Definitions & Formulas

All formulas implicitly include `WHERE DMC_RECORDID = :authenticated_dmc_id` and the user's active filter context (date range, status, nationality). Δ% denotes period-over-period change vs. the immediately preceding period of equal length.

### 9.1 Overview KPIs

| KPI | Formula |
|---|---|
| Total Packages Submitted | `COUNT(PACKAGE_MASTER WHERE PACKAGE_STATUS ≠ 'Draft')` |
| Total Visas Issued | `COUNT(VISA_APP_MOFA WHERE VISA_USAGE_STATUS = 'Issued')` |
| Total Fees Collected (SAR) | `SUM(TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT)` |
| Insurance Policies Issued | `COUNT(VISA_APP_INSURANCE WHERE policy_status = 'Issued')` |
| My DMC Account | DMC display name + status from `DMC` |
| Cancellation Rate (%) | `COUNT(VISA_APP_CANCELLATION) / COUNT(PACKAGE_MASTER) × 100` |
| Packages Pending | `COUNT(PACKAGE_MASTER WHERE PACKAGE_STATUS ∈ {'Received','Validated','Fees Paid','Processing'})` |
| Packages Rejected | `COUNT(PACKAGE_MASTER WHERE PACKAGE_STATUS = 'Rejected')` |

### 9.2 Packages & Financials KPIs

| KPI | Formula |
|---|---|
| Average Package Value (SAR) | `SUM(PACKAGE_MASTER.TOTAL_PACKAGE_PRICE) / COUNT(PACKAGE_MASTER)` |
| Total Package Value (SAR) | `SUM(PACKAGE_MASTER.TOTAL_PACKAGE_PRICE)` |
| Government Fees (SAR) | `SUM(TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT WHERE SERVICE_TYPE ∈ government fee types)` |
| Accommodation Value (SAR) | `SUM(VISA_APP_ACCOMMODATION_DATA.HOTEL_PRICE)` |
| Flight Value (SAR) | `SUM(VISA_APP_FLIGHT_DATA.FLIGHT_PRICE)` |
| Other Services Value (SAR) | `Total_Package_Value − Accommodation − Flight − Visa Fees − Insurance` |
| Active VCC Cards | `COUNT(OTA_DMC_CREDITCARDDETAILS WHERE STATUS = 'Active' AND EXPIRY_DATE > TODAY)` |
| Daily Submission Volume | `COUNT(PACKAGE_MASTER WHERE DATE(CREATEDTIMESTAMP) = D)` for each D |
| Monthly Revenue Trend | `SUM(TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT GROUP BY MONTH(payment_date))` |

### 9.3 Visa & Insurance KPIs

| KPI | Formula |
|---|---|
| Visas Issued (MOFA) | `COUNT(VISA_APP_MOFA WHERE VISA_USAGE_STATUS = 'Issued')` |
| Visa Issuance Pending | `COUNT(VISA_APP_MOFA WHERE VISA_USAGE_STATUS ∈ {'Submitted','Under Review','Awaiting Documents'})` |
| Insurance Policies (IA) | `COUNT(VISA_APP_INSURANCE WHERE policy_status = 'Issued')` |
| Average Cancellation Time | `AVG(VISA_APP_CANCELLATION.cancelled_at − PACKAGE_MASTER.CREATEDTIMESTAMP)` |
| Overall Cancellation Rate (%) | `COUNT(VISA_APP_CANCELLATION) / COUNT(PACKAGE_MASTER) × 100` |
| Visa Duration Distribution | For each bucket b: `COUNT(VISA_APP_MOFA WHERE duration ∈ b) / COUNT(VISA_APP_MOFA) × 100` |
| Rejection Reasons | `COUNT(PACKAGE_MASTER WHERE PACKAGE_STATUS = 'Rejected') GROUP BY rejection_reason` |

### 9.4 Entry & Cancellations KPIs

| KPI | Formula |
|---|---|
| Travelers Entered KSA | `COUNT(VISA_APP_FLIGHT_DATA WHERE ARRIVAL_FLIGHT_DATE BETWEEN period_start AND period_end)` |
| Travelers Exited KSA | `COUNT(traveler WHERE exit_date BETWEEN period_start AND period_end)` |
| Currently In-Country | `Travelers_Entered_All_Time − Travelers_Exited_All_Time` (active visas only) |
| Overstay Alerts | `COUNT(VISA_APP_MOFA WHERE exit_date IS NULL AND TODAY > VISA_EXPIRYDATE)` |
| Days Overstayed | `TODAY − VISA_APP_MOFA.VISA_EXPIRYDATE` |
| Entry by Port (share %) | `COUNT(entry WHERE port = X) / COUNT(entry) × 100` |
| Weekly Entry vs Exit | `COUNT(entry GROUP BY WEEK)` and `COUNT(exit GROUP BY WEEK)` |

## 10. Security & Tenant Isolation

- **AuthN**: DMC user authenticates via the OTA portal SSO; JWT carries `DMC_RECORDID`.
- **AuthZ**: Every API endpoint enforces `dmc_id == jwt.dmc_id` server-side.
- **Row-Level Security**: Database views or policies on `PACKAGE_MASTER`, `VISA_APP_*`, `OTA_DMC_CREDITCARDDETAILS` filter by `DMC_RECORDID`.
- **Audit**: All access and exports recorded in `OTA_ACCESS_LOG` and `TRANSACTIONLOG`.
- **PII**: Passport numbers and traveler IDs are masked except in compliance exports.

## 11. Assumptions

- The authenticated user is associated with exactly one DMC.
- DMC master record (status, qualification) is up to date in `DMC`.
- All monetary values are reconciled to SAR.

## 12. Constraints

- Bilingual EN / AR mandatory at launch.
- Data residency within KSA.
- Strict tenant isolation — no cross-DMC data leakage.
- Branding must conform to Ministry of Tourism guidelines.

## 13. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Cross-tenant data leakage | High — regulatory & reputational | Server-side `DMC_RECORDID` enforcement + RLS + pen-test |
| Stale upstream data (MOFA/IA) | KPI inaccuracy | Integration health probes, freshness timestamps |
| Export of unmasked PII | Compliance breach | Role-gated exports, audit trail, redaction policies |
| Translation drift (EN/AR) | UX degradation | Centralized i18n catalog with review |

## 14. Acceptance Criteria

1. All four tabs render with the user's DMC data only; no data from other DMCs is reachable.
2. DMC name appears in the header; "My DMC Account" KPI reflects authenticated DMC status.
3. The DMC / OTA filter is absent.
4. Filters (date, status, nationality) apply across all visualizations on the active tab.
5. Overstay Alerts table exports successfully as CSV and Excel.
6. EN ↔ AR toggle switches the entire UI including chart elements and RTL layout.
7. Pen-test confirms no API path returns rows belonging to another `DMC_RECORDID`.
8. Performance and accessibility NFRs verified through QA sign-off.

## 15. Glossary

- **DMC** — Destination Management Company.
- **OTA** — Online Travel Agency.
- **MOFA** — Ministry of Foreign Affairs (visa issuance).
- **IA** — Insurance Authority.
- **MOI** — Ministry of Interior (entry/exit).
- **VCC** — Virtual Credit Card.
- **SAR** — Saudi Riyal.
- **RLS** — Row-Level Security.
