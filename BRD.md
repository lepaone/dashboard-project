# Business Requirements Document (BRD)
## Visa by Package — Operations Dashboard

| Field | Value |
|---|---|
| Document Title | BRD — Visa by Package Operations Dashboard |
| Owner | Saudi Arabia Ministry of Tourism |
| Version | 1.1 |
| Date | 2026-05-05 |
| Status | Draft |

### Revision History

| Version | Date | Change |
|---|---|---|
| 1.0 | 2026-05-04 | Initial BRD |
| 1.1 | 2026-05-05 | Added Section 8.1 (MTOTAeVisa Data Model) and KPI source-column mapping; aligned data sources with `MTOTAeVisa_DatabaseDetails.xlsx` (OTAEVisa_ESB, OTAEVisa_App_Attachments, OTAEVisa_ESB_Logs) |

---

## 1. Executive Summary

The Visa by Package Operations Dashboard is a bilingual (English/Arabic) executive monitoring tool for the Kingdom of Saudi Arabia's "Visa-as-a-Travel-Package" tourism initiative. It provides real-time operational visibility into the end-to-end lifecycle of tourist visa packages — from DMC submission, through MOFA visa issuance and Insurance Authority policy issuance, to traveler entry/exit tracking and financial settlement.

The dashboard consolidates data from MOFA, the Insurance Authority (IA), the Ministry of Interior (MOI), DMC/OTA booking systems, payment processors, and Virtual Credit Card (VCC) infrastructure into a single executive view.

## 2. Business Objectives

1. Provide a single operational view of tourism package and visa flows for ministry leadership.
2. Track government fee collection accuracy and revenue performance in SAR.
3. Monitor DMC/OTA partner performance and compliance with SLAs.
4. Detect overstays and cancellations early to support regulatory action.
5. Surface integration health (MOFA, IA, VCC) to reduce processing downtime.
6. Support bilingual (EN/AR) accessibility for ministry stakeholders.

## 3. Scope

### 3.1 In Scope
- Real-time KPIs and trend visualizations across packages, visas, insurance, revenue, entry/exit, and cancellations.
- Filter-driven slicing by date, status, DMC, nationality, city, payment status, and hotel class.
- Transactional log of recent package submissions.
- DMC leaderboard and registry (active/inactive).
- Government fee breakdown and revenue tracking in SAR.
- System health monitoring for MOFA, IA, and VCC integrations.
- Export capability for overstay and VCC reporting.

### 3.2 Out of Scope
- Direct visa adjudication or approval workflows.
- Traveler-facing portals or DMC self-service onboarding.
- Hotel/flight inventory management.
- Long-term data warehousing and BI ad-hoc query tooling.

## 4. Stakeholders

| Stakeholder | Role / Interest |
|---|---|
| Ministry of Tourism Executives | Strategic KPI monitoring |
| Operations Teams | Day-to-day package and visa flow oversight |
| Financial Controllers | Fee collection, revenue, and reconciliation |
| Policy / Compliance Analysts | Overstay detection, cancellation analysis |
| DMC / OTA Partners | Performance feedback (read-only) |
| MOFA, Insurance Authority, MOI | Upstream/downstream integration owners |

## 5. User Personas

- **Executive User** — needs at-a-glance KPIs, monthly trends, and revenue summaries.
- **Operations Analyst** — needs filterable transactional detail and pipeline status.
- **Compliance Officer** — needs overstay alerts, cancellation reasons, and exportable reports.
- **DMC Account Manager** — needs DMC leaderboard, completion rates, and revenue contribution.

## 6. Functional Requirements

### 6.1 Navigation & Layout
- FR-1: Five primary tabs: **Overview**, **Packages & Financials**, **Visa & Insurance**, **DMC Performance**, **Entry & Cancellations**.
- FR-2: Persistent header with page title, live clock, live status indicator, and language toggle (EN / العربي).
- FR-3: Full RTL layout support when Arabic is selected.

