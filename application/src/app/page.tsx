'use client';

import useSWR from 'swr';
import { rest } from '@/rest/rest';
import Loading from '@/common/loading/loading';
import { endpoints } from '@/constants/endpoints';
import { alertDefault, alertList } from '@/common/alert/alert';
import { DataTable } from './components/table/table';
import { columns } from './components/table/columns';
import { useEffect, useState } from 'react';
import { Announcement } from './components/table/columns';

const Home = () => {
  const [rows, setRows] = useState<Announcement[]>([]);

  const { data, error } = useSWR(endpoints.list, rest);

  useEffect(() => {
    if (data) {
      const row = data.announcements.announcements.map(
        (item: Announcement) => ({
          mainImage: item.mainImage,
          reservationLabelCode: item.reservationLabelCode,
          salePriceGross: item.salePriceGross,
          make: item.make,
          model: item.model,
          registrationYear: item.details.registrationYear,
          trim: item.trim,
          gearbox: item.details.gearbox,
          mileage: item.details.mileage,
        })
      );

      setRows(row);
    }
  }, [data]);

  if (error) return alertDefault();

  if (!data) return <Loading />;

  if (data.announcements.responseStatus !== 'Ok') return alertList();

  console.log('%c data: ', 'background-color: lightgreen; color: black;', data);

  return (
    <div className='m-5'>
      <h5>{data.pageContent.topContent[0].title}</h5>
      <h5>{data.pageContent.topContent[0].description}</h5>
      <DataTable columns={columns} data={rows} />

      <h5>{data.pageContent.topContent[0].title}</h5>
      <h5>{data.pageContent.topContent[0].description}</h5>
    </div>
  );
};

export default Home;
