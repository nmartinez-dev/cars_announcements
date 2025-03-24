'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { rest } from '@/rest/rest';
import { endpoints } from '@/constants/endpoints';
import Loading from '@/common/loading/loading';
import { alertDefault, alertList } from '@/common/alert/alert';
import { DataTable } from './components/table/table';
import { columns } from './components/table/columns';
import { Announcement } from './components/table/columns';
import ThemeToggle from './components/theme/toggle';

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

  return (
    <div className='m-5'>
      <div className='flex justify-end'>
        <ThemeToggle />
      </div>

      <div className='text-center m-5'>
        {data.pageContent.topContent[0].description}
      </div>

      <DataTable columns={columns} data={rows} />

      <div className='text-center mt-5 mb-5'>
        {data.pageContent.bottomContent[0].description}
      </div>
    </div>
  );
};

export default Home;
