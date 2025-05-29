  import { useCallback } from "react";
  import { useDropzone } from "react-dropzone";
  import SVGImage from "./SVG/SVGImage";
  import SVGPlus from "./SVG/SVGPlus";

  function ImageGalleryUploader({ files, setFiles, setValue }) {
    const onDrop = useCallback(
      (acceptedFiles) => {
        if (files.length + acceptedFiles.length > 10) {
          alert("حداکثر ۱۰ عکس مجاز است");
          return;
        }

        const mappedFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );

        const newFiles = [...files, ...mappedFiles];
        setFiles(newFiles);
        setValue("images", newFiles);
        
      },
      [files]
    );

    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: { "image/*": [] },
      multiple: true,
    });

    const removeImage = (index) => {
      const updatedFiles = files.filter((_, i) => i !== index);
      setFiles(updatedFiles);
      setValue("images", updatedFiles);
    };

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 ">
          <div
            {...getRootProps()}
            className="border-dashed border-2 border-gray-300 h-32 p-6 rounded-lg cursor-pointer flex items-center justify-center outline-none relative "
          >
            <input {...getInputProps()} />
            <SVGImage
              width={"25px"}
              height={"25px"}
              fill={"rgba(0,0,0,0.24)"}
            />
            <div className="bg-white rounded-[50%] h-5 w-5 absolute left-[50%] top-[50%] ">
              <SVGPlus width={"17px"} height={"17px"} fill={"#be3737"} />
            </div>
          </div>
          {files.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={file.preview}
                alt="preview"
                className="w-full h-32 object-cover rounded-md"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded px-2 py-0.5"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default ImageGalleryUploader;
