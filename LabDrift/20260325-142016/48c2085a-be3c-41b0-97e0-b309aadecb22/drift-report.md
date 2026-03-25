# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 48c2085a-be3c-41b0-97e0-b309aadecb22
**Status:** DRIFT_DETECTED
**Duration:** 7985s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 8 |
| Passed | 3 |
| Drift Detected | 4 |
| Failed | 0 |
| Skipped (API errors) | 1 |

### Drift by Category

- **selector_drift**: 3
- **unexpected_ui**: 1

## Drift Issues

### step-1-sign-in-portal-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** The instructions describe a "Welcome to Azure splash screen" with a Cancel button (a guided tour overlay). Instead, the portal loaded directly to the home page showing "欢迎使用 Azure!" with subscription setup options. No dismissible splash/tour overlay appeared. This is likely because the welcome tour does not appear for returning users who have previously dismissed it — a human following these instructions for the second time would see the same behavior.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-2-navigate-entra-explore-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-2-navigate-entra-explore
- **Instruction:** Search for and select Microsoft Entra ID. Select the Overview blade and then the Manage tenants tab....
- **Actual:** The instructions say "Manage tenants tab" but it is a command bar button in the toolbar (alongside "+ Add", "What's new", "Preview features"), not a content-area tab. The actual content-area tabs are: Overview, Monitor, Properties, Recommendations, Setup Guide. A human looking for a "Manage tenants tab" within the tab strip would not find it there — they need to look at the command bar toolbar above.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-2-navigate-entra-explore-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-2-navigate-entra-explore
- **Instruction:** Search for and select Microsoft Entra ID. Select the Overview blade and then the Manage tenants tab....
- **Actual:** An informational banner appears on the Overview page about trying the new Microsoft Entra admin center. Does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-4-invite-external-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-4-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** The form wizard includes an "Assignments" tab (分配) between Properties and Review+invite that is not mentioned in the lab instructions. The form also has additional optional fields not in instructions: "CC Recipients" (抄送收件人) and "Invite Redirect URL" (邀请重定向 URL), both pre-populated with defaults.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-4-invite-external-user-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-4-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** Informational banner on Basics tab: "Starting December 2025, B2B invitation emails will be sent from your organization's primary domain instead of Microsoft.com." Does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-5-verify-users-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-5-verify-users
- **Instruction:** Refresh the page and confirm the invited user was created....
- **Actual:** The info banner "Azure Active Directory 现在是 Microsoft Entra ID" (Azure Active Directory is now Microsoft Entra ID) persists on the Users page. Informational only, does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-6-navigate-groups-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-6-navigate-groups
- **Instruction:** Search for and select Microsoft Entra ID. In the Manage blade, select Groups. Take a minute to famil...
- **Actual:** An informational banner appears at the top promoting the new Microsoft Entra admin center: "Microsoft Entra 是有更简单的集成体验，用于管理所有身份和访问管理需求。试用新的 Microsoft Entra 管理中心!" This is informational and does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-8-verify-group-unexpected

- **Category:** unexpected_ui
- **Severity:** warning
- **Step:** step-8-verify-group
- **Instruction:** Refresh the page and ensure your group was created. Select the new group and review the Members and ...
- **Actual:** An automatic service principal "AAD Request Verification Service - PROD" appears as a group member that was not manually added. This is auto-added by Azure and a human user would also see it. The Owners list shows 2 owners (az104-user1 was also added as owner in addition to Zhang Rudolf) — this may differ from the instructions which only mention adding yourself as owner.
- **Recommendation:** Consider documenting this UI element in instructions

## Step Details

### ⚠️ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** drift
**Duration:** 247s

**Drift Issues:**
- selector_drift: The instructions describe a "Welcome to Azure splash screen" with a Cancel butto...

### ⚠️ step-2-navigate-entra-explore: Navigate and Explore Entra ID

**Status:** drift
**Duration:** 1253s

**Drift Issues:**
- selector_drift: The instructions say "Manage tenants tab" but it is a command bar button in the ...
- unexpected_ui: An informational banner appears on the Overview page about trying the new Micros...

### ❌ step-3-create-user-az104: Create User az104-user1

**Status:** skipped
**Duration:** 3035s

### ⚠️ step-4-invite-external-user: Invite External User

**Status:** drift
**Duration:** 1248s

**Drift Issues:**
- selector_drift: The form wizard includes an "Assignments" tab (分配) between Properties and Review...
- unexpected_ui: Informational banner on Basics tab: "Starting December 2025, B2B invitation emai...

### ✅ step-5-verify-users: Verify Users Created

**Status:** passed
**Duration:** 235s

**Drift Issues:**
- unexpected_ui: The info banner "Azure Active Directory 现在是 Microsoft Entra ID" (Azure Active Di...

### ✅ step-6-navigate-groups: Navigate to Groups

**Status:** passed
**Duration:** 112s

**Drift Issues:**
- unexpected_ui: An informational banner appears at the top promoting the new Microsoft Entra adm...

### ✅ step-7-create-group-complete: Create IT Lab Administrators Group

**Status:** passed
**Duration:** 1701s

### ⚠️ step-8-verify-group: Verify Group Creation

**Status:** drift
**Duration:** 156s

**Drift Issues:**
- unexpected_ui: An automatic service principal "AAD Request Verification Service - PROD" appears...
