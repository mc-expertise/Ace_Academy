import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import {
  DashboardIcon,
  EmployeesIcon,
  RequestsIcon,
} from '../../components/Shared/Icons';
import AdminHeader from '../../components/Shared/AdminHeader';
import AdminFiltre from '../../components/Admins/AdminFiltre';
import RequestsTable from '../../components/Admins/RequestsTable';

const RequestsPage = () => {
  return (
    <div className="bg-[#F5F5F5] ">
      <AdminHeader />
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          className="border-b border-[rgba(0, 0, 0, 0.10)] !bg-white px-[66px]"
          classNames={{
            tabList: 'gap-6 w-full relative rounded-none p-0 ',
            cursor: 'w-full bg-[#F09272]',
            tab: 'max-w-fit px-0 h-12',
            tabContent: 'group-data-[selected=true]:text-[#1F1F1F]',
          }}>
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <DashboardIcon />
                <span>Dashboard</span>
              </div>
            }
          />

          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <EmployeesIcon />
                <span>Employees</span>
              </div>
            }
          />

          <Tab
            key="videos"
            title={
              <div className="flex items-center space-x-2">
                <RequestsIcon />
                <span>Requests</span>
                {/* <Chip size="sm" variant="faded">
                  1
                </Chip> */}
              </div>
            }>
            <div className="pt-8 bg-transparent px-[66px] h-full">
              <h1 className="main-title mb-2">Requests</h1>
              <AdminFiltre />
              <RequestsTable />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default RequestsPage;
