import React, { useEffect } from "react";
import PhotosUploader from "@/components/PhotosUploader";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const PassportUploader = ({ form }: { form: any }) => {
  const [images, setImages] = React.useState<any>([]);
  useEffect(() => {
    if (images.length > 0) {
      form.setValue(`passportImage`, images[0]);
    }
    else {
        form.setValue(`passportImage`, null);
    }
  }, [images]);

  useEffect(() => {
    if (form.getValues("passportImage")) {
      setImages([form.getValues("passportImage")]);
    }
  }
    , [form.getValues("passportImage")]);

  return (
    <div>
      <FormField
        control={form.control}
        name={`passportImage`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <PhotosUploader
                addedPhotos={images}
                onChange={(images: any) => {
                  setImages(images);
                }}
                maxPhotos={1}
              />
            </FormControl>
            {!form.getValues("passportImage") && (
            <FormMessage />                     
            )}
          </FormItem>
        )}
      />
    </div>
  );
};

export default PassportUploader;
