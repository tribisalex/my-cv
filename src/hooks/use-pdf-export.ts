import { useRef, useCallback } from "react";

export const usePdfExport = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const exportToPdf = useCallback(async () => {
    if (!contentRef.current) return;

    try {
      const [html2canvas, jsPDF] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const element = contentRef.current;
      const pdf = new jsPDF.default("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const scale = 3;
      const elementWidth = element.scrollWidth;
      const elementHeight = element.scrollHeight;

      const totalScaledHeight =
        (elementHeight * pageWidth * scale) / elementWidth;

      let position = 0;
      let currentPage = 1;

      while (position < totalScaledHeight) {
        if (currentPage > 1) {
          pdf.addPage();
        }

        const canvas = await html2canvas.default(element, {
          scale: scale,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          y: (position * elementHeight) / totalScaledHeight,
          height: (pageHeight * scale * elementHeight) / totalScaledHeight,
          width: elementWidth,
          scrollY: 0,
          allowTaint: false,
          imageTimeout: 15000,
        });

        const imgData = canvas.toDataURL("image/png", 1.0);

        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

        position += pageHeight * scale;
        currentPage++;
      }

      pdf.save("CV_Трибис_Александр.pdf");
    } catch (error) {
      console.error("Ошибка при экспорте в PDF:", error);
      alert("Произошла ошибка при экспорте в PDF");
    }
  }, []);

  return { contentRef, exportToPdf };
};
