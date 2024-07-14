"use client"

import React from "react";
import { create } from "../../actions/actions";
import { Button } from "../../components/ui/button"
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    try {
      const assetProfileId = await create(formData)
      window.localStorage.setItem("assetProfileId", assetProfileId);

      router.push('/dashboard2')
    } catch (error) {
      console.log(error)
    }
  }

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
            <form 
              onSubmit={handleSubmit}
            >
              <div className="bg-white rounded-[20px] border-solid border-transparent border-[1px] p-10 flex flex-col gap-10 justify-start self-stretch shrink-0 relative shadow-[0px_2px_8px_0px_rgba(48, 49,53, 0.16)]">
                <div className="flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-5 items-center justify-start self-stretch shrink-0 relative">
                    <div className="text-stone-900 font-Nunito text-left text-[22px] leading-7 tracking-[0.005em] font-extrabold relative w-[196px]">
                      Functional Group
                    </div>
                    <div className="">
                      <input 
                        type="text"
                        name="functional_group"
                        className="bg-sky-50 rounded-xl border-solid border-transparent border-[1px] p-3 pl-4 pr-4 flex flex-row gap-0 items-center justify-start shrink-0 w-[305px] relative
                        text-stone-900 font-Nunito text-[18px] leading-6 tracking-[0.005em] font-medium flex-1"
                        placeholder="Isi..."
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-row gap-5 items-center justify-start self-stretch shrink-0 relative">
                    <div className="text-stone-900 text-left font-Nunito text-[22px] leading-7 tracking-[0.005em] font-extrabold relative w-[196px]">
                      System
                    </div>
                    <div>
                      <input 
                        type="text"
                        name="system"
                        className="bg-sky-50 rounded-xl border-solid border-transparent border-[1px] p-3 pl-4 pr-4 flex flex-row gap-0 items-center justify-start shrink-0 w-[305px] relative
                        text-stone-900 font-Nunito text-[18px] leading-6 tracking-[0.005em] font-medium flex-1"
                        placeholder="Isi..."
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-row gap-5 items-center justify-start self-stretch shrink-0 relative">
                    <div className="text-stone-900 text-left font-Nunito text-[22px] leading-7 tracking-[0.005em] font-extrabold relative w-[196px]">
                      Equipment Item
                    </div>
                    <div>
                      <input 
                        type="text"
                        name="equipment_item"
                        className="bg-sky-50 rounded-xl border-solid border-transparent border-[1px] p-3 pl-4 pr-4 flex flex-row gap-0 items-center justify-start shrink-0 w-[305px] relative
                        text-stone-900 font-Nunito text-[18px] leading-6 tracking-[0.005em] font-medium flex-1"
                        placeholder="Isi..."
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-row gap-5 items-center justify-start self-stretch shrink-0 relative">
                    <div className="text-stone-900 text-left font-Nunito text-[22px] leading-7 tracking-[0.005em] font-extrabold relative w-[196px]">
                      Component
                    </div>
                    <div>
                      <input 
                        type="text"
                        name="component"
                        className="bg-sky-50 rounded-xl border-solid border-transparent border-[1px] p-3 pl-4 pr-4 flex flex-row gap-0 items-center justify-start shrink-0 w-[305px] relative
                        text-stone-900 font-Nunito text-[18px] leading-6 tracking-[0.005em] font-medium flex-1"
                        placeholder="Isi..."
                        required
                      />
                    </div>
                  </div>
                </div>
                  <Button
                    type="submit"
                    className="rounded-xl p-4 pl-6 pr-6 flex flex-row items-center justify-center self-stretch shrink-0 relative border-none cursor-pointer transition-transform text-left font-Nunito text-[18px] font-bold leading-6 tracking-[0.005em] hover:scale-95">
                    Lanjut
                </Button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Page;