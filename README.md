# Stockly

Stockly is a modern web application designed for managing stock and inventory efficiently. The app is built with Next.js, TypeScript, and TailwindCSS, and incorporates several other powerful libraries to enhance the user experience.

## Features

- Manage inventory and stock data.
- Responsive UI with TailwindCSS.
- Built-in server-side rendering and API handling via Next.js.
- Integrated with Prisma for database interactions.
- Form validation using React Hook Form and Zod.

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 18 or later)
- [Docker](https://www.docker.com/) (for running the server)
- [Git](https://git-scm.com/)

---

## Getting Started

### Clone the Repository

To clone the project from GitHub, use the following commands:

```bash
# Clone the repository
git clone https://github.com/TamirisCss/stockly.git

# Navigate to the project directory
cd stockly
```

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory and configure the necessary environment variables. For Prisma and database connections, refer to the [Prisma documentation](https://www.prisma.io/docs) for guidance.

### Run the Application

Start the development server using:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Running with Docker

### Build Docker Image

Run the following command to build the Docker image:

```bash
docker build -t stockly .
```

### Run the Docker Container

Start the container with:

```bash
docker run -p 3000:3000 stockly
```

---

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Database:** [Prisma](https://www.prisma.io/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/)

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

## Contact

For inquiries or support, contact me at tamiris.css@gmail.com
