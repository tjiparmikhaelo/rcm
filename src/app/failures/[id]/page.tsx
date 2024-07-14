import prisma from "@/lib/prisma"

const Page = async ({ params }) => {
  const failure = await prisma.failure_mode.findUnique({
    where: {
      id: params.id
    },
  })

  return (
    <div>
        <title>RCM</title>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
        <div className="box-border p-10 pt-40 pb-[384px] pl-[419px] pr-[420px] flex flex-col gap-2 items-center justify-center relative bg-center bg-cover bg-no-repeat custom-background">
          <div className="flex flex-col gap-10 items-center justify-center shrink-0 relative">
            <div className="flex flex-row gap-7 items-center justify-center shrink-0 relative">
              <img 
                src="/ITS_Logo.png" 
                alt="logo its" 
                className="shrink-0 w-16 h-16 relative object-cover"
              />
              <img
                src="/DMOM_Logo.png" 
                alt="logo dmom"
                className="shrink-0 w-[152px] h-16 relative object-cover"
              />
            </div>
            <h1 className="text-3xl font-semibold flex relative items-center">
              {failure?.failure_mode}
            </h1>
          </div>
        </div>
    </div>
  );
};

export default Page;