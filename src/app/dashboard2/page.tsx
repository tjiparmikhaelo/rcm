// app/page.js (or app/index.js)

import { PrismaClient } from '@prisma/client';
import FailureModeList from '@/components/FailureModeList';

const prisma = new PrismaClient();

export default async function Page() {
  const failureModes = await prisma.failure_mode.findMany();
  const failureCount = await prisma.failure_mode.count();

  return (
    <div>
      <title>RCM</title>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      <FailureModeList failureModes={failureModes} failureCount={failureCount} />
    </div>
  );
}