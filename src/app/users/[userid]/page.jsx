import React from 'react';

const UserDetailPage = async ({ params }) => {
  const { userid } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`,
  );
  const user = await res.json();
  console.log('show me user id : ', userid);

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserDetailPage;
