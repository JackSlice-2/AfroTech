"use client";

import Dashboard from "./components/Dashboard";
import PageContainer from "@/app/components/Elements/PageContainer";

export const dynamic = "force-dynamic";

const App: React.FC = () => {
  return (
      <PageContainer>
        <Dashboard />
      </PageContainer>
  );
}

export default App;
