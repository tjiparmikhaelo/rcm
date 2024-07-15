'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { FailureModeType } from "../types/failureModeType"

export default function FailureModeList({ failureModes, failureCount }: { failureModes: FailureModeType, failureCount: number }) {
  const [selectedMode, setSelectedMode] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem('assetProfileId');
    console.log(id);
  }, []);

  const handleSelectMode = (failure_mode: string) => {
    setSelectedMode(failure_mode);
  };

  const handleSave = async () => {
    if (!selectedMode) {
      console.log('No mode selected');
      return;
    }
  
    setIsLoading(true);
    console.log('Saving mode:', selectedMode);
  
    try {
      const assetProfileId = localStorage.getItem('assetProfileId');
      console.log('Asset Profile ID:', assetProfileId);
  
      const response = await fetch('/api/saveMode', {  // Ensure the URL is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assetProfileId, failureMode: selectedMode }),
      });
  
      console.log('Fetch Response:', response);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Saved data:', data);
  
      // Navigate to the next page after saving
      router.push('/dashboard3');
    } catch (error) {
      console.error('Error saving mode:', error);
    } finally {
      setIsLoading(false);
    }
  };  

  return (
    <div className="box-border p-10 pt-40 pb-[384px] pl-[419px] pr-[420px] flex flex-col gap-2 items-center justify-center relative bg-center bg-cover bg-no-repeat custom-background">
      <div className="flex flex-col gap-10 items-center justify-center shrink-0 relative">
        <div className="flex flex-row gap-7 items-center justify-center shrink-0 relative">
          <img src="/ITS_Logo.png" alt="logo its" className="shrink-0 w-16 h-16 relative object-cover" />
          <img src="/DMOM_Logo.png" alt="logo dmom" className="shrink-0 w-[152px] h-16 relative object-cover" />
        </div>
        <div className="box-border bg-white rounded-[20px] border-solid bg-transparent border-[1px] p-10 flex flex-col gap-10 items-start justify-start shrink-0 relative shadow-md">
          <div className="flex flex-col gap-7 items-start justify-center shrink-0 w-[480px] relative">
            <div className="text-stone-900 text-left font-Nunito text-[28px] leading-9 tracking-[0.005em] font-extrabold relative self-stretch">
              Failure Mode ({failureCount})
            </div>
            <div className="w-[480px]">
              <div className="flex cursor-pointer items-center h-12 leading-6 pl-0 pr-0 pt-5 pb-5 rounded-[8px] bg-sky-50 justify-between">
                <span className="ml-3 font-Nunito font-normal text-xl">Pilih Failure Mode...</span>
                <i className="uil uil-angle-down text-[25px]"></i>
              </div>
              <div className="p-5 mt-4 bg-white rounded-xl border-solid border-slate-700/35 border-[1px] relative">
                <div className="relative max-h-[400px]">
                  <i className="uil uil-search absolute left-[15px] bg-sky-50/5 text-xl leading-[53px]"></i>
                  <input
                    type="text"
                    placeholder="Cari"
                    className="h-[53px] w-full outline-none text-[17px] rounded-[8px] pb-0 pt-0 pl-[43px] pr-[15px] border-solid border-[1px] border-slate-700/35"
                  />
                </div>
                <ul className="options overflow-auto scrollbar-w-8 scrollbar-track-f4f7fe scrollbar-thumb-D8DCE8 scrollbar-rounded-24 mt-[20px] max-h-[400px] overflow-y-auto">
                  {failureModes.map((failureMode) => (
                    <li
                      key={failureMode.id}
                      className={`flex cursor-pointer h-[50px] text-[16px] leading-[22px] rounded-[8px] w-full items-center ${
                        selectedMode === failureMode.failure_mode ? 'bg-slate-100' : 'hover:bg-sky-50'
                      }`}
                      onClick={() => handleSelectMode(failureMode.failure_mode)}
                    >
                      {failureMode.item_no}{" "}{failureMode.failure_mode}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start self-stretch shrink-0 relative">
            <Button
              className="rounded-xl pt-4 pr-6 pb-4 pl-6n flex flex-row justify-center self-stretch shrink-0 relative border-none cursor-pointer transition-all text-white text-left font-Nunito text-[18px] leading-6 tracking-[0.005em] font-bold hover:scale-95"
              onClick={handleSave}
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Lanjut'}
            </Button>
            <Button className="bg-indigo-50 rounded-xl pt-4 pr-6 pb-4 pl-6n flex flex-row justify-center self-stretch shrink-0 relative border-none cursor-pointer transition-all text-sky-500 text-left font-Nunito text-[18px] leading-6 tracking-[0.005em] font-bold hover:scale-95 hover:bg-indigo-50">
              <Link href="/failures/add">Tambah Failure Mode</Link>
            </Button>
            <Button className="bg-[none] rounded-xl pt-4 pr-6 pb-4 pl-6n flex flex-row justify-center self-stretch shrink-0 relative border-none cursor-pointer transition-all text-sky-500 text-left font-Nunito text-[18px] leading-6 tracking-[0.005em] font-bold hover:bg-[none]">
              <Link href="/dashboard">Kembali</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
