import React from 'react';
import { useAuth } from '../auth/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome, {user ? user.email : 'Guest'}!</h2>
      {/* แสดงข้อมูลอื่น ๆ ที่คุณต้องการ */}
    </div>
  );
};

export default Home;
