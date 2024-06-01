# Eventhub

## Overview
Eventhub is a web application designed to facilitate event promotion, ticket sales, and purchases. Built with Next.js, Tailwind CSS, and MongoDB, it provides a seamless user experience with integrated authentication and payment processing.

## Features
- **Event Promotion**: Easily create and manage events.
- **Ticket Sales**: Users can purchase tickets securely online.
- **Payment Processing**: Secure payments integrated with Stripe.
- **File Management**: Efficient file management with UploadThing.
- **Version Control**: Active development and deployment with Git and GitHub.


## Installation

First, clone the repository:

```bash
git clone https://github.com/adi-shelke/Event-Hub.git
```

Run the development server
```bash
cd eventhub

npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Setting up environment Variables
* add the below environment variables in .env.local file
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
WEBHOOK_SECRET=your-webhook-secret
MONGODB_URI=your-mongodb-uri
UPLOADTHING_SECRET=your-uploadthing-secret
UPLOADTHING_APP_ID=your-uploadthing-app-id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## Technologies Used
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MongoDB

## Screenshots
### Landing Page
![Landing Page](path/to/landing-page-screenshot.png)

### Authentication Page
![Authentication Page](path/to/authentication-page-screenshot.png)

### Create Event Page
![Create Event Page](path/to/create-event-page-screenshot.png)

### Event Details Page
![Event Details Page](path/to/event-details-page-screenshot.png)

### My Profile Page
![My Profile Page](path/to/my-profile-page-screenshot.png)

## Acknowledgement
I would like to express our gratitude to the open-source community for providing valuable resources and tools, particularly the maintainers of Next.js, Tailwind CSS, MongoDB, Clerk, Stripe, and UploadThing.
