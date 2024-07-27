## Emergency Response App

### Description
This MERN stack application provides a platform for users to quickly report emergencies and be directed to the nearest relevant facility.

### Features
* User Interface: Simple and intuitive design with three main emergency buttons: Hospital, Fire, Police.
* Geolocation: Determines user's location and directs them to the nearest facility based on their selected emergency.
* Admin Dashboard: Provides analytics and visualization of emergency data, including hotspot identification.

### Tech Stack
* **Frontend:** React
* **Backend:** Node.js, Express.js, Python
* **Database:** MongoDB

### Installation
1. Clone the repository.
2. cd frontend
3. Install dependencies: `npm install`
4. cd backend
5. Install dependencies: `npm install`
6. Start the development server (backend): `npm run test`
7. Start the development server (frontend): `npm run dev`
8. Start the development server (python): `py flask_backend.py`
 
### Usage
* User selects an emergency type.
* Application determines user's location and displays nearest facility.
* Admin can access dashboard to view analytics and hotspots.

### Additional Notes
* For production deployment, consider using environment variables for configuration.
* Implement robust error handling and security measures.
* Optimize performance for large datasets and high traffic.
