# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 5c1afceb-91ce-42e5-a0d3-333983937932
**Status:** FAILED
**Duration:** 7458s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 15 |
| Passed | 4 |
| Drift Detected | 1 |
| Failed | 10 |
| Skipped (API errors) | 0 |

### Drift by Category

- **missing_element**: 10
- **selector_drift**: 2
- **unexpected_ui**: 1

## Drift Issues

### step-1-sign-in-portal-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** Account has no active Azure subscription. The portal presents subscription options instead of the expected dashboard. The "Cancel" button referenced in the instructions only appears on accounts WITH a subscription.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-1-sign-in-portal-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** The portal shows a full-page "Welcome to Azure!" with subscription signup cards (Free trial, Entra ID, Azure for Students). This is NOT the dismissible splash modal with a "Cancel" button described in the instructions — it's the no-subscription landing page.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-1-sign-in-portal-unexpected

- **Category:** unexpected_ui
- **Severity:** warning
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** The "Welcome to Azure!" page is a full-page view (not a dismissible modal) with no Cancel button. A human on this account would see the same thing.
- **Recommendation:** Consider documenting this UI element in instructions

### step-2-navigate-entra-id-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID. Microsoft Entra ID is Azure's cloud-based identity and acc...
- **Actual:** A "Give feedback to Microsoft" popup appeared in the top-right corner asking about portal satisfaction — informational only, does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-3-explore-overview-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-3-explore-overview
- **Instruction:** Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing b...
- **Actual:** "Manage tenants" is a toolbar button, not a tab
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-3-explore-overview-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-3-explore-overview
- **Instruction:** Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing b...
- **Actual:** Entra admin center banner + auth methods migration alert (informational)
- **Recommendation:** Informational UI element - does not affect lab completion

### step-4-access-user-creation-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-4-access-user-creation
- **Instruction:** In the Manage blade, select Users; then in the New user drop-down select Create new user....
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-5-create-internal-user-basics-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-5-create-internal-user-basics
- **Instruction:** Create a new user with User principal name az104-user1, Display name az104-user1, Auto-generate pass...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-6-configure-user-properties-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-6-configure-user-properties
- **Instruction:** On the Properties tab notice all the different types of information that can be included in the user...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-7-create-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-7-create-user
- **Instruction:** Once you have finished reviewing, select Review + create and then Create. Refresh the page and confi...
- **Actual:** Prerequisite steps 4-6 did not complete (automation session timeout)
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-9-configure-external-user-basics-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-9-configure-external-user-basics
- **Instruction:** Set Email to your email address, Display name to your name, check Send invite message box, Message W...
- **Actual:** Prerequisite step 8 did not complete (automation session timeout)
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-10-configure-external-user-properties-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-10-configure-external-user-properties
- **Instruction:** Move to the Properties tab. Complete the basic information, including Job title IT Lab Administrator...
- **Actual:** Prerequisite steps 8-9 did not complete
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-13-assign-group-owners-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-13-assign-group-owners
- **Instruction:** Select No owners selected. In the Add owners page, search for and select yourself (shown in the top ...
- **Actual:** Prerequisite step 12 did not complete
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-14-add-group-members-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-14-add-group-members
- **Instruction:** Select No members selected. In the Add members pane, search for and select the az104-user1 and the g...
- **Actual:** Prerequisite step 12 did not complete
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-15-deploy-and-verify-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-15-deploy-and-verify-group
- **Instruction:** Select Create to deploy the group. Refresh the page and ensure your group was created. Select the ne...
- **Actual:** Prerequisite steps 12-14 did not complete
- **Recommendation:** Update lab instructions - element may have been removed or renamed

## Step Details

### ❌ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** failed
**Duration:** 413s

**Drift Issues:**
- missing_element: Account has no active Azure subscription. The portal presents subscription optio...
- selector_drift: The portal shows a full-page "Welcome to Azure!" with subscription signup cards ...
- unexpected_ui: The "Welcome to Azure!" page is a full-page view (not a dismissible modal) with ...

### ✅ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** passed
**Duration:** 362s

**Drift Issues:**
- unexpected_ui: A "Give feedback to Microsoft" popup appeared in the top-right corner asking abo...

### ⚠️ step-3-explore-overview: Explore Entra ID Overview and Tenants

**Status:** drift
**Duration:** 1301s

**Drift Issues:**
- selector_drift: "Manage tenants" is a toolbar button, not a tab...
- unexpected_ui: Entra admin center banner + auth methods migration alert (informational)...

### ❌ step-4-access-user-creation: Access User Creation

**Status:** failed
**Duration:** 2487s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-5-create-internal-user-basics: Configure Basic User Information

**Status:** failed
**Duration:** 1035s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-6-configure-user-properties: Configure User Properties

**Status:** failed
**Duration:** 1097s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-7-create-user: Review and Create User

**Status:** failed
**Duration:** 15s

**Drift Issues:**
- missing_element: Prerequisite steps 4-6 did not complete (automation session timeout)...

### ✅ step-8-start-external-invite: Start External User Invitation

**Status:** passed
**Duration:** 10s

### ❌ step-9-configure-external-user-basics: Configure External User Basic Information

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: Prerequisite step 8 did not complete (automation session timeout)...

### ❌ step-10-configure-external-user-properties: Configure External User Properties

**Status:** failed
**Duration:** 7s

**Drift Issues:**
- missing_element: Prerequisite steps 8-9 did not complete...

### ✅ step-11-navigate-to-groups: Navigate to Groups Management

**Status:** passed
**Duration:** 232s

### ✅ step-12-create-new-group: Create New Security Group

**Status:** passed
**Duration:** 478s

### ❌ step-13-assign-group-owners: Assign Group Owners

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: Prerequisite step 12 did not complete...

### ❌ step-14-add-group-members: Add Members to Group

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: Prerequisite step 12 did not complete...

### ❌ step-15-deploy-and-verify-group: Deploy and Verify Group Creation

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: Prerequisite steps 12-14 did not complete...
