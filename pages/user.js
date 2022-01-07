import { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';

const prisma = new PrismaClient();

export default function User(props) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const { users } = props;

  async function addUser(data) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      router.replace(router.asPath);
    }
  }

  return (
    <div>
      <input onChange={(e) => setUser({ ...user, firstName: e.target.value })} placeholder="tes" />
      <input onChange={(e) => setUser({ ...user, lastName: e.target.value })} placeholder="tess" />
      <button type="submit" onClick={() => addUser(user)}>submit</button>
      {users.map((x) => (
        <p>
          {x.firstName}
          {' '}
          +
          {x.lastName}
        </p>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      users,
    },
  };
}
