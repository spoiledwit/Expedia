"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import PhotosUploader from "@/components/PhotosUploader";
import axios from "axios";
import Button from "@/components/Button";

type Props = {
  documentName: string;
  countryName: string;
  mrz: {
    dateOfBirth: string;
    dateOfExpiry: string;
    documentNumber: string;
    givenNames: string;
    names: string;
    personalNumber: string;
    sex: string;
    surname: string;
  };
  ocr: {
    authority: string;
    dateOfBirth: string;
    dateOfExpiry: string;
    dateOfIssue: string;
    name: string;
    nationality: string;
  };
};

const ResultCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <div className="border-b pb-2">
    <h4 className="text-sm font-semibold text-gray-600">{title}</h4>
    <p className="text-lg text-gray-800">{value}</p>
  </div>
);

const VerifierPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Props>();

  const handleGetVerification = async () => {
    const inputurl = images[0];
    const encodedParams = new URLSearchParams();
    encodedParams.set(
      "inputurl",
      inputurl
    );

    const options = {
      method: "POST",
      url: "https://document-ocr1.p.rapidapi.com/idr",
      headers: {
        "X-RapidAPI-Key": "410dcd533cmshf897560c286ee4ap1335ddjsna2af37559caa",
        "X-RapidAPI-Host": "document-ocr1.p.rapidapi.com",
      },
      data: encodedParams,
    };
    setLoading(true);
    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white pt-32 flex flex-col items-center">
      <h2 className="text-3xl font-bold mt-4 text-gray-900 mb-4">
        Test Page for Verification Step
      </h2>
      <PhotosUploader
        addedPhotos={images}
        onChange={(photos) => setImages(photos)}
        maxPhotos={1}
      />
      <Button
        onClick={() => {
          handleGetVerification();
        }}
        text={loading ? "Verifying..." : "Verify"}
      />
      {data && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Verification Results:
          </h3>
          <ul
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <li className="mb-4">
              <ResultCard title="Document Name" value={data.documentName} />
            </li>
            <li className="mb-4">
              <ResultCard title="Country Name" value={data.countryName} />
            </li>
            <li className="mb-4">
              <ResultCard title="Date of Birth" value={data.ocr.dateOfBirth} />
            </li>
            <li className="mb-4">
              <ResultCard
                title="Document Date of Expiry"
                value={data.ocr.dateOfExpiry}
              />
            </li>
            <li className="mb-4">
              <ResultCard
                title=" Document Number"
                value={data.mrz.documentNumber}
              />
            </li>
            <li className="mb-4">
              <ResultCard
                title="MRZ - Given Names"
                value={data.mrz.givenNames}
              />
            </li>
            <li className="mb-4">
              <ResultCard title=" Surname" value={data.mrz.surname} />
            </li>
            <li className="mb-4">
              <ResultCard title=" Sex" value={data.mrz.sex} />
            </li>
            <li className="mb-4">
              <ResultCard
                title="MRZ - Personal Number"
                value={data.mrz.personalNumber}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default VerifierPage;
