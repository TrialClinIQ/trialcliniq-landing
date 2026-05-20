"use client";

import Script from "next/script";

export function PipedriveWebForm() {
  return (
    <div className="pipedrive-webform-container">
      <div
        className="pipedriveWebForms"
        data-pd-webforms="https://webforms.pipedrive.com/f/6N1gJmKYLmCx2iF3q8mKGkUgvas581wTixihz7rvZoH0sCnQgqZs8haUdzpNVM1KBJ"
      />
      <Script
        src="https://webforms.pipedrive.com/f/loader"
        strategy="lazyOnload"
      />
    </div>
  );
}
