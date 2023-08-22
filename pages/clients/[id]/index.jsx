import { useRouter } from 'next/router';

const ClientsProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    router.push({
      pathname: '/clients/[id]/[projectid]',
      query: { id: 'max', clientprojectid: 'projecta' },
    });
  };

  return (
    <>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  );
};

export default ClientsProjectsPage;
