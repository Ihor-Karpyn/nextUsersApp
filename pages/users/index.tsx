import React from 'react';
import Link from 'next/link';

export default function UsersPage({ users }) {
  return (
    <div>
      <h1>Users</h1>

      <Link href={'/'}>
        Back to home
      </Link>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = async () => {
  const users = await fetch('https://users-board-api.onrender.com/users')
    .then(res => res.json());

  return {
    props: {
      users: users.rows,
    }
  };
};
