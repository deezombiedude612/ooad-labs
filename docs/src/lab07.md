---
title: "Practical 07"
editlink: true
navbar: true
---

# Practical 07: Use-Case Diagrams and Activity Diagrams

::: tip Note
Ensure that you have gone through **Lecture 6: Business Process and Functional Modeling** before attempting this practical.
:::

## Hands-On Tasks

### Task 1: Use-Case Diagram

<div style="margin: 2rem auto 1rem; text-align: center;text-decoration: underline;">
	Automatic Teller Machine (ATM)
</div>

The interactions a person may have with an Automatic Teller Machine system include logging in to make withdrawal requests, deposit requests, and balance inquiry requests.
During the log-in process, on rare occasion the system may swallow (confiscate) the ATM card for reasons like invalid login credentials.
Card confiscation involves triggering an alert to the bank branch manager.

When the person requests for a balance inquiry, it is expected that the system checks for the correct funds balance.
Checking the funds balance is also carried out during withdrawal requests as the system is required to verify that enough money is available for the withdrawal process at the time being.
By principle, this act of checking the funds balance is staple across many use cases throughout the system.

Create a Use-Case Diagram (with minimum 5 use cases) for the above scenario, showing all the actors and appropriate relationships.

### Task 2: Activity Diagram

The following scenario describes how a customer withdraws money from an ATM:

The customer inserts their keycard and enters their PIN.
They then enter the desired amount and whether or not they would like a receipt.
The ATM then checks the keycard details and PIN with the bank authentication server and dispenses the requested amount of cash and the receipt, if requested.

If the keycard is invalid, it is rejected as soon as it is inserted.
If the authentication server rejects the PIN, the user must repeat the process of entering their PIN, withdrawal amount and whether or not they would like a receipt.
You may assume that these are the only exceptions to the common procedure that can occur.

Create a Activity Diagram showing the actions, transitions, and decisions for the given scenario.

## Getting Started

---

::: warning SUBMISSION
**Complete the given practical and submit it as your lecture attendance for Week 8.**
:::
