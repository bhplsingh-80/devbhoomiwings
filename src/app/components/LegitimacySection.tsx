import { useState, ChangeEvent } from 'react';

export function LegitimacySection() {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
          Our Certifications &amp; Legitimacy
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          We are a fully registered and certified travel agency. Upload your GST,
          ISO or other official certificates here to display them to visitors.
        </p>
        <div className="mb-8">
          <input
            type="file"
            multiple
            accept="image/*,.pdf"
            onChange={handleChange}
            className="mx-auto"
          />
        </div>
        {files.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {files.map((file, idx) => {
              const url = URL.createObjectURL(file);
              return (
                <div key={idx} className="border p-2 rounded">
                  {file.type.startsWith('image/') ? (
                    <img
                      src={url}
                      alt={file.name}
                      className="max-h-32 mx-auto"
                    />
                  ) : (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#14b8a6] underline"
                    >
                      {file.name}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
