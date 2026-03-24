# Drift Detection Report

**Lab:** Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** ba442d55-1b2c-4be1-8139-63f81b308006
**Status:** FAILED
**Duration:** 77s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 13 |
| Passed | 0 |
| Drift Detected | 0 |
| Failed | 13 |
| Skipped (API errors) | 0 |

### Drift by Category

- **missing_element**: 13

## Drift Issues

### step-1-sign-in-portal-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-2-navigate-entra-id-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID. Take a few minutes to familiarize yourself with some of th...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-3-explore-tenants-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-3-explore-tenants
- **Instruction:** Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing b...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-4-navigate-users-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-4-navigate-users
- **Instruction:** In the Manage blade, select Users; then in the New user drop-down select Create new user....
- **Actual:** This agent does not have Playwright MCP or browser control tools. These lab steps require the runner-mcp-drift.ts pipeline with Playwright MCP configured. Steps cannot be executed from a terminal-only session.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-5-create-new-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-5-create-new-user
- **Instruction:** Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate pa...
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-6-verify-user-creation-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-6-verify-user-creation
- **Instruction:** Refresh the page and confirm your new user was created....
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-7-invite-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-7-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-8-navigate-groups-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-8-navigate-groups
- **Instruction:** In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups....
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-9-create-new-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-9-create-new-group
- **Instruction:** In the All groups blade, select + New group and create a new group with Group type: Security, Group ...
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-10-add-group-owners-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-10-add-group-owners
- **Instruction:** Select No owners selected. In the Add owners page, search for and select yourself (shown in the top ...
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-11-add-group-members-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-11-add-group-members
- **Instruction:** Select No members selected. In the Add members pane, search for and select the az104-user1 and the g...
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-12-deploy-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-12-deploy-group
- **Instruction:** Select Create to deploy the group....
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-13-verify-group-creation-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-13-verify-group-creation
- **Instruction:** Refresh the page and ensure your group was created. Select the new group and review the Members and ...
- **Actual:** Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

## Step Details

### ❌ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** failed
**Duration:** 16s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-3-explore-tenants: Explore Tenant Management

**Status:** failed
**Duration:** 13s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-4-navigate-users: Navigate to Users Section

**Status:** failed
**Duration:** 8s

**Drift Issues:**
- missing_element: This agent does not have Playwright MCP or browser control tools. These lab step...

### ❌ step-5-create-new-user: Create New User az104-user1

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....

### ❌ step-6-verify-user-creation: Verify New User Creation

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....

### ❌ step-7-invite-external-user: Invite External User

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....

### ❌ step-8-navigate-groups: Navigate to Groups Section

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....

### ❌ step-9-create-new-group: Create Security Group

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....

### ❌ step-10-add-group-owners: Add Group Owners

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....

### ❌ step-11-add-group-members: Add Group Members

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....

### ❌ step-12-deploy-group: Deploy the Group

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....

### ❌ step-13-verify-group-creation: Verify Group Creation and Review Members

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps....
