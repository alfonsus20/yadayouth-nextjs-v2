
# Yada Youth Official Website (Newest Version)

This is the official frontend repository for yadayouth's official website.

## Run Locally

Clone the project

```bash
  git clone https://github.com/yadayouthid/yadayouth-nextjs-v2
```

Go to the project directory

```bash
  cd yadayouth-nextjs-v2
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

## Project Structure
| Folder Name | Description                            |
|-------------|----------------------------------------|
| .github     | CI/CD configuration                    |
| mocks       | mock files for unit test               |
| api         | axios instance                         |
| components  | reusable components                    |
| hooks       | custom hooks                           |
| models      | functions for API calls                |
| pages       | files and folders for routing          |
| public      | static assets such as fonts and images |
| styles      | scss files                             |
| types       | types for entities and API response    |
| utils       | helper and constants                   |

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

To see the testing coverage, run the following command

```bash
  yarn test:coverage
```

## Contribution Workflow
![YadaYouth Contributing drawio (1)](https://user-images.githubusercontent.com/95601279/175853203-f4e76382-c5fa-4a2f-9384-b1c30408bfcb.png)


## Tech Stack

**Client:** React, Next, Typescript, TailwindCSS

**Server:** Python, Django

