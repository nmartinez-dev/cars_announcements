'use client';

import useSWR from 'swr';
import { rest } from '@/rest/rest';
import Loading from '@/common/loading/loading';
import { endpoints } from '@/constants/endpoints';
import { alertDefault, alertList } from '@/common/alert/alert';
// import Grid from './test';
import { DataTable } from './components/table/table';
import { columns } from './components/table/columns';

const Home = () => {
  const { data, error } = useSWR(endpoints.list, rest);

  if (error) return alertDefault();

  if (!data) return <Loading />;

  if (data.announcements.responseStatus !== 'Ok') return alertList();

  console.log('%c data: ', 'background-color: lightgreen; color: black;', data);

  return (
    <div className='m-5'>
      <h5>{data.pageContent.topContent[0].title}</h5>
      <h5>{data.pageContent.topContent[0].description}</h5>
      {/* <Grid /> */}
      <DataTable columns={columns} data={data.announcements.announcements} />

      <h5>{data.pageContent.topContent[0].title}</h5>
      <h5>{data.pageContent.topContent[0].description}</h5>
    </div>
  );
};

export default Home;
