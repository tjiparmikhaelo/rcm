"use client"

// app/page.tsx (misalnya)
import { useEffect, useState } from "react";

const Page = () => {
  const [assetData, setAssetData] = useState({
    functionalGroup: "",
    system: "",
    equipmentItem: "",
    component: "",
    taskType: "",
  });

  useEffect(() => {
    const assetId = localStorage.getItem("assetProfileId");
    console.log('Asset ID from localStorage:', assetId);

    if (assetId) {
      fetchAssetData(assetId);
    }
  }, []);

  const fetchAssetData = async (id: string) => {
    try {
      const response = await fetch(`/api/asset/${id}`);
      if (response.ok) {
        const data = await response.json();
        setAssetData({
          functionalGroup: data.functional_group || "",
          system: data.system || "",
          equipmentItem: data.equipment_item || "",
          component: data.component || "",
          taskType: data.task_type || "",
        });
      } else {
        const errorText = await response.text();
        console.error('Error fetching asset data:', errorText);
      }
    } catch (error) {
      console.error("Error fetching asset data:", error);
    }
  };

  return (
    <div className="w-full relative bg-[#f4f7fe] h-[1024px] overflow-hidden flex-shrink-0 text-center text-2xl text-[#4d4f56] font-nunito">
      <div className="absolute top-[calc(50%-380px)] left-[calc(50%-700px)] shadow-md rounded-2xl bg-white w-[1400px] h-[872px] overflow-hidden flex flex-col items-start justify-start p-[60px] gap-[80px]">
        <div className="self-stretch rounded-2xl border-2 border-solid border-[#d8dce8] overflow-hidden flex flex-col items-start justify-start gap-[20px]">
          <div className="flex self-stretch bg-[#f6f8fa] flex-row items-center justify-center p-[16px_24px]">
            <div className="relative leading-[40px] font-medium">Summary Of Maintenance Task</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-right text-[22px] text-[#303135]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="w-[400px] flex flex-row items-center justify-end p-[16px_24px] box-border">
                <div className="relative leading-[28px] font-extrabold">Maintenance Category :</div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start p-[16px_0px] text-left text-[#4d4f56]">
                <div className="relative leading-[28px] font-semibold">Kategori A</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="w-[400px] flex flex-row items-center justify-end p-[16px_24px] box-border">
                <div className="relative leading-[28px] font-extrabold">Functional Group :</div>
              </div>
              <div className="w-[872px] flex flex-row items-center justify-start p-[16px_0px] box-border text-left text-[#4d4f56]">
                <div className="relative leading-[28px] font-semibold">{assetData.functionalGroup}</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="w-[400px] flex flex-row items-center justify-end p-[16px_24px] box-border">
                <div className="relative leading-[28px] font-extrabold">System :</div>
              </div>
              <div className="w-[872px] flex flex-row items-center justify-start p-[16px_0px] box-border text-left text-[#4d4f56]">
                <div className="relative leading-[28px] font-semibold">{assetData.system}</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="w-[400px] flex flex-row items-center justify-end p-[16px_24px] box-border">
                <div className="relative leading-[28px] font-extrabold">Equipment Item :</div>
              </div>
              <div className="w-[872px] flex flex-row items-center justify-start p-[16px_0px] box-border text-left text-[#4d4f56]">
                <div className="relative leading-[28px] font-semibold">{assetData.equipmentItem}</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="w-[400px] flex flex-row items-center justify-end p-[16px_24px] box-border">
                <div className="relative leading-[28px] font-extrabold">Component :</div>
              </div>
              <div className="w-[872px] flex flex-row items-center justify-start p-[16px_0px] box-border text-left text-[#4d4f56]">
                <div className="relative leading-[28px] font-semibold">{assetData.component}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-lg">
          <div className="w-[43px] flex flex-col items-start justify-start gap-[20px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">#</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center p-[12px_16px] text-[#303135]">
              <b className="self-stretch relative leading-[24px]">1</b>
            </div>
          </div>
          <div className="w-[340px] flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Task</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-left text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">Isi dengan teks...</i>
            </div>
          </div>
          <div className="w-[150px] flex flex-col items-start justify-start gap-[18px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Task Type</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">{assetData.taskType}</i>
            </div>
          </div>
          <div className="w-[120px] flex flex-col items-start justify-start gap-[18px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Item No. </div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">1x</i>
            </div>
          </div>
          <div className="w-[115px] flex flex-col items-start justify-start gap-[18px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Risk</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">12</i>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Frequency</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">Isi dengan teks...</i>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] text-left"></div>
          </div>
          <div className="w-[240px] flex flex-col items-start justify-start gap-[18px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Comments</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">Isi dengan teks...</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
