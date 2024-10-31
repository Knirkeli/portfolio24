"use client";
import React, { useEffect, useState } from "react";
import {
  fetchContactInfo,
  ContactInfo,
  urlFor,
} from "../components/import/fetchContact";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";

const DisplayContactInfo: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContactInfo();
      setContactInfo(data);
    };

    fetchData();
  }, []);

  if (!contactInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="mb-4 pb-16">
      <CardHeader>
        <CardTitle className="text-center">Contact Information</CardTitle>
        <CardDescription>
          Reach out if you have any questions or wish to contact me about a job!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="underline">
          <p>Phone: {contactInfo.phone}</p>
        </div>
        <div className="underline">
          <p>Email: {contactInfo.email}</p>
        </div>
        <div className="underline">
          <p>
            GitHub:{" "}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.github}
            </a>
          </p>
        </div>
        <div className="underline">
          <p>
            LinkedIn:{" "}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.linkedin}
            </a>
          </p>
        </div>
        <div>
          <p>Description: {contactInfo.description}</p>
        </div>
        <div>
          {contactInfo.contactPhoto && (
            <img
              src={urlFor(contactInfo.contactPhoto).url()}
              alt="Contact Photo"
              width={900}
              height={300}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DisplayContactInfo;
