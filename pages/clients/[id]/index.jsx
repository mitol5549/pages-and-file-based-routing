import { useRouter } from 'next/router';

const ClientsProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <>
      <h1>The Projects of a Given Client</h1>
    </>
  );
};

export default ClientsProjectsPage;
