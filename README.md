# KlirProjectAnswer

# Test Plan

**Water Customer App**

*versão 1.0*

## Document Revision History

   Data    | Versão |    Descrição          | Autor(a)
-----------|--------|-----------------------|-----------------
05/21/2024 |  1.0   | Test plan was created | João Araruna


## 1 - Introduction

This document describes the requirements to test, the levels and types of tests defined, the software and hardware resources that will be used during the project and all activities involved.

## 2 - Requirements to test

 Functional Requirement Id    | Functional Requirement Description |   
-----------|--------|
FR1 | User must be able to be able to access the application   |
FR2 | User must be able to be able to access list of customers   |
FR3 | User must be able to be able to access the customer details   |

## 3 - Test cases

Functional Requirement Id | Test Case Id | Test Case Description
-----------------|--------------|----------------------|
| FR1 | TC1 | Verify that the user access the application
| FR2 | TC2 | Verify that the user access the list of customers filling the name
|     | TC3 | Verify that the user don’t access the list of customers without filling the name
|     | TC4 | Verify that the # of employees is according of a customer who has a big size
|     | TC5 | Verify that the # of employees is according of a customer who has a medium size
|     | TC6 | Verify that the # of employees is according of a customer who has a small size
| FR3 | TC7 | Verify that the user is able to access the details of a customer who has a big size
|     | TC8 | Verify that the user is able to access the details of a customer who has a medium size
|     | TC9 | Verify that the user is able to access the details of a customer who has a small size
|     | TC10 | Verify that the user is able to access the details of a customer that doesn’t have contact information
|     | TC11 | Verify that the user is able to return to customers list from customers details 

## 4 - Levels and Types of Test

Objective: | Focus on general behavior of the interface application evaluating the functionalities that the application has to execute. |   
-----------|--------|
 Test level:|System testing|
 Test type: |User Interface Functional Testing|
 Execution: |Manual and Automatic|

 Objective: | Focus on general behavior of the backend application evaluating the functionalities that the application has to execute. |   
-----------|--------|
 Test level:|System testing|
 Test type: |API Functional Testing|
 Execution: |Automatic|

## 5 - Resources

Tool | Description |   
-----------|--------|
 Visual Studio Code|Code editor|
 Cypress |Test tool for test User interface and API test automation|
 Nodejs |Tool to install cypress|
 Git |Tool for version control|
 Microsoft Word |To create the test report for each test case|
 Docker | Tool to start the application to be tested|

 ## 6 - Activities

### 6.1 - Test planning
&ensp; 6.1.1 - Define objectives and test approach
### 6.2 - Test analysis
&ensp; 6.2.1 - Analyses test base appropriate to the test level <br />
&ensp; 6.2.2 - Identify testable resources
### 6.3 - Test design
&ensp; 6.3.1 - Define test cases <br />
&ensp; 6.3.2 - Identify items of coverage <br />
&ensp; 6.3.3 - Create the test automation environment project 
### 6.4 - Test implementation
&ensp; 6.4.1 - Create steps of test cases <br />
&ensp; 6.4.2 - Create the test automation environment <br />
&ensp; 6.4.3 - Create of automated test scripts
### 6.5 - Test execution
&ensp; 6.5.1 - Record results <br />
&ensp; 6.5.2 - Analyze bugs
### 6.6 - Test completion
&ensp; 6.6.1 - Create a test completion report 
### 6.7 - Test monitoring and control
&ensp; 6.7.1 - Continuous verification of testing activities <br />
&ensp; 6.7.2 - Actions to meet test objectives
