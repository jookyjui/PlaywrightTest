# Playwright Login Automation Framework

This project automates the login functionality of the Practice Test Automation website using Playwright with JavaScript.

Application Under Test:

https://practicetestautomation.com/practice-test-login/

---

# Tech Stack

- Playwright
- JavaScript
- Node.js

---

# Framework Features

- Page Object Model (POM)
- Playwright Fixtures
- JSON Test Data
- HTML Reporting
- Trace Viewer Support
- Tag-Based Execution
- Scalable Folder Structure

---

# Project Structure

```plaintext
project-root/
│
├── tests/
│   ├── login-positive.spec.js
│   └── login-negative.spec.js
│
├── pages/
│   └── LoginPage.js
│
├── utils/
│   └── fixtures/
│       └── loginFixtures.js
│
├── data/
│   └── testdata.json
│
├── playwright-report/
├── test-results/
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Run Tests

## Execute All Tests

```bash
npx playwright test
```

---

## Execute Specific Test File

```bash
npx playwright test tests/login-positive.spec.js
```

---

## Execute Tests in Headed Mode

```bash
npx playwright test --headed
```

---

# Tag-Based Execution

## Run specific Tests

```bash
#for example use tag @positive for executing positive tests and @negative for executing negative tests
npx playwright test --grep "@tagname"
#for executing all login test cases use tag @login
npx playwright test --grep "@login"
```
## Open Playwright HTML Report
```bash
npx playwright show-report
```

## Trace Viewer

Trace files are automatically captured for failed tests.

## Open Trace File

```bash
npx playwright show-trace trace.zip
```

---

# Functional Test Cases

## Positive Test Cases

| Test Case ID | Test Scenario | Expected Result |
|---|---|---|
| TC001 | Verify login using valid username and valid password and logout | User should login successfully |
| TC002 | Verify login Success Message | "Logged In Successfully" message should appear |
| TC003 | Verify login success URL | URL should contain `logged-in-successfully` |
| TC004 | Verify Logout button visibility after login | Logout button should be visible |
| TC005 | Verify session persistence after page refresh | User should remain logged in |

---

## Negative Test Cases

| Test Case ID | Test Scenario | Expected Result |
|---|---|---|
| TC006 | Verify login with Invalid Username and Valid Password | Proper username error message should appear |
| TC007 | Verify login with Valid Username and Invalid Password | Proper password error message should appear |
| TC008 | Verify login with empty username | Validation/error message should appear |
| TC009 | Verify login with empty password | Validation/error message should appear |
| TC010 | Verify login with empty username and password | Validation/error message should appear |

---

# Automated Test Coverage

The following test cases are automated using Playwright:

- TC001
- TC002
- TC003
- TC006
- TC007

---

# Author

Jui Kulkarni