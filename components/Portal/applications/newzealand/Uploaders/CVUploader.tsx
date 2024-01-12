import React, { useEffect } from "react";
import PDFUploader from "@/components/PdfUploader";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const CvUploader = ({ form }: { form: any }) => {

  const [pdfs, setPdfs] = React.useState<any>([]);
  useEffect(() => {
    if (pdfs.length > 0) {
      form.setValue(`cvPdf`, pdfs[0]);
    }
    else {
        form.setValue(`cvPdf`, null);
    }
  }, [pdfs]);

  useEffect(() => {
    if (form.getValues("cvPdf")) {
      setPdfs([form.getValues("cvPdf")]);
    }
  }
    , [form.getValues("cvPdf")]);

  return (
    <div>
      <FormField
        control={form.control}
        name={`cvPdf`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <PDFUploader
                addedPdfs={pdfs}
                onChange={(pdfs: any) => {
                  setPdfs(pdfs);
                }}
                maxPdfs={1}
              />
            </FormControl>
            {!form.getValues("cvPdf") && (
            <FormMessage />                     
            )}
          </FormItem>
        )}
      />
    </div>
  );
};

export default CvUploader;
