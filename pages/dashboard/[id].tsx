import React from 'react';
import DrawerLayout from 'components/DrawerLayout';
import PageTitle from 'components/PageTitle';

const Dashboard = () => {
  return (
    <>
      <DrawerLayout>
        <PageTitle title="Dashboard" />
      </DrawerLayout>
    </>
  )
}

export default Dashboard;