import DashboardSidenav from "@/components/dashboard/DashboardSidenav";
import React, { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <section className="page-container grid grid-cols-4 sm:grid-cols-1 grid-rows-auto">
      <div className="lg:col-span-1">
        <DashboardSidenav />
      </div>
      <div className="lg:col-span-3">{children}</div>
    </section>
  );
};

export default Layout;
