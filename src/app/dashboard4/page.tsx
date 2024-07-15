// components/Page.tsx

"use client";

import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const Page = () => {
  const [assetData, setAssetData] = useState({
    functionalGroup: "",
    system: "",
    equipmentItem: "",
    component: "",
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
      // const response = await fetch(`/api/asset/`);
      // const data = await response.json();

      const data = await prisma.asset_profile.findUnique({
        where: { id },
      });

      if (data) {
        setAssetData({
          functionalGroup: data.functional_group || "",
          system: data.system || "",
          equipmentItem: data.equipment_item || "",
          component: data.component || "",
        });
      } else {
        console.error('Error');
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
          <div className="w-[360px] flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Task</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-left text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">Isi dengan teks...</i>
            </div>
          </div>
          <div className="w-[115px] flex flex-col items-start justify-start gap-[18px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Item No</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center p-[12px_16px] text-[#303135]">
              <b className="self-stretch relative leading-[24px]">1.2 ; 1.3</b>
            </div>
          </div>
          <div className="w-[100px] flex flex-col items-start justify-start gap-[18px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Risk</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">Isi dengan teks...</i>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Frequency</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">Isi dengan teks...</i>
            </div>
          </div>
          <div className="w-[243px] flex flex-col items-start justify-start gap-[18px] text-left">
            <div className="self-stretch rounded-md bg-[#f6f8fa] border border-solid border-[#d8dce8] flex flex-col items-center justify-center p-[12px_16px]">
              <div className="relative leading-[24px] font-semibold">Comments</div>
            </div>
            <div className="self-stretch rounded-md flex flex-col items-center justify-center p-[12px_16px] text-[#9196a6]">
              <i className="self-stretch relative leading-[24px]">Isi dengan teks...</i>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-[calc(50%-720px)] shadow-md bg-white w-[1440px] flex flex-col items-start justify-start p-[24px_80px] text-left text-[#007cff]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[25px]">
            <div className="rounded-xl bg-[#e7f2ff] flex flex-row items-center justify-start p-[16px_24px] gap-[12px]">
              <img className="w-6 h-6 relative" alt="" src="/icon.svg" />
              <b className="relative tracking-[0.01em] leading-[32px]">Summary</b>
            </div>
            <div className="w-[167px] rounded-xl flex flex-row items-center justify-start p-[16px_24px] box-border gap-[12px] text-[#71757d]">
              <img className="w-6 h-6 relative" alt="" src="/icon1.svg" />
              <b className="relative tracking-[0.01em] leading-[32px]">Table</b>
            </div>
          </div>
          <div className="rounded-xl bg-[#007cff] flex flex-row items-center justify-start p-[16px_24px] gap-[12px] text-lg text-white">
            <img className="w-6 h-6 relative" alt="" src="/icon2.svg" />
            <b className="relative tracking-[0.01em] leading-[24px]">Add Maintenance Task</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;