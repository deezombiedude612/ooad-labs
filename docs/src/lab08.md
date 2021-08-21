---
title: "Practical 08"
editlink: true
navbar: true
---

# Practical 08: Class Diagrams; Class & Method Design

::: tip Note
Ensure that you have gone through **Lecture 7: Structural Modeling** and **Lecture 8: Class and Method Design** before attempting this practical.
:::

## Theoretical Questions

1. Define the following terms:

   - Coupling
   - Cohesion
   - Connascence

   **Remember:** Good software design has high cohesion and low coupling.

2. Interaction coupling deals with coupling among methods and objects through message passing. Lieberherr and Holland put forth the Law of Demeter as a guideline to minimize this type of coupling.

   What is the Law of Demeter?

3. What are **SIX (6)** types of interaction coupling?

4. What are **SEVEN (7)** types of method cohesion?

5. What are **FOUR (4)** types of class cohesion?

## Hands-On Task: Class Diagram

<!-- ### Task 1 -->

<div style="margin: 2rem auto 1rem; text-align: center;text-decoration: underline;">
	University
</div>

The following gives a simplified description of a scenario in a university where professors teach seminars in which students enroll.

A professor has a name, address, phone number, e-mail address and salary.
A student also has a name, address, phone number and e-mail address, but no salary.
A student, however, has an average mark (of the final marks of his or her seminars).
A seminar has a name and a number.
When a student is enrolled in a seminar, the marks for this enrolment are recorded and the current average as well as the final mark (if there is one) can be obtained from the enrolment.
From a student, one can obtain a list of seminars he or she is enrolled in.
Professors teach seminars.
Each seminar has at least and at most three teachers.
There are two types of seminars: Bachelor seminars and Master seminars.
Students cannot withdraw from a Bachelor seminar, but they can do so from a Master seminar.

Draw a Class Diagram for the above scenario. Add attributes, multiplicity, operation, class relationships and methods when necessary.

## Getting Started

---

::: warning SUBMISSION
**Complete the given practical and submit it as your lecture attendance for Week 10.**
:::
