# Escrow App with Pi Network

This is a simple escrow application integrated with the Pi Network for authentication and payment handling.

## Features
- User authentication using the Pi Network.
- Escrow management for transactions using Pi cryptocurrency.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/escrow-app-pi.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your Pi App ID:
   ```
   NEXT_PUBLIC_PI_APP_ID=your-pi-app-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Deployment

To deploy the app on platforms like Vercel, ensure you set the environment variable `NEXT_PUBLIC_PI_APP_ID` in the platform's settings.

## Notes

- Replace placeholder values (e.g., `seller_pi_username`) with actual data in production.
- Use proper backend storage for escrow data instead of the in-memory storage used here.

Happy coding!