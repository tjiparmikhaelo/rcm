"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [currentStep, setCurrentStep] = useState('pilihFailureMode');
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleOptionChange = (step, value) => {
    setFormData(prev => ({ ...prev, [step]: value }));
    switch(step) {
      case 'CCR':
        value === 'Yes' ? setCurrentStep('isHL') : setCurrentStep('CMT');
        break;
      case 'isHL':
        value === 'H' ? setCurrentStep('OTC') : setCurrentStep('RTF');
        break;
      case 'CMT':
        setCurrentStep('Cause');
        break;
      case 'Cause':
        value === 'WI' ? setCurrentStep('WI') : setCurrentStep('WO');
        break;
      case 'WI':
        value === 'Yes' ? setCurrentStep('OTC') : setCurrentStep('RDS');
        break;
      case 'WO':
        value === 'Yes' ? setCurrentStep('PM') : setCurrentStep('HID_EVD');
        break;
      case 'HID_EVD':
        value === 'HID' ? setCurrentStep('LOF') : setCurrentStep('STOP');
        break;
      case 'LOF':
        value === 'Yes' ? setCurrentStep('FF') : setCurrentStep('OTC');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const finalSteps = ['OTC', 'RTF', 'STOP', 'RDS', 'PM', 'FF'];
    if (finalSteps.includes(currentStep)) {
      // Save the final step to the database
      saveFormData(currentStep);
  
      // Redirect to the next page
      router.push('/dashboard4');
    }
  }, [currentStep]);
  
  const saveFormData = async (finalStep) => {
    try {
      const assetProfileId = localStorage.getItem("assetProfileId");
      const response = await fetch('/api/saveFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ finalStep, assetProfileId }),
      });
  
      if (!response.ok) {
        throw new Error('Something went wrong while saving data');
      }
  
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };
    

  const renderStep = () => {
    switch(currentStep) {
      case 'pilihFailureMode':
        return (
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition" onClick={() => setCurrentStep('CCR')}>Pilih Failure Mode</button>
          </div>
        );
      case 'CCR':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Confidence on Current Risk (CCR)</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="Yes" name="CCR" onChange={() => handleOptionChange('CCR', 'Yes')} /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="No" name="CCR" onChange={() => handleOptionChange('CCR', 'No')} /> No
              </label>
            </div>
          </div>
        );
      case 'isHL':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Highest or Lowest</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="H" name="isHL" onChange={() => handleOptionChange('isHL', 'H')} /> H
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="L" name="isHL" onChange={() => handleOptionChange('isHL', 'L')} /> L
              </label>
            </div>
          </div>
        );
      case 'CMT':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Condition Monitoring Task</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="Yes" name="CMT" onChange={() => handleOptionChange('CMT', 'Yes')} /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="No" name="CMT" onChange={() => handleOptionChange('CMT', 'No')} /> No
              </label>
            </div>
          </div>
        );
      case 'Cause':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cause</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="WI" name="Cause" onChange={() => handleOptionChange('Cause', 'WI')} /> WI
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="WO" name="Cause" onChange={() => handleOptionChange('Cause', 'WO')} /> WO
              </label>
            </div>
          </div>
        );
      case 'WI':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Wear In</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="Yes" name="WI" onChange={() => handleOptionChange('WI', 'Yes')} /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="No" name="WI" onChange={() => handleOptionChange('WI', 'No')} /> No
              </label>
            </div>
          </div>
        );
      case 'WO':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Wear Out</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="Yes" name="WO" onChange={() => handleOptionChange('WO', 'Yes')} /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="No" name="WO" onChange={() => handleOptionChange('WO', 'No')} /> No
              </label>
            </div>
          </div>
        );
      case 'HID_EVD':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hidden/ Evident</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="HID" name="HID_EVD" onChange={() => handleOptionChange('HID_EVD', 'HID')} /> HID
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="EVD" name="HID_EVD" onChange={() => handleOptionChange('HID_EVD', 'EVD')} /> EVD
              </label>
            </div>
          </div>
        );
      case 'LOF':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Loss of Function (LOF)</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="Yes" name="LOF" onChange={() => handleOptionChange('LOF', 'Yes')} /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="No" name="LOF" onChange={() => handleOptionChange('LOF', 'No')} /> No
              </label>
            </div>
          </div>
        );
      case 'OTC':
      case 'RTF':
      case 'STOP':
      case 'RDS':
      case 'PM':
      case 'FF':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{currentStep}</h2>
            <p className="text-lg">Final step reached: {currentStep}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <title>RCM</title>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row gap-4 items-center justify-center">
            <img 
              src="/ITS_Logo.png" 
              alt="logo its" 
              className="w-16 h-16 object-cover"
            />
            <img
              src="/DMOM_Logo.png" 
              alt="logo dmom"
              className="w-40 h-16 object-cover"
            />
          </div>
          <div className="w-full">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;