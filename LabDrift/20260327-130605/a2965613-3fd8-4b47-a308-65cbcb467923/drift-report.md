# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** a2965613-3fd8-4b47-a308-65cbcb467923
**Status:** DRIFT_DETECTED
**Duration:** 5565s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 8 |
| Passed | 4 |
| Drift Detected | 4 |
| Failed | 0 |
| Skipped (API errors) | 0 |

### Drift by Category

- **selector_drift**: 4

## Drift Issues

### step-1-signin-portal-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-signin-portal
- **Instruction:** Sign in to the Azure portal at https://portal.azure.com. Select Cancel on the Welcome to Azure splas...
- **Actual:** The instructions say "Select Cancel on the Welcome to Azure splash screen." The portal now shows a "Welcome to Azure!" home page with subscription option cards (Free trial, Manage Entra ID, Azure for Students) — this is the default home page, not a dismissable overlay. There is no Cancel button. A human user would simply proceed.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-4-create-new-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-4-create-new-user
- **Instruction:** In the Manage blade, select Users, then in the New user drop-down select Create new user. Create a n...
- **Actual:** The create form uses a tabbed layout (Basics, Properties, Assignments, Review + create). Job title, Department, and Usage location are on the "Properties" tab. Usage location requires scrolling within the Properties tab.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-5-invite-external-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-5-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Enter your email address, your name as dis...
- **Actual:** The dropdown option is labeled "Invite external user" rather than "Invite an external user" as described in the instructions (minor wording difference). The form uses a tabbed layout: Basics, Properties, Assignments, Review + invite. The instructions mention "Review + invite" and "Invite" which match correctly.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-5-invite-external-user-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-5-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Enter your email address, your name as dis...
- **Actual:** A "Give feedback to Microsoft" popup appeared in the top-right corner asking about satisfaction with portal.azure.com. This is informational only and did not block any actions.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-6-navigate-groups-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-6-navigate-groups
- **Instruction:** In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups. T...
- **Actual:** The left pane shows: Overview, All groups, Insights (Preview), Deleted groups, Diagnose and solve problems, Settings, Activity, Troubleshooting + Support. The instructions mention "Expiration and Naming policy options" as separate items in the left pane, but these are not visible as top-level menu items — they are likely nested under "Settings" now. A human user would need to expand or click "Settings" to find Expiration and Naming policy.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-6-navigate-groups-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-6-navigate-groups
- **Instruction:** In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups. T...
- **Actual:** An informational banner at the top reads "Microsoft Entra has a simpler, integrated experience for managing all your Identity and Access Management needs. Try the new Microsoft Entra admin center!" — informational only, not blocking.
- **Recommendation:** Informational UI element - does not affect lab completion

## Step Details

### ⚠️ step-1-signin-portal: Sign in to Azure Portal

**Status:** drift
**Duration:** 1705s

**Drift Issues:**
- selector_drift: The instructions say "Select Cancel on the Welcome to Azure splash screen." The ...

### ✅ step-2-navigate-entra: Navigate to Microsoft Entra ID

**Status:** passed
**Duration:** 147s

### ✅ step-3-explore-overview: Explore Overview and Tenant Management

**Status:** passed
**Duration:** 86s

### ⚠️ step-4-create-new-user: Create New User Account

**Status:** drift
**Duration:** 1452s

**Drift Issues:**
- selector_drift: The create form uses a tabbed layout (Basics, Properties, Assignments, Review + ...

### ⚠️ step-5-invite-external-user: Invite External User

**Status:** drift
**Duration:** 196s

**Drift Issues:**
- selector_drift: The dropdown option is labeled "Invite external user" rather than "Invite an ext...
- unexpected_ui: A "Give feedback to Microsoft" popup appeared in the top-right corner asking abo...

### ⚠️ step-6-navigate-groups: Navigate to Groups Section

**Status:** drift
**Duration:** 77s

**Drift Issues:**
- selector_drift: The left pane shows: Overview, All groups, Insights (Preview), Deleted groups, D...
- unexpected_ui: An informational banner at the top reads "Microsoft Entra has a simpler, integra...

### ✅ step-7-create-security-group: Create Security Group with Members

**Status:** passed
**Duration:** 1077s

### ✅ step-8-verify-group-creation: Verify Group Creation and Membership

**Status:** passed
**Duration:** 271s
