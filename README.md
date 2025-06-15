# TrackSure - Food supply Chain Tracking System

![TrackSure Banner](https://i.ibb.co/0y2RnTVm/Tracksureeee.jpg)

TrackSure is an food supply chain tracking system that ensures enhanced safety and efficiency throughout the food distribution process. This application provides an intuitive interface for different stakeholders in the supply chain.

## 🚀 Features

- **Real-time Tracking**: Monitor shipments with IoT sensors tracking temperature, humidity, and location
- **Enhanced Food Safety**: Ensure compliance with food safety regulations and receive instant alerts
- **Data-Driven Insights**: Advanced analytics for supply chain performance optimization
- **Multi-Role Support**: Dedicated interfaces for Admin, Consumer, Seller, and Transporter roles
- **Responsive Design**: Modern, mobile-friendly UI built with React and Tailwind CSS
- **Real-time Notifications**: Toast notifications for user feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v7
- **State Management**: React Context API
- **Authentication**: Firebase Auth
- **Forms**: React Hook Form with Zod validation
- **Maps**: React Leaflet for location tracking
- **Charts**: Recharts for data visualization
- **UI Components**: Radix UI primitives with shadcn/ui

![TrackSure Shipment](https://i.ibb.co/wvpkYwc/Track-Sure.jpg)

## 📦 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Common components (Header, Theme Provider)
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Page components
│   │   ├── Admin/          # Admin dashboard pages
│   │   ├── Consumer/       # Consumer interface pages
│   │   ├── Home/           # Landing, Sign In, Sign Up pages
│   │   ├── Seller/         # Seller dashboard pages
│   │   └── Transporter/    # Transporter interface pages
│   ├── routes/             # Route configurations
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   ├── schemas/            # Zod validation schemas
│   ├── config/             # Configuration files
│   ├── enums/              # TypeScript enums
│   ├── lib/                # Utility libraries
│   └── assets/             # Static assets
├── public/                 # Public assets
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase project with authentication enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheNoMadDevs/TrackSure.git
   cd TrackSure/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the sample environment file and configure your Firebase settings:
   ```bash
   cp sample.env .env
   ```
   
   Update `.env` with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔐 User Roles

The application supports four distinct user roles:

1. **Admin**: System administration and oversight
2. **Consumer**: End-users tracking their food purchases
3. **Seller**: Food vendors and retailers
4. **Transporter**: Logistics and shipping providers

Each role has protected routes and dedicated interfaces tailored to their specific needs.

![Consumer](https://github.com/user-attachments/assets/03f66390-8960-4138-8021-bfea06a6450c)
![Transporter](https://github.com/user-attachments/assets/81d53480-bbce-42f0-aa63-8bc72a05dc28)
![Seller](https://github.com/user-attachments/assets/ccd00913-45ff-4b5f-9d6b-252edd21d599)
![Admin](https://github.com/user-attachments/assets/4248c2e0-5dfe-4f50-b198-dc74a52cc0ae)


## 🎨 UI Components

The application uses shadcn/ui components built on top of Radix UI primitives, providing:

- Consistent design system
- Accessibility compliance
- Customizable theming
- Responsive components

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration in `tailwind.config.ts` for:
- Custom color schemes
- Typography settings
- Animation utilities

### TypeScript
TypeScript configuration is set up with:
- Strict mode enabled
- Path aliases configured
- Modern ES modules support

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Environment Setup

Ensure all environment variables are properly configured for your production environment before deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