### 6.2 Global Filters
- FR-4: Date range (From / To).
- FR-5: Package Status: Received, Validated, Fees Paid, Processing, Completed, Rejected, Cancelled.
- FR-6: DMC / OTA selection (multi-value).
- FR-7: Nationality (Indian, Pakistani, Indonesian, Egyptian, British, American, …).
- FR-8: City of Stay (Riyadh, Jeddah, AlUla, Abha, Taif, Dammam).
- FR-9: Payment Status (Paid / Pending / Failed).
- FR-10: Hotel Class (4★ / 5★).
- FR-11: Apply and Reset filter actions; filter state must propagate to all visualizations on the active tab.

### 6.3 Overview Tab
- FR-12: KPI cards — Total Packages Submitted, Total Visas Issued, Total Fees Collected (SAR), Insurance Policies Issued, Packages Pending, Packages Rejected, Total DMCs, Cancellation Rate.
- FR-13: Charts — Monthly Package Submissions trend, Package Status Pipeline funnel, Top Traveler Nationalities, Packages by City of Stay.
- FR-14: KPI cards must show period-over-period delta (% change with up/down indicator).

### 6.4 Packages & Financials Tab
- FR-15: KPI cards — Total Package Value, Accommodation Value, Flight Value, Average Package Value (all SAR).
- FR-16: Charts — Monthly Package Value Composition (stacked), Value Breakdown by Component, Monthly Revenue Trend, Packages by Hotel, Packages by Flight Carrier, Daily Submission Volume (last 30 days).
- FR-17: Recent Package Submissions table with the following columns: Package ID, DMC, Travelers, Nationality, City, Hotel, Star Rating, Days, Departure Carrier, Arrival Carrier, Insurer, Hotel Price, Flight Price, Visa Fees, Processing Fees, Insurance Fees, Government Fees, Package Value, Status, Date.

### 6.5 Visa & Insurance Tab
- FR-18: KPI cards — Visas Issued (MOFA), Insurance Policies Issued (IA), Visa Pending.
- FR-19: Charts — Monthly Visa Issuance, Visa Duration Distribution, Validation Results funnel, Rejection Reasons, Government Fees Breakdown, Insurance Policies by Company.
- FR-20: Government Fees Breakdown table (Fee Type, Per-Unit price in SAR).
- FR-21: MOFA and Insurance Authority integration status panels.

### 6.6 DMC Performance Tab
- FR-22: KPI cards — Active DMCs, Inactive DMCs, Total Packages (Active DMCs), Revenue (Active DMCs).
- FR-23: DMC Leaderboard (top 7 with rank badges).
- FR-24: Charts — Packages by DMC, Completion Rate by DMC, Revenue Contribution.
- FR-25: DMC Registry tables (Active and Inactive).

### 6.7 Entry & Cancellations Tab
- FR-26: KPI cards — Travelers Entered KSA, Exited KSA, Currently In-Country, Overstay Alerts, Package Cancellations, Traveler Cancellations, Overall Cancellation Rate, Average Cancellation Time.
- FR-27: Charts — Entry by Port, Weekly Entry vs Exit (dual axis), Cancellation Reasons, Monthly Cancellation Trend.
- FR-28: Export overstay report (CSV / Excel).
- FR-29: VCC Card Health Monitor with export capability.

### 6.8 Localization
- FR-30: Full UI translation EN ↔ AR including labels, tooltips, and chart legends.
- FR-31: Typography: IBM Plex Sans (EN), Noto Sans Arabic (AR).

