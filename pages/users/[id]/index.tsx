import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

export default function UserPage({ user }) {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <h1>{user.name} {id}</h1>
      <Link href={'/users'}>
        Back to users
      </Link>
    </div>
  )
}

export const getStaticPaths = async () => {
  const users = await fetch('https://users-board-api.onrender.com/users')
    .then(res => res.json());

  const paths = users.rows.map(user => ({
    params: {
      id: user.id.toString(),
    }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;

  const user = await fetch(`https://users-board-api.onrender.com/users/${id}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }

      return null;
    });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    }
  };
};