## 7. Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-1 | Performance | Initial load under 3 seconds; filter re-render under 1 second |
| NFR-2 | Availability | 99.5% during business hours |
| NFR-3 | Security | Role-based access control; audit logging of exports |
| NFR-4 | Compliance | Aligned with KSA data residency and PII rules |
| NFR-5 | Accessibility | WCAG 2.1 AA; full RTL support |
| NFR-6 | Browser Support | Latest Chrome, Edge, Safari, Firefox |
| NFR-7 | Branding | Ministry of Tourism palette: primary greens (#0C4B3A, #1A6854, #2E8B72), teal/purple accents, status semantics |
| NFR-8 | Refresh | Live indicator with near-real-time refresh of operational KPIs |

## 8. Data Sources & Integrations

### 8.1 MTOTAeVisa Authoritative Database

The dashboard is now bound to the **MTOTAeVisa** platform's three operational databases (per `MTOTAeVisa_DatabaseDetails.xlsx`):

| Database | Purpose | Tables (count) |
|---|---|---|
| `OTAEVisa_ESB` | Core operational data: packages, visas, DMCs, payments, masters | 50 |
| `OTAEVisa_App_Attachments` | Document storage for visa applications | 1 (`APPLICATION_ATTACHMENT`) |
| `OTAEVisa_ESB_Logs` | API access, transaction, and tourism package logs | 3 (`OTA_ACCESS_LOG`, `OTA_TOURISMPACKAGELOG`, `TRANSACTIONLOG`) |

**Key tables in `OTAEVisa_ESB`** (selected):
- Package & traveler: `PACKAGE_MASTER`, `VISA_APP_PERSONALDETAILS`, `VISA_APP_PASSPORTRAVEL`, `VISA_APP_PACKAGE_REQUEST_DATA`, `VISA_APP_ACCOMPANYING_SERVICE_DATA`, `DEPENDENTDATA`
- Accommodation & travel: `VISA_APP_ACCOMMODATION_DATA`, `VISA_APP_FLIGHT_DATA`, `HOTEL`, `DEPARTURE_CARRIER`, `ARRIVAL_CARRIER`, `TRANSPORTER`
- Visa & insurance: `VISA_APP_MOFA`, `VISA_APP_MOFA_QUESTIONNAIRE_DATA`, `VISA_APP_INSURANCE`, `VISA_APP_CANCELLATION`
- Partners & auth: `DMC`, `OTA_MASTER`, `OTA_DMC_AUTHORIZATION`, `OTA_DMC_CREDITCARDDETAILS`, `OTA_API_CREDENTIAL`
- Payments: `TOURISM_PACKAGE_PAYMENT_REQUEST`, `TOURISM_PACKAGE_PAYMENT_CONFIRMATION`, `SERVICE_TYPE`
- Reference / masters: `NATIONALITY`, `CITY`, `ENTRY_PORT`, `EXIT_PORT`, `EMBASSY_CODE`, `ADDRESS_COUNTRY`, `BIRTH_COUNTRY`, `ISSUE_COUNTRY`, `PASSPORT_TYPE`, `PASSPORT_ISSUE_COUNTRY`, `PASSPORT_ISSUE_PLACE`, `PURPOSE`, `RELIGION`, `GENDER`, `TITLE`, `SOCIAL_STATUS`, `COMPANION_TYPE`, `REQUEST_TYPE`, `DEGREE`, `API`
- Settings & policy: `ESB_SETTING`, `ESB_SITE_SETTINGS`, `DISCLAIMER`, `PRIVACYPOLICY_EN`, `PRIVACYPOLICY_AR`
- Staging: `OTA_APPLICATION_PROCESSING_STG`

### 8.2 Dashboard Field → Database Column Mapping

| Dashboard Object | Source Table.Column |
|---|---|
| Package ID | `PACKAGE_MASTER.PACKAGE_ID` |
| Package Status | `PACKAGE_MASTER.PACKAGE_STATUS` |
| Total Travelers | `PACKAGE_MASTER.TOTAL_TRAVELERS_COUNT` |
| Total Package Price | `PACKAGE_MASTER.TOTAL_PACKAGE_PRICE` |
| Submission Timestamp | `PACKAGE_MASTER.CREATEDTIMESTAMP` |
| DMC | `DMC.DMC_NAME_EN` (via `PACKAGE_MASTER.DMC_RECORDID`) |
| DMC Status | `DMC.STATUS`, `DMC.IS_QUALIFIED` |
| Nationality | `VISA_APP_PERSONALDETAILS.NATIONALITY` → `NATIONALITY.NATIONALITY_NAME` |
| City of Stay | `VISA_APP_ACCOMMODATION_DATA.CITY` → `CITY.CITY_NAME` |
| Hotel Class (Star) | `VISA_APP_ACCOMMODATION_DATA.HOTEL_CLASSIFICATION` |
| Hotel Name | `HOTEL.HOTEL_NAME` (via `VISA_APP_ACCOMMODATION_DATA.LICENSE_NO`) |
| Hotel Price | `VISA_APP_ACCOMMODATION_DATA.HOTEL_PRICE` |
| Package Duration | `VISA_APP_PACKAGE_REQUEST_DATA.PACKAGE_DURATION` |
| Departure Carrier | `DEPARTURE_CARRIER.CARRIER_NAME` |
| Arrival Carrier | `ARRIVAL_CARRIER.CARRIER_NAME` |
| Flight Price | `VISA_APP_FLIGHT_DATA.FLIGHT_PRICE` |
| Visa Issuance Fee | `TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT` (SERVICE_TYPE = visa issuance) |
| Visa Processing Fee | `TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT` (SERVICE_TYPE = visa processing) |
| Insurance Fee | `TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT` (SERVICE_TYPE = insurance policy) |
| Insurance Provider | `VISA_APP_INSURANCE` provider field |
| Visa Status / Expiry | `VISA_APP_MOFA.VISA_USAGE_STATUS`, `VISA_APP_MOFA.VISA_EXPIRYDATE` |
| Validation Status | `PACKAGE_MASTER.VALIDATION_STATUS`, `OTA_APPLICATION_PROCESSING_STG.APP_STATUS` |
| Cancellation Reason | `VISA_APP_CANCELLATION.CANCELLATIONREASON`, `FE_CANCELLATION_STATUS`, `ERRORCODE` |
| Entry / Arrival Date | `VISA_APP_FLIGHT_DATA.ARRIVAL_FLIGHT_DATE` |
| Passport Number | `VISA_APP_PASSPORTRAVEL.PASSPORTNUMBER` |
| VCC Card Status / Expiry | `OTA_DMC_CREDITCARDDETAILS.STATUS`, `EXPIRY_DATE`, `EXPIRY_REMINDER_COUNT` |
| API Access Logs | `OTA_ACCESS_LOG`, `TRANSACTIONLOG`, `OTA_TOURISMPACKAGELOG` |
| Application Attachments | `APPLICATION_ATTACHMENT` |

### 8.3 External Integrations

| System | Data Provided |
|---|---|
| MOFA | Visa issuance status, visa duration, rejection reasons (mirrored to `VISA_APP_MOFA`) |
| Insurance Authority (IA) | Policy issuance, insurer mapping (mirrored to `VISA_APP_INSURANCE`) |
| Ministry of Interior (MOI) | Entry/exit records, overstay flags (consumed via `ENTRY_PORT`, `EXIT_PORT`, `VISA_APP_MOFA`) |
| DMC / OTA Booking Systems | Package submissions, hotel/flight pricing (`PACKAGE_MASTER`, `VISA_APP_*`) |
| Payment Processors | Fee collection, payment status (`TOURISM_PACKAGE_PAYMENT_REQUEST/_CONFIRMATION`) |
| VCC Card Platform | Virtual card transaction and health telemetry (`OTA_DMC_CREDITCARDDETAILS`) |

## 9. Key Metrics (KPI Catalog) — Definitions & Formulas

All sums apply the active filter context (date range, DMC, nationality, city, payment status, hotel class). Δ% denotes period-over-period change vs. the immediately preceding period of equal length.

### 9.1 Universal Helpers

- **Period-over-period delta (%)**: `Δ% = (Current_Period_Value − Previous_Period_Value) / Previous_Period_Value × 100`
- **Filtered set P**: the set of packages matching all active filters.
- **Filtered set T**: the set of travelers matching all active filters.

### 9.2 Overview KPIs

| KPI | Formula | Source |
|---|---|---|
| Total Packages Submitted | `COUNT(PACKAGE_MASTER.PACKAGE_ID WHERE PACKAGE_STATUS ≠ 'Draft')` | `PACKAGE_MASTER` |
| Total Visas Issued | `COUNT(VISA_APP_MOFA WHERE VISA_USAGE_STATUS = 'Issued')` | `VISA_APP_MOFA` |
| Total Fees Collected (SAR) | `SUM(TOURISM_PACKAGE_PAYMENT_CONFIRMATION.AMOUNT)` | `TOURISM_PACKAGE_PAYMENT_CONFIRMATION` |
| Insurance Policies Issued | `COUNT(VISA_APP_INSURANCE WHERE policy_status = 'Issued')` | `VISA_APP_INSURANCE` |
| Packages Pending | `COUNT(PACKAGE_MASTER WHERE PACKAGE_STATUS ∈ {'Received','Validated','Fees Paid','Processing'})` | `PACKAGE_MASTER` |
| Packages Rejected | `COUNT(PACKAGE_MASTER WHERE PACKAGE_STATUS = 'Rejected')` | `PACKAGE_MASTER` |
| Total DMCs | `COUNT(DISTINCT PACKAGE_MASTER.DMC_RECORDID)` | `PACKAGE_MASTER ⨝ DMC` |
| Cancellation Rate (%) | `COUNT(VISA_APP_CANCELLATION) / COUNT(PACKAGE_MASTER) × 100` | `VISA_APP_CANCELLATION` |

### 9.3 Packages & Financials KPIs

| KPI | Formula |
|---|---|
| Total Package Value (SAR) | `SUM(p.hotel_price + p.flight_price + p.visa_fees + p.processing_fees + p.insurance_fees + p.gov_fees)` |
| Accommodation Value (SAR) | `SUM(p.hotel_price)` |
| Flight Value (SAR) | `SUM(p.flight_price)` |
| Average Package Value (SAR) | `Total_Package_Value / COUNT(p ∈ P)` |
| Daily Submission Volume | `COUNT(p ∈ P WHERE DATE(p.submitted_at) = D)` for each day D in last 30 days |
| Revenue Trend (Monthly) | `SUM(p.gov_fees + p.processing_fees WHERE p.payment_status='Paid' AND MONTH(p.paid_at)=M)` |

### 9.4 Visa & Insurance KPIs

| KPI | Formula |
|---|---|
| Visas Issued (MOFA) | `COUNT(visa WHERE visa.status='Issued' AND visa.source='MOFA')` |
| Visa Pending | `COUNT(visa WHERE visa.status ∈ {'Submitted','Under Review','Awaiting Documents'})` |
| Insurance Policies Issued (IA) | `COUNT(policy WHERE policy.status='Issued' AND policy.source='IA')` |
| Validation Pass Rate (%) | `(Validated / (Validated + Rejected)) × 100` |
| Rejection Rate (%) | `Rejected / Total_Submitted × 100` |
| Government Fees Total (SAR) | `Σ_i (fee_unit_price_i × billable_units_i)` across all fee types |
| Visa Duration Distribution | For each bucket b: `COUNT(visa WHERE visa.duration_days ∈ b) / COUNT(visa) × 100` |

### 9.5 DMC Performance KPIs

| KPI | Formula |
|---|---|
| Active DMCs | `COUNT(DISTINCT dmc WHERE dmc.status='Active' AND ∃ p ∈ P WHERE p.dmc=dmc within period)` |
| Inactive DMCs | `COUNT(dmc WHERE dmc.status='Inactive') OR (no submissions within period)` |
| Total Packages (Active DMCs) | `COUNT(p ∈ P WHERE p.dmc.status='Active')` |
| Revenue (Active DMCs) (SAR) | `SUM(p.gov_fees + p.processing_fees WHERE p.dmc.status='Active' AND p.payment_status='Paid')` |
| Completion Rate by DMC (%) | `(Packages_Completed_DMC / Total_Packages_DMC) × 100` |
| Revenue Contribution by DMC (%) | `Revenue_DMC / Total_Revenue × 100` |
| DMC Leaderboard Rank | `RANK() OVER (ORDER BY (Packages_Completed_DMC × w₁ + Revenue_DMC × w₂ + Completion_Rate_DMC × w₃) DESC)` |

### 9.6 Entry & Cancellations KPIs

| KPI | Formula |
|---|---|
| Travelers Entered KSA | `COUNT(traveler WHERE traveler.entry_timestamp BETWEEN period_start AND period_end)` |
| Travelers Exited KSA | `COUNT(traveler WHERE traveler.exit_timestamp BETWEEN period_start AND period_end)` |
| Currently In-Country | `Travelers_Entered_All_Time − Travelers_Exited_All_Time` (filtered to active visas) |
| Overstay Alerts | `COUNT(traveler WHERE traveler.exit_timestamp IS NULL AND TODAY > traveler.visa_expiry_date)` |
| Package Cancellations | `COUNT(p ∈ P WHERE p.status='Cancelled')` |
| Traveler Cancellations | `SUM(p.travelers_cancelled WHERE p ∈ P)` |
| Overall Cancellation Rate (%) | `(Package_Cancellations / Total_Packages_Submitted) × 100` |
| Average Cancellation Time | `AVG(p.cancelled_at − p.submitted_at WHERE p.status='Cancelled')` (in hours or days) |
| Entry by Port (share %) | `COUNT(traveler WHERE traveler.port_of_entry = X) / Total_Travelers_Entered × 100` |
| Weekly Entry vs Exit | `COUNT(entry WHERE WEEK(entry.timestamp)=W)` and `COUNT(exit WHERE WEEK(exit.timestamp)=W)` |

### 9.7 Integration Health KPIs

| KPI | Formula |
|---|---|
| MOFA Uptime (%) | `(Successful_API_Calls / Total_API_Calls) × 100` over rolling 24h |
| IA Uptime (%) | `(Successful_Policy_Issuances / Attempted_Policy_Issuances) × 100` over rolling 24h |
| VCC Card Health Score | `(Successful_Transactions / Total_Transactions) × 100 − (Declined_Rate × penalty)` |
| Average Visa Processing Time | `AVG(visa.issued_at − visa.submitted_at)` in hours |
| Average Insurance Issuance Time | `AVG(policy.issued_at − policy.requested_at)` in seconds/minutes |

## 10. Assumptions

- Source systems (MOFA, IA, MOI, DMCs) expose data via authenticated APIs or scheduled feeds.
- All monetary values are reconciled and reported in SAR.
- DMC master data (active/inactive registry) is maintained in an authoritative system.
- The dashboard consumes pre-aggregated data; no heavy joins are performed in the browser.

## 11. Constraints

- Bilingual EN/AR is mandatory at launch.
- Data residency must remain within KSA.
- Branding must conform to Ministry of Tourism guidelines.

## 12. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Upstream API outages (MOFA / IA) | KPI staleness | Integration health panels + alerting |
| DMC data quality issues | Misleading leaderboard | Validation rules + exception reporting |
| PII exposure in exports | Compliance breach | Role-based export, audit trail, redaction |
| Translation drift (EN/AR) | UX degradation | Centralized i18n catalog with review |

## 13. Acceptance Criteria

1. All five tabs render with seeded data and respond to filters.
2. All listed KPIs display values, period-over-period deltas, and trend indicators.
3. EN/AR toggle switches the entire UI including chart elements and RTL layout.
4. Recent Package Submissions table supports sorting and reflects active filters.
5. Overstay and VCC reports export successfully to CSV / Excel.
6. Integration status panels reflect live MOFA, IA, and VCC health.
7. Performance and accessibility NFRs verified through QA sign-off.

## 14. Glossary

- **DMC** — Destination Management Company.
- **OTA** — Online Travel Agency.
- **MOFA** — Ministry of Foreign Affairs (visa issuance authority).
- **IA** — Insurance Authority (policy issuance regulator).
- **MOI** — Ministry of Interior (entry/exit and overstay authority).
- **VCC** — Virtual Credit Card used for fee settlement.
- **SAR** — Saudi Riyal.
